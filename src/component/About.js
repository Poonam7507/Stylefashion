import React from 'react';
import Navbar from '../component/Navbar';
import '../CSS/about.css'
import Aboutimg from '../assets/aboutimg.jpg';
import Footer from './Footer';
import { useEffect,useState} from 'react';
import {gsap} from "gsap";
import TextPlugin from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin);

// const [textvalue, setTextvalue] = useState(" ");


export default function About() {
    useEffect(() => {
//         gsap.timeline()

//             .to(".intro",{
//                 text:{value:"Who We Are",delimiter:" "},
//                 duration:1,
//                 repeat:Infinity,
//                 repeatDelay:2
                
//             })
           
//         .to(".intro0",{
//             text:{value:" What We Do"},
//             duration:1,
//             repeat:Infinity,
//             repeatDelay:2
            
           
//         })
//         .from([".intro",".intro0",".intro1",".intro2",".intro3"],{
//             opacity:0,
//             skew:30,
//             stagger:{
//                 amount:0.4
//             },
//             y:"-10"
            
//         },"-=1")
       

        
//         // gsap.fromTo(".intro ",{
    
//         //     opacity:0
//         //  },{
           
//         //     y:-10,
//         //       ease:'Power2.easeInOut', 
//         //          opacity:1
//         //  })
//         // gsap.fromTo(".intro1 ",{
    
//         //     opacity:0
//         //  },{
//         //       y:'-60px',
//         //       ease:'elastic(1,0.5)',
//         //          opacity:1
//         //  })
//         // gsap.timeline({ defaults:{ ease:'Power2.easeInOut',duration:"1"}})
//         // .to('.intro2',{
//         //     y:-10,
//         //     ease:"elastic(1,0.5}"
                 
                  
//         // })
//         // .to('.intro',{
            
//         //     y:'-60px',
//         //     stagger:{
//         //         amount:1,
//         //         from:"start"
                
//         //     }
                  
//         // })
     
    }, [])
    
  
    return (
        <>
        <div className="aboutpage">
        <Navbar/>
        
        <h1 className='intro'>erA eW ohW</h1>
        <p className='intro1'>We hold ourselves and each other accountable for demonstrating the Leadership Principles through our actions every day. Our Leadership Principles describe how Amazon does business, how leaders lead, and how we keep the customer at the center of our decisions. Our unique StyleFashion culture, described by our Leadership Principles, helps us relentlessly pursue our mission of being Earth's most customer-centric company, best employer, and safest place to work.</p>
        <img className='intro2' src={Aboutimg}  />
        
            
        <h1 className='intro0'>oD eW thaW</h1>
           
            <p className='intro3'>
            We work every day to earn and keep customers' trust. We do this through convenient services and the thousands of small and medium businesses that add significantly to our product selection.
            </p>

        </div>
        <Footer/>
        </>
    )
}


