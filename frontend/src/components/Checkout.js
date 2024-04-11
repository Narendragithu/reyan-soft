import React from 'react'
// import { useDispatch } from  'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import placeOrder from '../redux/actions/orderActions'


function Checkout({ amount }) {
  let dispatch = useDispatch(()
  
  let onToken = (token) => {
    console.log(token)
dispatch(placeOrder(token, amount))

  }
  return (
    <div>
      <StripeCheckout
        token={onToken}
        name='Narendra card'
        amount={amount * 100}
        currency='INR'
        shippingAddress
        stripeKey='pk_test_51P168iSDtVN21WQwq1EX4xoPXorB9m7KkQa0mZUJPFOm0vBl56wNl4jybLlJEMjAI1NwxAgfoNJ2yI5Z1aqv2wHf009O9M80VE'
      >
        <button className='btn btn-dark'>Buy-Now</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout