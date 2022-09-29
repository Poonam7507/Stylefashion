
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
import Wishlist from './component/Wishlist';
import { GlobalProvider } from './Context/Globalstate';



function App() {
  return (
  <>
  <div className="App">
        {/* <Home/> */}
   {/* <GlobalProvider> */}
        <Routes>
      
        <Route  exact path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
  
  </Routes>
  {/* </GlobalProvider> */}
   </div>
   </>
   
  );
}

export default App;
