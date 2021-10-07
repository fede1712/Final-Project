const Stripe = require('stripe')
const express = require('express')
const router = express.Router()
const stripe = new Stripe(process.env.STRIPE_KEY)

router.post("/", async (req, res) => {
    // you can get more data to find in a database, and so on
    const { id, amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "TRICYCLE",
            payment_method: id,
            confirm: true, //confirm the payment at the same time
        });


        return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
        console.error(error);
        return res.json({ message: error.raw.message });
    }
});

module.exports = router