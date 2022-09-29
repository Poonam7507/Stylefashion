import React from 'react';

import homescreen from '../assets/homescreen.jpg';
import template1 from '../assets/template1.jpg'
import template2 from '../assets/template2.jpg'
import dress1 from '../assets/dress1.jpg';
import shirt1 from '../assets/shirt1.jpg'
import  dress2 from '../assets/dress2.jpg';
import  dress3 from '../assets/dress3.jpg';
import  dress4 from '../assets/dress4.jpg';
import frontimage1 from'../assets/frontimage1.jpg';




export default function Title() {
   

    return (
        <>
        <div className="title_content">
            <div className="imagebox slider">
            {/* <img /> */}
            <marquee  scolldirection="left" behavior="alternate" scrollamount="15" >
            <img  className="img1" src={homescreen} />
            <img className="img2" src={template1} />
            <img className="img3" src={template2} />
            <img className="img3" src={dress1} />
            <img className="img3" src={dress2} />
            <img className="img3" src={dress3} />
            <img className="img3" src={dress4} />
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
