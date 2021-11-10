import React from 'react'

export default function Card({image,product_name,price}) {
    return (
        <>
        <div className="cards">
        <div className="card">
            {image}
            <h3>{product_name}</h3>
            <p>{price}</p>
            <h3>Add to Cart</h3>
        </div>
      
        </div>
        </>
    )
}
