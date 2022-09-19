// src/components/CartItem.js
import '../CSS/cartitem.css'
import { incQuantity, decQuantity, removeItem} from './redux/cartSlice'
import { useDispatch } from 'react-redux'

function Cartitem({id,image,product_name,price,quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      {/* <img className="cartItem__image" src={image} alt='item'/> */}
      {/* {image } */}
        {/* {image} */}
      <div>
      </div>
      <div className="cartItem__info">
        <p className="cartItem__title">{product_name}</p>
        <p className="cartItem__price">
        {image}
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default Cartitem