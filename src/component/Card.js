import gsap from 'gsap';
import React from 'react'
import { useState,useEffect,useRef ,useContext} from 'react';
import '../CSS/card.css';
import { useDispatch } from 'react-redux';
import {add} from './redux/cartSlice';
import { GlobalContext } from '../Context/Globalstate';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import kurti1 from '../assets/kurti1.jpg';
gsap.registerPlugin(ScrollTrigger);




export default function Card({id,image,product_name,price}) {

const dispatch = useDispatch()
const {addcloth}=useContext(GlobalContext);

    const buttons=useRef(null);
    // const [Cart,setCart]=useState([]);
    const [isActive,setActive]=useState("false");
    // const [isdisplay,setDisplay]=useState("true");
    // auth=isActive;
    // console.log(auth);
    function Like() {
        setActive(!isActive);
        // setDisplay(!isdisplay);
        

    }
 
   
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
        
            
    
        // console.log(isdisplay);
           
        
    // })
    
    return (

        <>
    
        <div className="cards" >
       
        <div className="card" ref={buttons} style={{width:"200px"}} >
           <img src={image} style={{height:"275px" ,width:"200px"}}/>
            <h3 >{product_name} <i className={isActive ? "fa fa-heart-o" : "fa fa-heart"} onClick={() =>{Like();addcloth(id,image,product_name,price);}} ></i></h3>
            <p>{price}</p>
                {/* {display=isdisplay} */}
           <button className="btn"  
            onClick={() =>  dispatch(add({ id,image,product_name,price  }))  }> 
             <h3>Add to Cart</h3></button>
        </div>
        
        </div>
        </>
    )
}
