import React from 'react';
import Navbar from '../component/Navbar';
import Aboutimg from '../assets/aboutimg.jpg';



export default function About() {
    return (
        <>
        <div className="aboutpage">
        <Navbar/>
        <h1>What We Do</h1>
        
        <img  src={Aboutimg}  />
        
            
           
            

        </div>
        </>
    )
}
