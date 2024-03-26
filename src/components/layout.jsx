import React from "react";
import { Outlet, NavLink} from "react-router-dom"; 
const Navbar = () => {
    return (
    <nav className="navbar">
  
  <div className="navbar bg-base-100">
    <div className="flex-none">
    <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
  </ul>
</div>
      
    </div>
    <div class="flex flex-col ...">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{"Mercedes' Portfolio"}</a>
    </div>
    </div>
  </div>
  
   
  </nav>
    )
  }
 const Layout = () => { 
     return (
        <>      
           <Navbar/>
      <Outlet/>
  
    </>
 );
 };
export default Layout