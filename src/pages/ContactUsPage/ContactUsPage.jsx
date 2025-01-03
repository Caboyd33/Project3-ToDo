import React from 'react';
import './ContactUsPage.css'; // Import the CSS file

export default function ContactUsPage() {
  return (
    <>
      <h1>Contact page</h1>
      <section className="contact-section">
        <div className="contact-intro">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="form-group-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" name="name" className="form-input" placeholder="Your name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" name="email" className="form-input" placeholder="Your email" type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input id="phone" name="phone" className="form-input" placeholder="+1 (234) 56789" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
          </div>

          <button className="form-submit" type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

