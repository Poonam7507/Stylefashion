// import logo from './logo.svg';
import './App.css';
import './CSS/Stylenav.css';
import './CSS/Stylehome.css';
import './CSS/Styletitle.css';
import './CSS/card.css';
import './assets/homescreen.jpg';
// import Maincontent_kurti from './component/Maincontent_kurti';


import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import Title from './component/Title';
// import { BrowserRouter as Route  } from 'react-router-dom';
// import Cart from './pages/Cart';
// import Routing from './component/Routing';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
  <>
  <div className="App">
        <Home/>
        {/* <Navbar/>
  <Title/>

  {<h1>Our Best Sellers</h1>}
  
  {<h2><span>Heart Melter</span> Kurtis</h2>}

  <Maincontent_kurti/> */}
        {/* <Navbar/> */}
      {/* <Routes>
        <Route path="/" components={Home} />
        <Route path="/about" components={About} />
  <Routes/> */}
   </div>
   </>
   
  );
}

export default App;
