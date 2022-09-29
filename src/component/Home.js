import React from 'react';
import Navbar from '../component/Navbar';
import Title from '../component/Title';
import Card from './Card';
import kurti1 from '../assets/kurti1.jpg';
import kurti2 from '../assets/kurti2.jpg';
import  kurti3 from '../assets/kurti3.jpg';
import  kurti4 from '../assets/kurti4.jpg';
import  kurti5 from '../assets/kurti5.jpg';
import  kurti6 from '../assets/kurti6.jpg';
import  kurti7 from '../assets/kurti7.jpg';
import  kurti8 from '../assets/kurti8.jpg';
import jeans1 from '../assets/jeans1.jpg';
import jeans2 from '../assets/jeans2.jpg';
import jeans3 from '../assets/jeans3.jpg';
import jeans4 from '../assets/jeans4.jpg';
import jeans5 from '../assets/jeans5.jpg';
import jeans6 from '../assets/jeans6.jpg';
import jeans7 from '../assets/jeans7.jpg';
import jeans8 from '../assets/jeans8.jpg';
import shirt1 from '../assets/shirt1.jpg'
import shirt2 from '../assets/shirt2.jpg'
import shirt3 from '../assets/shirt3.jpg'
import shirt4 from '../assets/shirt4.jpg'
import shirt5 from '../assets/shirt5.jpg'
import shirt6 from '../assets/shirt6.jpg'
import shirt7 from '../assets/shirt7.jpg'
import shirt8 from '../assets/shirt8.jpg'

import Footer from './Footer';






export default function Home() {
     // var kurti1=require('../assets/kurti1.jpg');\
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
     //    image=<img src={kurti1} style={{height:"278px"}}/>
     image={kurti1}

  />

  <Card
     id={2}
        product_name='Anarkali Kurti'
        price={2501}
        image={kurti2}
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
     //    image=<img src={kurti2} style={{height:"278px"}}/>
  />
   <Card

          id={3}
        product_name='Flared Kurti'
        price={2502}
        image={kurti3}
     //    image=<img src={kurti3} style={{height:"278px"}}/>
   />

   <Card
         id={4}
        product_name='Kurti'
        price={2503}
        image={kurti4}
     //    image=<img src={kurti4} style={{height:"277px"}}/>
   />

   <Card
         id={5}
        product_name='Kurti'
        price={2504}
        image={kurti5}
   />
   
   <Card
    id={6}
        product_name='Kurti'
        price={2505}
        image={kurti6}
   />

   <Card
      id={7}
        product_name='Kurti'
        price={2506}
        image={kurti7} 
     //    image=<img src={kurti7} style={{height:"277px"}}/>
   />
   <Card
      id={8}
        product_name='Kurti'
        price={2507}
        image={kurti8} 
     //    image=<img src={kurti8} style={{height:"278px"}}/>
   />
   </div>
  <h2> Jeans</h2>
   <div className='product'>

   <Card
            id={9}
        product_name="jeans"
        price={250}

        image= {jeans1}
     //    image= <img className="img" src={jeans1} style={{height:"273px"}}/>
   />
   <Card
        id={10}
        product_name='jeans'
        price={260}
        image={jeans2} 
     //    image=<img src={jeans2} style={{height:"270px"}}/>
   />
   <Card
       id={11}
        product_name='jeans'
        price={270}
        image={jeans3}
     //    image=<img src={jeans3} style={{height:"275px"}}/>
   />
   <Card
      id={12}
        product_name='jeans'
        price={280}
        image={jeans4}
     //    image=<img src={jeans4}style={{height:"274px"}}/>
   />
   <Card
       id={13}
        product_name='jeans'
        price={290}
        image={jeans5}
   />
   <Card
      id={14}
        product_name='jeans'
        price={300}
        image={jeans6} 
     //    image=<img src={jeans6} style={{height:"275px"}}/>
   />
   <Card
       id={15}
        product_name='jeans'
        price={310}
        image={jeans7}
   />
   <Card 
       id={16}
        product_name='jeans'
        price={320}
        image={jeans8}
     //    image=<img src={jeans8}style={{height:"276px"}}/>
   />
  </div>
  
  <h2><span>Shirts </span>that suits you</h2>
  <div className='product'>
   <Card
           id={17}
        product_name="shirt"
        price={500}
        image= {shirt1}
     //    image= <img src={shirt1}style={{height:"275px"}}/>
   />
   <Card
       id={18}
        product_name='shirt'
        price={510}
        image={shirt2}
     //    image=<img src={shirt2}style={{height:"273px"}}/>
   />
   <Card
      id={19}
        product_name='shirt'
        price={520}
        image={shirt3} 
     //    image=<img src={shirt3} style={{height:"272px"}}/>
   />
   <Card
       id={20}
        product_name='shirt'
        price={530}
        image={shirt4}
     //    image=<img src={shirt4}style={{height:"275px"}}/>
   />
   <Card
      id={21}
        product_name='shirt'
        price={540}
        image={shirt5}
     //    image=<img src={shirt5}style={{height:"276px"}}/>
   />
   <Card
      id={22}
        product_name='shirt'
        price={550}
        image={shirt6}
     //    image=<img src={shirt6}style={{height:"276px"}} />
   />
   <Card
      id={23}
        product_name='shirt'
        price={580}
        image={shirt7}
     //    image=<img src={shirt7}style={{height:"275px"}}/>
   />
   <Card
       id={24}
        product_name='shirt'
        price={600}
        image={shirt8}
     //    image=<img src={shirt8}style={{height:"275px"}}/>
   />
       
 
  

</div>

<Footer/>

        </div>
    )
}





