import gsap from 'gsap';
import React from 'react'
import { useState,useEffect,useRef } from 'react';
import '../CSS/card.css';
import { useDispatch } from 'react-redux';
import {add} from './redux/cartSlice';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export default function Card({id,image,product_name,price}) {

const dispatch = useDispatch()

    const buttons=useRef(null);
    // const [Cart,setCart]=useState([]);
    const [isActive,setActive]=useState("false");
    const Like =()=>{
        setActive(!isActive);
         
    };
    
   
  useEffect(() => {
    const e1=buttons.current;
    gsap.from(e1,{scale:0,
        scrollTrigger:{
            trigger:e1,
            // start:top
            toggleActions:"play none restart complete",
            scrub:true,
            // pin:true,
            

        }
      
    })
  
   
  }, [])
  
    // gsap.to(".card",{
    //     ScrollTrigger:(".card",{
    //         startAt:"top 90%",
            
    //     })
        
            
    
        
           
        
    // })
    
    return (

        <>
        <div className="cards">
        <div className="card" ref={buttons}>
            {image }
            <h3 >{product_name} <i className={isActive ? "fa fa-heart-o" : "fa fa-heart"} onClick={Like} ></i></h3>
            <p>{price}</p>

           <button className="btn"  
            onClick={() =>  dispatch(add({ id,image,product_name,price  }))  }> 
             <h3>Add to Cart</h3></button>
        </div>
      
        </div>
        </>
    )
}

