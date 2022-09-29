import React from 'react';
import Navbar from '../component/Navbar';
import '../CSS/about.css'
import Aboutimg from '../assets/aboutimg.jpg';
import Footer from './Footer';
import { useEffect,useState} from 'react';
import {gsap} from "gsap";
import TextPlugin from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin);




export default function About() {
    useEffect(() => {

     
    }, [])
    
  
    return (
        <>
        <div className="aboutpage">
        <Navbar/>
        
        <h1 className='intro'>Who we are</h1>
        <p className='intro1'>We hold ourselves and each other accountable for demonstrating the Leadership Principles through our actions every day. Our Leadership Principles describe how Amazon does business, how leaders lead, and how we keep the customer at the center of our decisions. Our unique StyleFashion culture, described by our Leadership Principles, helps us relentlessly pursue our mission of being Earth's most customer-centric company, best employer, and safest place to work.</p>
        <img className='intro2' src={Aboutimg}  />
        
            
        <h1 className='intro0'>What we do</h1>
           
            <p className='intro3'>
            We work every day to earn and keep customers' trust. We do this through convenient services and the thousands of small and medium businesses that add significantly to our product selection.
            </p>

        </div>
        <Footer/>
        </>
    )
}


