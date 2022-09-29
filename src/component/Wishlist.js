import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Card  from './Card';
import Wishlistitem from './Wishlistitem'
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
import { Like } from './Card';
import Footer from './Footer';






export default function Wishlist() {
     
    return (
        <div className="homepage">
        
  <Navbar/>
  {/* <Title/> */}
  {/* <h1 className="headname"><span>Our</span> Best Sellers</h1>  */}
  {/* <hr/> */}

  {/* {<h2><span>Heart Melter</span> Kurtis</h2>} */}
  <div className='product'>
  
  <Card 
     id={1}
        product_name="Tail kurti"
        price={2500}
        display="false"
     
        // link:"../assets/kurti1.jpg"
        image= <img src={kurti1} />
        
  />

  <Card
     id={2}
        product_name='Anarkali Kurti'
        price={2501}
        display="false"
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image=<img src={kurti2} style={{height:"278px"}}/>
  />
   <Card

          id={3}
        product_name='Flared Kurti'
        price={2502}
        display="false"
        image=<img src={kurti3} style={{height:"278px"}}/>
   />

   <Card
         id={4}
        product_name='Kurti'
        price={2503}
        display="false"
        image=<img src={kurti4} style={{height:"277px"}}/>
   />
 
   <Wishlistitem
         id={5}
        product_name='Kurti'
        price={2504}
        image=<img src={kurti5}/>
   />
   
   <Wishlistitem
    id={6}
        product_name='Kurti'
        price={2505}
        display="false"
        image=<img src={kurti6}/>
   />

   <Wishlistitem
      id={7}
        product_name='Kurti'
        price={2506}
        display="false"
        image=<img src={kurti7} style={{height:"277px"}}/>
   />
   <Wishlistitem
      id={8}
        product_name='Kurti'
        price={2507}
        display="false"
        image=<img src={kurti8} style={{height:"278px"}}/>
   />
   </div>
   {/* <h2> Jeans</h2>  */}
   <div className='product'>

   <Wishlistitem
            id={9}
        product_name="jeans"
        display="false"
        price={250}

        // link:"../assets/kurti1.jpg"
        image= <img className="img" src={jeans1} style={{height:"273px"}}/>
   /> 
    <Wishlistitem
        id={10}
        product_name='jeans'
        price={260}
        display="false"
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image=<img src={jeans2} style={{height:"270px"}}/>
   />
   <Wishlistitem
       id={11}
        product_name='jeans'
        price={270}
        display="false"
        image=<img src={jeans3} style={{height:"275px"}}/>
   />
   <Wishlistitem
      id={12}
        product_name='jeans'
        price={280}
        display="false"
        image=<img src={jeans4}style={{height:"274px"}}/>
   />
   <Wishlistitem
       id={13}
        product_name='jeans'
        price={290}
        display="false"
        image=<img src={jeans5}/>
   />
   <Wishlistitem
      id={14}
        product_name='jeans'
        price={300}
        display="false"
        image=<img src={jeans6} style={{height:"275px"}}/>
   />
   <Wishlistitem
       id={15}
        product_name='jeans'
        price={310}
        display="false"
        image=<img src={jeans7}/>
   />
   <Wishlistitem
       id={16}
        product_name='jeans'
        price={320}
        display="false"
        image=<img src={jeans8}style={{height:"276px"}}/>
   />
  </div>
  
  {/* <h2><span>Shirts </span>that suits you</h2> */}
  <div className='product'>
   <Wishlistitem
           id={17}
        product_name="shirt"
        price={500}
        display="false"
        // link:"../assets/kurti1.jpg"
        image= <img src={shirt1}style={{height:"275px"}}/>
   />
   <Wishlistitem
       id={18}
        product_name='shirt'
        price={510}
        display="false"
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image=<img src={shirt2}style={{height:"273px"}}/>
   />
   <Wishlistitem
      id={19}
        product_name='shirt'
        price={520}
        display="false"
        image=<img src={shirt3} style={{height:"272px"}}/>
   />
   <Wishlistitem
       id={20}
        product_name='shirt'
        price={530}
        display="false"
        image=<img src={shirt4}style={{height:"275px"}}/>
   />
   <Wishlistitem
      id={21}
        product_name='shirt'
        price={540}
        display="false"
        image=<img src={shirt5}style={{height:"276px"}}/>
   />
   <Wishlistitem
      id={22}
        product_name='shirt'
        price={550}
        display="false"
        image=<img src={shirt6}style={{height:"276px"}} />
   />
   <Wishlistitem
      id={23}
        product_name='shirt'
        price={580}
        display="false"
        image=<img src={shirt7}style={{height:"275px"}}/>
   />
   <Wishlistitem
       id={24}
        product_name='shirt'
        price={600}
        display="false"
        image=<img src={shirt8}style={{height:"275px"}}/>
   /> 
      
 
  

</div>

<Footer/>

        </div>
    )
}








// import React from 'react';
// import Navbar from './Navbar';
// import Wishlistitem from './Wishlistitem';
// import { useSelector } from 'react-redux';

// // import Maincontent_kurti from './Maincontent_kurti';

// export default function Wishlist() {

   
//     return (
//         <>
//             <Navbar />



//             <div className="cart">
//                 <div className="cart__left">
//                     {/* <div> */}
//                     <h3>Shopping Cart</h3>
//                     {wishlist?.map((props) => (
//                         <Wishlistitem
//                             key={props.id}
//                             id={props.id}
//                             image={props.image}
//                             product_name={props.product_name}
//                             price={props.price} />
//                     ))}
//                 </div>



//             </div>

//             {/* </div> */}
//         </>
//     );
// }
