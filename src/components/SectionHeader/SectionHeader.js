import React from "react";
import "./style.css";

//Returns header for each section
const SectionHeader = ({ children, title, id }) => {
  return (
    <section className="infoBlock" id={id}>
      <div className="internalElements">
        <header>
          <h1>{title}</h1>
        </header>
        <hr />
        <div>{children}</div>
      </div>
    </section>
  );
};

export default SectionHeader;
