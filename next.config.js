module.exports = {
    env: {
      "BASE_URL": process.env.NODE_ENV==='production'? "https://job-visa.herokuapp.com": "http://localhost:3000",
      "MONGODB_URL": process.env.MONGODB_URL,
      "ACCESS_TOKEN_SECRET": process.env.ACCESS_TOKEN_SECRET,
      "REFRESH_TOKEN_SECRET": process.env.REFRESH_TOKEN_SECRET,
      "PAYPAL_CLIENT_ID": process.env.PAYPAL_CLIENT_ID,
      "CLOUD_UPDATE_PRESET": process.env.CLOUD_UPDATE_PRESET,
      "CLOUD_NAME": process.env.CLOUD_NAME,
      "CLOUD_API": process.env.CLOUD_API,
      "GOOGLE_CLIENT_ID": process.env.GOOGLE_CLIENT_ID,
      "GOOGLE_CLIENT_SECRET": process.env.GOOGLE_CLIENT_SECRET,
      "SENDER_EMAIL": process.env.SENDER_EMAIL,
      "SENDER_EMAIL_PASSWORD": process.env.SENDER_EMAIL_PASSWORD,
      "EMAIL_SERVICE": process.env.EMAIL_SERVICE,
      "EMAIL_PORT": process.env.EMAIL_PORT,
      "STRIPE_PUBLISHABLE_KEY": process.env.STRIPE_PUBLISHABLE_KEY,
      "STRIPE_SECRET_KEY": process.env.STRIPE_SECRET_KEY,
      "STRIPE_WEBHOOK_ENDPOINT_SECRET": process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET
    }
  }
