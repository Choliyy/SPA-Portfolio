import React from "react";
import { Link } from 'react-router-dom'

const Projects = () => { 

   
    return (
    <>
    <div> <h1> Projects</h1>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     
      Knights of JavaScript
      <div className="badge badge-secondary">TKH</div>
    </h2>
    <p>Click here for project link : 
        <Link to = "https://github.com/Choliyy/KnightsofJava"> Knights of JavaScript GitHub</Link></p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">JavaScript</div> 
      <div className="badge badge-outline">HTML</div>
    </div>
  </div>
</div>





    </div>
   </>



);
};



export default Projects