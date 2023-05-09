import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import '../App.css'
import dotenv from '../.env';
dotenv.config();


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;


    const data = {
      name,
      email,
      message
    };

    emailjs.send(serviceId, templateId, data, userId)
      .then((result) => {
        console.log('Email successfully sent!');
      }, (error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
  };
console.log(emailjs.send)
  return (
    <div className='App-Contact'>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br></br>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
