import React from "react";
import { Link } from 'react-router-dom'

const Contact = (props) => {

    const phone = props.phone;
    return (
       
        <div>
<div class="flex justify-center ...">
         <div class="flex flex-col ...">
         <p class="font-bold ...">
         <h1 class="text-sky-400" >Contact me</h1></p>
         </div>
         </div>

             <div class="flex justify-center ...">
             <div class="flex flex-col ...">
             <p class="font-bold ...">
        
        </p>
        <p class="font-serif ...">
        <p>You can get in touch with me for any queries or feedback below.</p>
        {/* <p>Here is my business phone number: {phone}</p>
       <p>You can contact me at mercedeslainfierno@gmail.com</p> */}
       <p>Click here for my LinkedIn: 
        <Link to = "https://www.linkedin.com/in/mercedes-la-infierno-125191291/"><p class="underline underline-offset-8 ...">LinkedIn Profile</p></Link></p>
        <p>Click here for my GitHub: 
        <Link to = "https://github.com/Choliyy"><p class="underline underline-offset-8 ...">GitHub Profile</p></Link></p>
            </p>
            </div> 
        </div>
        </div>
    );
   
    
};
export default Contact