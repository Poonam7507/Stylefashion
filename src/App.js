
import './App.css';
import './CSS/Stylenav.css';
import './CSS/Stylehome.css';
import './CSS/Styletitle.css';
import './CSS/card.css';
import './assets/homescreen.jpg';
import './CSS/about.css';
import './CSS/contact.css';
// import Maincontent_kurti from './component/Maincontent_kurti';


// import Navbar from './component/Navbar';
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';
import Cart from './component/Cart';
// import Title from './component/Title';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
  <>
  <div className="App">
        {/* <Home/> */}
   
        <Routes>
      
        <Route  exact path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
  
  </Routes>
   </div>
   </>
   
  );
}

export default App;
