import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';
import "../src/App.css";

function App() {
const Navbar = () => {
  return (
  <nav className="navbar">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
  )
}
  return (
  <div>
    <Router>
    <Navbar />
    <hr />
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact  phone ="(904)894-4992" />} />
    </Routes>
      </Router>
  </div>
  )
  
  
}


export default App
