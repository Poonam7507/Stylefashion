import React from 'react';
import { useState } from 'react';
import product from './Maincontent_kurti';


// const Cartcontent=()=>{
//   const [cart,setCart]=useState(product);
//   console.log(cart);
//   const arr=[
//     {
//         id:1,
//         product_name:"jeans",
//         price:'$250',

//         // link:"../assets/kurti1.jpg"
//         // image: <img className="img" src={jeans1} style={{height:"273px"}}/>


//     },
//     {
//         id:2,
//         product_name:'jeans',
//         price:'$250',
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
//         // image:<img src={jeans2} style={{height:"270px"}}/>


//     },
//     {
//         id:3,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans3} style={{height:"275px"}}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     },
//     {
//         id:4,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans4}style={{height:"274px"}}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     },
//     {
//         id:5,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans5}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     },
//     {
//         id:6,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans6} style={{height:"275px"}}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     },{
//         id:7,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans7}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     },{
//         id:8,
//         product_name:'jeans',
//         price:'$250',
//         // image:<img src={jeans8}style={{height:"276px"}}/>
//         // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


//     }
// ]
//         const addToCart=(el)=> {
//             setCart=([...cart,el]);
//         };
//         const listitems=arr.map((el)=>{
//              <div key={el.id}>
//              {`${el.price} ${el.product_name}` }
//              <input type="submit" value="Add" onClick={()=>addToCart(el)}/>
//              </div>
//         });
//         return <div>{listitems}</div>
// };
//  export default Cartcontent;


export default function Cartcontent() {
    return (
        <>
        <div>
       <h1>jeans</h1>
       <h1>$290</h1>
        </div>
        </>
    )
}
