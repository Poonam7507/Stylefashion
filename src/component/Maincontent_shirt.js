// import Home from './Home';
import Card from './Card';
import ReactDOM from 'react-dom';
import shirt1 from '../assets/shirt1.jpg'
import shirt2 from '../assets/shirt2.jpg'
import shirt3 from '../assets/shirt3.jpg'
import shirt4 from '../assets/shirt4.jpg'
import shirt5 from '../assets/shirt5.jpg'
import shirt6 from '../assets/shirt6.jpg'
import shirt7 from '../assets/shirt7.jpg'
import shirt8 from '../assets/shirt8.jpg'


const product=()=>{
const arr=[
    {
        id:1,
        product_name:"shirt",
        price:'$250',
        // link:"../assets/kurti1.jpg"
        image: <img src={shirt1}style={{height:"275px"}}/>


    },
    {
        id:2,
        product_name:'shirt',
        price:'$250',
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image:<img src={shirt2}style={{height:"273px"}}/>


    },
    {
        id:3,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt3} style={{height:"272px"}}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:4,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt4}style={{height:"275px"}}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:5,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt5}style={{height:"276px"}}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:6,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt6}style={{height:"276px"}} />
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:7,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt7}style={{height:"275px"}}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:8,
        product_name:'shirt',
        price:'$250',
        image:<img src={shirt8}style={{height:"275px"}}/>
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