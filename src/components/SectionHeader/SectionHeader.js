import React from "react";
import "./style.css";

//Returns header for each section
const SectionHeader = ({ children, title, id }) => {
  return (
    <div className="sectionDiv">
      <section className="infoBlock" id={id}>
        <main className="internalElements">
          <header>
            <h1>{title}</h1>
          </header>
          <hr />
          <div>{children}</div>
        </main>
      </section>
    </div>
  );
};

export default SectionHeader;
