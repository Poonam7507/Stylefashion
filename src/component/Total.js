import '../CSS/total.css'

import {useSelector} from 'react-redux'

function Total() {
 
  // src/components/Total.js
const cart = useSelector((state) => state.cart)

const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(props => {
    totalQuantity += props.quantity
    totalPrice += props.price * props.quantity
  })
  return {totalPrice, totalQuantity}
}
  return (

    
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
      
<p className="total__p">
  total ({getTotal().totalQuantity} items) 
  : <strong>${getTotal().totalPrice}</strong>
</p>
      </div>
    </div>
  )
}

export default Total