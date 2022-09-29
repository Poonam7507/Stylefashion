// import { incQuantity, decQuantity, removeItem} from './redux/cartSlice'
// import { useDispatch } from 'react-redux';
// import {  removeItem1} from './redux/cartSlice'



export default function Wishlistitem({id,image,product_name,price,display}) {
//   const dispatch = useDispatch()
  return (
   
    <div className="cards" >
    <div className="card" >
        {image }
        <h3 >{product_name} </h3>
        <p>{price}</p>

       {/* <button className="btn"  
        onClick={() =>  dispatch(add({ id,image,product_name,price  }))  }> 
         <h3>Add to Cart</h3></button> */}
    </div>
  
    </div>
  )
}
