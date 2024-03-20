import React from "react";

const Contact = (props) => {

    const phone = props.phone;
    return (
       
        <div>
        <h2>Contact Us</h2>
        <p>Get in touch with us for any queries or feedback.</p>
        <p>Here is my business phone number: {phone}</p>
    {/* You can contact me at mercedeslainfierno@gmail.com */}
    </div> 

    );
   
    
};
export default Contact