import React from "react";
import ProfilePic from "../../Assets/Images/ProfilePic.jpeg";
import "./style.css";

//Returns about informations
const AboutSection = () => {
  return (
    <section className="aboutSection">
      <img className="profilePic" src={ProfilePic} alt="profilepic"></img>
      <aside className="bio">
        <p>
          My name is Wesley Young. I am based in Castle Rock, Colorado. I have
          bachelor's degree in mechanical engineering from Western Michigan
          University and completed a for Full Stack Web Development Bootcamp at
          the University of Denver. I am a problem solver and love to solve
          puzzles. During my journey to become an engineer, I found a passion
          for creating and troubleshooting code.
        </p>
        <p>
          <b>Languages:</b> JavaScript, CCS, HTML, SQL, & NoSQL
        </p>
        <p>
          <b>Technologies:</b> Express, Node.js, jQuery, MySQL, & MongoDB
        </p>
      </aside>
    </section>
  );
};

export default AboutSection;
