import React from 'react';
import homescreen from '../assets/homescreen.jpg';
import template1 from '../assets/template1.jpg'
import template2 from '../assets/template2.jpg'


export default function Title() {
    return (
        <>
        <div className="title_content">
            <div className="imagebox">
            {/* <img src={homescreen}/> */}
            <marquee width="60%" scolldirection="left" behavior="alternate" scrollamount="15" >
            <img  className="img1" src={homescreen} />
            <img className="img2" src={template1} />
            <img className="img3" src={template2} />
            </marquee>
                {/* <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="60%" height="100%"/>; */}

            </div>
        <div className="imagebox">
            <h1>Sale is Live</h1>
            <p>Style Yourself On Your Own Way</p>
            <p>Get Flat 30% off for new arrivals</p>
            </div>
        </div>
        </>
    );
}
