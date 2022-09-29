 import React from 'react';
//  import { BrowserRouter as Router,Route } from 'react-router-dom';
//  import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GlobalProvider } from '../Context/Globalstate';
 import gsap from 'gsap';
 import { useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';



 



export default function Navbar() {
  const navigate=useNavigate();
  const nav0=useRef(null);
  const nav1=useRef(null);
  const nav2=useRef(null);
  const nav3=useRef(null);
  const nav4=useRef(null);
  const nav5=useRef(null);
  useEffect(() => {
    const nav0a=nav0.current;
    const nav1a=nav1.current
    const nav2a=nav2.current
    const nav3a=nav3.current
    const nav4a=nav4.current
    const nav5a=nav5.current
    gsap.timeline()

    .from(nav0a,{
      opacity:0,
      y:"-20"
    })
    .from([nav1a,nav2a,nav3a,nav4a,nav5a],{
      opacity:0,
      stagger:{
        amount:1
      },
      y:"20"
    })
  
   
  }, [])


  const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
 

  cart.forEach(props => {
    total += props.quantity
  })
  return total
}
    return (
        <>
        {/* <GlobalProvider> */}
        <div className="nav"> 
            <ul>
                <li>
                    <h2 ref={nav0}><span>Style</span>Fashion</h2>
                    </li>
                    <li>
                    


               <h3 onClick={()=>navigate('/')} ref={nav1} >
           Home 
           </h3>
              </li>
                <li>
               <h3 onClick={()=>navigate('/about')} ref={nav2}> 
               About
               </h3>
              </li>
                    <li>

               <h3  onClick={()=>navigate('/contact')} ref={nav3}> 
          Contact
          </h3>
              </li>
              <li>

<h3  onClick={()=>navigate('/wishlist')} ref={nav4}> 
Wishlist
</h3>
</li>
                <li>
               <h2 className='cartbox' onClick={()=>navigate('/cart')} ref={nav5}>  <i className="fa fa-shopping-cart">

               <p className='count'>{getTotalQuantity() || 0}</p>
               </i> 
               </h2>
              </li>

              
            </ul> 

          </div>
          {/* </GlobalProvider> */}
          </>
    );
} 
