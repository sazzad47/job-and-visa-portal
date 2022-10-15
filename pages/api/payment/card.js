const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import VisaApplicant from '../../../models/visaApplicant'
import JobApplicant from '../../../models/jobApplicant'
import Payment from '../../../models/paymentModel'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'
import sendEmail from '../../../utils/mail';
async function CreateStripeSession(req, res) {
  const result = await auth(req, res)
  const { item } = req.body;
  console.log('checkout', item)
  const redirectURL =
    `${process.env.BASE_URL}/payment`

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        // images: [item.image],
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      user: JSON.stringify(result.id),
      visaApplyID: item.visaApplyID,
      amount: item.price,
      method: item.method,
    },
  });

  
  res.json({ id: session.id });
}

export default CreateStripeSession;