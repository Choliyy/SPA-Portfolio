import React from "react";
import { Link } from 'react-router-dom'

const Contact = (props) => {

    const phone = props.phone;
    return (
       
        <div>
        <h2>Contact Us</h2>
        <p>Get in touch with us for any queries or feedback.</p>
        <p>Here is my business phone number: {phone}</p>
       <p>You can contact me at mercedeslainfierno@gmail.com</p>
       <p>Click here for my LinkedIn: 
        <Link to = "https://www.linkedin.com/in/mercedes-la-infierno-125191291/">LinkedIn Profile</Link></p>
        <p>Click here for my GitHub: 
        <Link to = "https://github.com/Choliyy">GitHub Profile</Link></p>
    </div> 

    );
   
    
};
export default Contact