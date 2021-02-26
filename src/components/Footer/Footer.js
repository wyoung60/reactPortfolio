import React from "react";
import "./style.css";
import Resume from "../../Assets/Images/Resume.pdf";

const Footer = () => {
  return (
    <ul className="footerElement">
      <li>
        <a
          className="anchor"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </li>
    </ul>
  );
};

export default Footer;
