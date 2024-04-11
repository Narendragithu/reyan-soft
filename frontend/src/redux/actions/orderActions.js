
import axios from 'axios';

let placeOrder = (token,  amount) => {
  return (dispatch, getState) => {
    let currentUser = getState().loginUserReducer.username
    let cartItems = getState().cartReducer.cartItems;
    
    dispatch({ type: 'PLACE-ORDER-REQUEST' })
    axios.post('http://localhost:5040/placeorder', {token,amount,currentUser,cartItems})
      .then(() => {
        dispatch({type:'PLACE-ORDER-SUCCESS'});
      
      })
      .catch(() => {
        dispatch({ type: 'PLACE-ORDER-FAILURE' });
      
    })
    
  }
}

export  default placeOrder
  
