import React from "react";
import "./Landing-Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function LandFooter() {
  return (
    <footer className="footer flex">
      <h2>Copyright © 2022 New Yauk.</h2>
      <div className="center-footer flex">
        <button className="foot-link">
          Blogs
        </button>
        <a href="#" className="foot-link">
          About Us
        </a>
        <a href="#" className="foot-link">
          Terms
        </a>
        <a href="#" className="foot-link">
          Contact
        </a>
        <a href="#" className="foot-link">
          Privacy Policy
        </a>
      </div>
      <div className="language-selector">
        <div className="selected-language ">
          <p className="flex">
            English <FontAwesomeIcon icon={faChevronUp} />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default LandFooter;
