import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Cartitem from './Cartitem';
import Total from './Total';
import '../CSS/Cart.css'


import { useSelector } from 'react-redux'

// import Maincontent_kurti from './Maincontent_kurti';


export default function Cart() {
  
const cart = useSelector((state) => state.cart)
    return (
        <>
        <Navbar/>

        

        <div className="cart">
        <div className="cart__left">
  {/* <div> */}
    <h3>Shopping Cart</h3>
    {cart?.map((props) => (
      <Cartitem
        key={props.id}
        id={props.id}
        image={props.image}
        product_name={props.product_name}
        price={props.price} 
        quantity={props.quantity}
      />
    ))}
  </div>
  <div className="cart__right">
        <Total/>
      </div>

    
</div>

        {/* </div> */}
        </>
    );
}
