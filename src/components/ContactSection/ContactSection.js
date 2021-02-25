import React from "react";
import "./style.css";

const ContactSection = () => {
  return (
    <section className="infoBlock" id="contact">
      <div className="internalElements">
        <header>
          <h1>Contact</h1>
        </header>
        <hr />
        <form>
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
      </div>
    </section>
  );
};

export default ContactSection;
