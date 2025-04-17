import React, { useRef } from 'react';
import ContactImg from '../assets/contact-img.png';
import emailjs from "@emailjs/browser";



function Contact () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_sbar5s7',     
          'template_o30rty9',    
          form.current,
          'iBEISXMC9xdG9p1NZ'     
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message.");
          }
        );
    };

    return (
        <section className='contact-us'>
            <div className="contact-info">
                <div className="get-in-touch">
                    <h2>Get in Touch</h2>
                    <h3>Love to Hear From You, <br />Get In Touch</h3>
                    <p>We are delighted to meet you and to help provide solutions for any of the needs you may have.</p>
                </div>

                <div className="contact-img">
                    <img src={ContactImg} />
                </div>
            </div>
            

            <div className="contact-form">
                <h2>Contact Us Now to Get Information from Our Experts!</h2>
                <form  ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name= "message" placeholder="Your Message" rows="4" cols="50"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>
    )
}


export default Contact;