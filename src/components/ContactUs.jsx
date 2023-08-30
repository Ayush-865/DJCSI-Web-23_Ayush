import React from "react";
import "../styles/contactus.css";

const ContactUs = () => {
  return (
    <>
      <div id="Contact" className="contact-container">
        <form action="https://formspree.io/f/moqowaqz" method="POST">
          <h3>Contact US</h3>
          <input type="text" name="username" autoComplete="off" placeholder="Your Name" required />
          <input type="email" name="Email" autoComplete="off" placeholder="Email ID" required />
          <input type="text" name="phone" autoComplete="off" placeholder="Phone no." required />
          <textarea name="message" rows="4" placeholder="How Can We Help You?" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
