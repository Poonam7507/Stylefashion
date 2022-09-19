import React from 'react';
import Navbar from '../component/Navbar';
import Title from '../component/Title';
import Card from './Card';
import kurti1 from '../assets/kurti1.jpg';
import kurti2 from '../assets/kurti2.jpg';
import  kurti3 from '../assets/kurti3.jpg';
import  kurti4 from '../assets/kurti4.jpg';
import  kurti5 from '../assets/kurti5.jpg';
import Footer from './Footer';






export default function Home() {
    return (
        <div className="homepage">
        
  <Navbar/>
  <Title/>
 { <h1 className="headname"><span>Our</span> Best Sellers</h1> }
  <hr/>

  {<h2><span>Heart Melter</span> Kurtis</h2>}
  <div className='product'>
  <Card 
     id={1}
        product_name="Tail kurti"
        price={2500}
        // link:"../assets/kurti1.jpg"
        image= <img src={kurti1} />
  />

  <Card
     id={2}
        product_name='Anarkali Kurti'
        price={2501}
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image=<img src={kurti2} style={{height:"278px"}}/>
  />
   <Card

          id={3}
        product_name='Flared Kurti'
        price={2502}
        image=<img src={kurti3} style={{height:"278px"}}/>
   />

   <Card
         id={4}
        product_name='Kurti'
        price={2503}
        image=<img src={kurti4} style={{height:"277px"}}/>
   />

   {/* <Card
         id={5}
        product_name='Kurti'
        price='$2504'
        image=<img src={kurti5}/>
   /> */}
   
  {/* <Maincontent_kurti/> */}
  {<h2> Jeans</h2>}

  {/* <Maincontent_jeans/> */}
  
  {<h2><span>Shirts </span>that suits you</h2>}
  {/* <Maincontent_shirts/> */}

</div>

<Footer/>

        </div>
    )
}





