import React from 'react'
import { useState } from 'react';
import '../CSS/card.css';
import About from './About';

export default function Card({image,product_name,price}) {
    const [isActive,setActive]=useState("false");
    const Like =()=>{
        setActive(!isActive);
         
    };
    
    return (

        <>
        <div className="cards">
        <div className="card">
            {image }
            <h3 >{product_name} <i className={isActive ? "fa fa-heart-o" : "fa fa-heart"} onClick={Like} ></i></h3>
            <p>{price}</p>

           <button className="btn" onclick="Cartbox">  <h3>Add to Cart</h3></button>
        </div>
      
        </div>
        </>
    )
}

