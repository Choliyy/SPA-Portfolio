import React from "react";
import { Link } from 'react-router-dom'

const Projects = () => { 

   
    return (
    <>
    <div> 
    <div class="flex justify-center ...">
         <div class="flex flex-col ...">
         <p class="font-bold ...">
         <h1 class="text-sky-400" >Projects</h1></p>
         </div>
         </div>
    <div class="flex justify-center ..."> 
    <div class="flex flex-col ...">
    <p class="font-bold ...">
      
        
        </p>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     
      Knights of JavaScript
      <div className="badge badge-secondary">TKH</div>
    </h2>
    <p>Click here for project link : 
        <Link to = "https://github.com/Choliyy/KnightsofJava"> <p class="underline underline-offset-8 ...">Knights of JavaScript GitHub</p></Link></p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">JavaScript</div> 
      <div className="badge badge-outline">HTML</div>
    </div>
  </div>
</div>
</div>
</div>




    </div>
   </>



);
};



export default Projects