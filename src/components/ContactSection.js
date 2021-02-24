import React from "react";

const ContactSection = () => {
  return (
    <section class="infoBlock" id="contact">
      <div class="internalElements">
        <header>
          <h1>Contact</h1>
        </header>

        <hr />

        <form>
          <div>
            <label for="userName">Name</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label for="userEmail">Email</label>
            <input
              type="text"
              class="form-control"
              id="userEmail"
              placeholder="Email Address"
            />
          </div>

          <div>
            <label for="userMessage">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="userMessage"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>

          <div>
            <button type="button" class="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
