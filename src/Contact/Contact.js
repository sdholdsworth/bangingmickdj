import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import './Contact.scss';
import DJContact from '../img/dj_contact.png';
import Email from '../img/email.png';

const Contact = () => {
    const [formData, setFormData] = useState({});
  
    //update state
    const updateInput = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    //handle form submission
    const handleSubmit = event => {
      event.preventDefault();
      sendEmail();
      setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    }

    //send email
    const sendEmail = () => {
      //post form entry data
      Axios.post(
        'https://us-central1-dj-banging-mick.cloudfunctions.net/submit',
        formData
      )
        .then(res => {
          db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            number: formData.number,
            message: formData.message,
            time: new Date()
          })
        })
        //alert user message send was successful
        .then(() => { alert(`\nThank you, your message has been submitted. \n\nDJ Banging Mick will be in contact with you shortly! 👍`);})
        //alert user if an error occurs
        .catch((error) => { alert(`Oops, something went wrong 😔 \n\nThe following error occurred: \n\n${error.message} \n\nPlease try again later or alternatively feel free to contact me by phone on: +34 667 84 17 67 \n\nWe apologize for any inconvenience this may cause.`);})
    }
  
    return (
      <div>
        <section id="contact" className="section-dark">
            <div id="contact-msg">
                <p>If you're looking for a DJ for your event, look no further, DJ Banging Mick will offer you a professional, reputable and affordable service tailored to your needs to best suit your purpose.</p>
                <p>Please feel free to make a none obligatory enquiry by filling out this form and sending me your message and I will get back to you as soon as possible.</p>
                <p>I hope you have enjoyed viewing what I have to offer and hope to hear from you soon!</p>
                <h3>DJ Banging Mick</h3>
            </div>
            <div id="contact-form">
                <form onSubmit={handleSubmit}>
                    <label>Your Name&nbsp; 
                        <span 
                            role="img" 
                            aria-label="alphanumeric characters icon" 
                            style={{fontSize: 1.5 + 'rem'}}>🔤
                        </span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="what's your name?"
                        onChange={updateInput}
                        value={formData.name || ''}
                        required
                    />
                    <label>Your Email&nbsp;
                        <span 
                            role="img" 
                            aria-label="email icon" 
                            style={{fontSize: 1.75 + 'rem'}}>📧
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="what's your email address?"
                        onChange={updateInput}
                        value={formData.email || ''}
                        required
                    />
                    <label>Your Number&nbsp;
                        <span 
                            role="img" 
                            aria-label="phone icon" 
                            style={{fontSize: 1.6 + 'rem'}}>📞
                        </span>
                    </label>
                    <input
                        type="tel"
                        name="number"
                        placeholder="what's your contact number?"
                        onChange={updateInput}
                        value={formData.number || ''}
                    />
                    <label>Your Message&nbsp;
                        <span 
                            role="img" 
                            aria-label="message icon" 
                            style={{fontSize: 1.6 + 'rem'}}>📝
                        </span>
                    </label>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="please let me know of any key details relating to your enquiry, for example: are you looking to hire a DJ for a: venue / party / function / festival etc... the location, the dates etc..."
                        onChange={updateInput}
                        value={formData.message || ''}
                        required
                    ></textarea>
                    <button type="submit">
                        <img src={ Email } alt="send email"/>
                        <span>Send Message</span>
                    </button>
                    <p>Alternatively, feel free to contact me by phone on:</p>
                    <a className="red" href="tel:+34667841767">+34 667 84 17 67</a>
                </form>
            </div>
            <div id="dj-contact">
                <img src={ DJContact } alt="dj contact"></img>
            </div>
        </section>
      </div>
    )
  }
  
  export default Contact;
