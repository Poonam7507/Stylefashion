import React from 'react';

import homescreen from '../assets/homescreen.jpg';
import template1 from '../assets/template1.jpg'
import template2 from '../assets/template2.jpg'
import frontimage1 from'../assets/frontimage1.jpg';




export default function Title() {
   
// gsap.fromTo(".slider .img1",{
    
//     opacity:0
//  },
//  {
//      duration:1,
//      y:50,
//      opacity:1,
//     delay:12,
//       yoyo:true,
//      repeat:-1,
//      repeatDelay:20
     
 
//  })
// gsap.fromTo(".slider .img2 ",{
    
//     opacity:0
//  },
//  {
//      delay:5,
//      duration:1,
//      y:70,
//      opacity:1,
//      yoyo:true,
//      repeat:-1,
//      repeatDelay:30

 
//  })
// gsap.fromTo(".slider .img3",{
    
//     opacity:0,
//     // repeat:-1
//  },
//  {
//      delay:10,  
//      duration:2,
//      y:90,
//      opacity:1,
//      repeat:-1,
//      repeatDelay:40,

//      yoyo:true,
     
 
//  })
    return (
        <>
        <div className="title_content">
            <div className="imagebox slider">
            {/* <img /> */}
            <marquee width="60%" scolldirection="left" behavior="alternate" scrollamount="15" >
            <img  className="img1" src={homescreen} />
            <img className="img2" src={template1} />
            <img className="img3" src={template2} />
            </marquee>
                {/* <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="60%" height="100%"/>; */}

            </div>
        <div className="imagebox">
        <img  className="image1" src={frontimage1} />
        <div className="imagebox_content">
            <h1><span>S</span>ale is Live</h1>
            <p ><i>Style Yourself On Your Own Way</i></p>
            <p ><i>Get Flat 30% off for new arrivals</i></p>
            </div>
            </div>
        </div>
        </>
    );
}
