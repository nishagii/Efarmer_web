import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
        <div className='headi'>
            <img src='contact head.png' alt='co.he.im'/>
            <h1 className='h-text'>Contact</h1>
        </div>
      <div className="contact-info">
        
        <div className="about">
          <h3 className='info'>About</h3>
          <p>This is our products.Come,Visit,Buy...</p>
        </div>
        <div className="contact">
          <h3 className='info'>Contact</h3>
          <p>011-45678230</p>
          <p>agro@gmail.com</p>
          <p>Mon - Fri<br/>7:00 am - 6:00 pm</p>
        </div>
        <div className="address">
          <h3 className='info'>Address</h3>
          <p>No 890,<br/>Diyathalawa Road,<br/>Badulla,<br/>Sri Lanka.</p>
        </div>
      </div>

      <div className="image-form">
        <div className="image">
          <img src="vf.jpg" alt="Contact" />
        </div>
        <div className="contact-form">
          <h4 className='cform'>Contact us</h4>
          <h1>Write a Message</h1>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Write a Message" required></textarea>
            <button type="submit">Send a Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
