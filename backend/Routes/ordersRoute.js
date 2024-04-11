

import express from 'express'
let router = express.Router();

import stripe from 'stripe'
import { v4 as uuidv4 } from  'uuid'



let Stripe = stripe(
  'sk_test_51P168iSDtVN21WQwm1SQCZxrcbeH1QtKbea7YSnLTuyLXQj9Rh55zeaV9AKlkde1xXNN1lDz5YPeUiYZVvQ02Ri700PwrZHExk'
);



router.post('/placeorder', async (req, res) => { 
  console.log(req.body)

  let {token, amount,currentUser,cartItems} = req.body;

  let customer = await Stripe.customers.create({
    email: token.email,
    source: token.id,
  })

  let payment = await Stripe.charges.create({
    amount: amount*100,
    currency: 'INR',
    customer: customer.id,
    receipt_email:token.email
    
  }, {
    idempotencyKey: uuidv4()

    
  })
  if (payment) {
    res.send('payment successfull')

  } else {
    res.send('payment failed')
  }
  

})
 export default router