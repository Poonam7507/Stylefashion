// import logo from './logo.svg';
import './App.css';
import './CSS/Stylenav.css';
import './CSS/Stylehome.css';
import './CSS/Styletitle.css';
import './CSS/card.css';
import './assets/homescreen.jpg';
// import Maincontent_kurti from './component/Maincontent_kurti';


import Navbar from './component/Navbar';
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';
import Cart from './component/Cart';
import Title from './component/Title';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
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
        {/* <Home/> */}
   
        <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
  </Switch>
  </Router>
   </div>
   </>
   
  );
}

export default App;
