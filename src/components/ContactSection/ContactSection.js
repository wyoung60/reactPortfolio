import React from "react";
import "./style.css";

//Returns contact form
const ContactSection = () => {
  return (
    <section className="contactSection">
      <form className="contactForm">
        <div>
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="userEmail"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="userMessage">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="userMessage"
            placeholder="Message"
            rows="3"
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
      <aside className="contactInfo">
        <h4>Wesley Young</h4>
        <h6>Email: wesley.young12@outlook.com</h6>
        <h6>Castle Rock, CO</h6>
      </aside>
    </section>
  );
};

export default ContactSection;
