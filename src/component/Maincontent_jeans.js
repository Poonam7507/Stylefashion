// import Home from './Home';
import Card from './Card';

import ReactDOM from 'react-dom';
import jeans1 from '../assets/jeans1.jpg';
import jeans2 from '../assets/jeans2.jpg';
import jeans3 from '../assets/jeans3.jpg';
import jeans4 from '../assets/jeans4.jpg';
import jeans5 from '../assets/jeans5.jpg';
import jeans6 from '../assets/jeans6.jpg';
import jeans7 from '../assets/jeans7.jpg';
import jeans8 from '../assets/jeans8.jpg';



const product=()=>{
const arr=[
    {
        id:1,
        product_name:"kurti",
        price:'$250',

        // link:"../assets/kurti1.jpg"
        image: <img className="img" src={jeans1}/>


    },
    {
        id:2,
        product_name:'kurti',
        price:'$250',
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image:<img src={jeans2}/>


    },
    {
        id:3,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans3}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:4,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans4}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:5,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans5}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:6,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans6}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:7,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans7}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:8,
        product_name:'Kurti',
        price:'$250',
        image:<img src={jeans8}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    }
]
return(
    <div className="product" >{
        arr.map((arr,id)=>{
            return <Card key={id} image={arr.image} product_name={arr.product_name} price={arr.price} />
        
        })
    }
    </div>
    )
    }

    

export default product;