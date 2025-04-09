import React from 'react';
import ContactImg from '../assets/contact-img.png';



function Contact () {
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
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="4" cols="50"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>
    )
}


export default Contact;