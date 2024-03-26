import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
// import Layout from './components/layout';
import './App.css';
import "../src/App.css";
// import { HashLink } from 'react-router-hash-link';

function App() {
  const Navbar = () => {
    return (
    <nav className="navbar">
  
  <div className="navbar bg-base-100">
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{"Mercedes' Portfolio"}</a>
    </div>
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button>
    </div>
  </div>
  
    <ul>
      <li>
        <Link to="/"><button class="btn rounded-full">Home</button></Link>
      </li>
      <li>
        <Link to="/about"><button class="btn rounded-full">About</button></Link>
      </li>
      <li>
        <Link to="/contact"><button class="btn rounded-full">Contact</button></Link>
      </li>
      <li>
        <Link to="/projects"><button class="btn rounded-full">Projects</button></Link>
      </li>
    </ul>
  </nav>
    )
  }

  return (
  <div> 
    {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}
    <Router>
    <Navbar />
    <hr />
    <Routes>
    {/* <Route path='/' element = {<Layout/>}/> */}
      <Route path='/' element = {<Home />}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact  phone ="(904)894-4992" />} />
      <Route path='/projects' element = {<Projects/>}/>
    </Routes>
      </Router>
  </div>
  )
  
  
}


export default App
