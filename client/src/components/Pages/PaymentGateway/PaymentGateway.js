import React from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeService from '../../../services/stripe.service';


const stripePromise = loadStripe(process.env.REACT_APP_API_KEY_STRIPE_PUBLIC)

export default function PaymentGateway(props) {

    const stripeService = new StripeService()

    const CheckoutForm = () => {

        const stripe = useStripe()
        const elements = useElements()

        const handleSubmit = async (e) => {
            e.preventDefault()

            console.log(props)

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)
            })

            console.log(error)

            if (!error) {
                const { id } = paymentMethod
                console.log(id, 'EL ID')
                stripeService.createPayment({ id, amount: props.amount * 100 })
                    .then(e => props.stripeSubmit())
                    .catch(err => console.log(err))
            }
        }


        return (
            <form onSubmit={handleSubmit}>
                <CardElement className='form-control' />
                <button>Confirmar datos</button>
            </form>
        )
    }


    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}
