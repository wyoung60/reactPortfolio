import React from "react";
import "./style.css";
import emailjs from "emailjs-com";

//Returns contact form
const ContactSection = () => {
  const emailSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        event.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (err) => console.log(err.text)
      );
    event.target.reset();
  };

  return (
    <section className="contactSection">
      <form className="contactForm" onSubmit={emailSubmit}>
        <label htmlFor="userName">Name</label>
        <input
          name="user"
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter Name"
        />
        <label htmlFor="userEmail" className="tag">
          Email
        </label>
        <input
          name="user_email"
          type="text"
          className="form-control"
          id="userEmail"
          placeholder="Email Address"
        />
        <label htmlFor="userMessage" className="tag">
          Message
        </label>
        <textarea
          name="user_message"
          type="text"
          className="form-control"
          id="userMessage"
          placeholder="Message"
          rows="3"
        ></textarea>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
      <aside className="contactInfo">
        <h4 className="contactDetails">Wesley Young</h4>
        <h6 className="contactDetails">Email: wesley.young12@outlook.com</h6>
        <h6>Castle Rock, CO</h6>
      </aside>
    </section>
  );
};

export default ContactSection;
