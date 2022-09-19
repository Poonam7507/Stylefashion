import React from "react";
import Navbar from '../component/Navbar';
import Footer from './Footer';
import { useState } from "react";



export default function Contact() {
    const [data, setData] = useState({
        name:" ",
        phpne:" ",
        message:" ",

    });
    return (
        <>
        <div>
        <Navbar/>
        <section id="contactme"  >
    <div class="contactpage">
       
        <div class="page" id="form" >
            <form action="">
               
            <div >
                <input type ="text"  id="nam" name="name" placeholder="Enter Name" required/>
            </div>
            <div id="column2">
                <input type ="text"  id="nam" name="phone" placeholder="Enter Mobile no." required/>
            </div>
         
           
            <div id="column4">

                <textarea  id="nam" cols="30" rows="10" name="message" placeholder="Enter Message" required/>
            </div>
              
      <div>
          <button class="btn " id="na" type="submit" >Send Message <i class="fa fa-telegram tele"></i></button>
        </div>
       
            </form>
           
        </div>
        
       </div>
       </section>
       </div>
       
    <Footer/>
        </>
    );
}
