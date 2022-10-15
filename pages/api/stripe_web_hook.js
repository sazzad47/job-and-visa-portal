import { buffer } from "micro";
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01'
});
const webhookSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET;

export const config = {
    api: {
        bodyParser: false,
    },
};


const handler = async (req, res) => {
    if (req.method === "POST") {
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        let stripeEvent;

        try {
            stripeEvent = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
            
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        if ( 'checkout.session.completed' === stripeEvent.type ) {
            const session = stripeEvent.data.object;
            const data = session.metadata
            console.log( 'payment success', data );

   }

        res.json({ received: true });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;