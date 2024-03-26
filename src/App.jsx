import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Layout from './components/layout';
import './App.css';
import "../src/App.css";
// import { HashLink } from 'react-router-hash-link';

function App() {
  

  return (
  <div> 
    {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}
    <Router>
    <Routes>
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<Home />}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact  phone ="(123)456-7890" />} />
      <Route path='/projects' element = {<Projects/>}/>
      </Route>
    </Routes>
      </Router>
  </div>
  )
  
  
}


export default App
