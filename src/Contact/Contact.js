import React from 'react';
import './Contact.scss';
import DJContact from '../img/dj_contact.png';
import Email from '../img/email.png';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="section-dark">
                <div className="left">
                    <p>If you're looking for a DJ for your event, look no further, DJ Banging Mick will offer you a professional, reputable and affordable service tailored to your needs to best suit your purpose.</p>
                    <p>Please feel free to make a none obligatory enquiry by filling out this form and sending me your message and I will get back to you as soon as possible.</p>
                    <p>I hope you have enjoyed viewing what I have to offer and hope to hear from you soon.</p>
                    <p>All the very best!</p>
                    <img src={ DJContact } alt="dj contact"></img>
                </div>
                <div className="right">
                    <form action="" method="get">
                        <label>Your Name</label>
                        <input type="text" name="name" id="name" required placeholder="what's your name?" />
                        <label>Your Email</label>
                        <input type="email" name="email" id="email" required placeholder="what's your email address?" />
                        <label>Your Event</label>
                        <textarea name="event" id="event" required placeholder="please let me know of any key details relating to your enquiry, for example: are you looking to hire a DJ for a: venue / party / function / festival etc... location, dates etc... " />
                        <button type="submit"><img id="email" src={ Email } alt="email"/><span>Send Message</span></button>
                        <p>Alternatively, feel free to contact me by phone on:</p>
                        <a className="red" href="tel:+34609765797">+34 609 76 57 97</a>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;