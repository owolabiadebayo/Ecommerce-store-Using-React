import React from "react";
import styles from "./styles.Topbar.css";

// import "../css/Landingpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Landingpage() {
  return (
    <div className="topbar">
      <div className="left">
        <a href="http://">
          <FontAwesomeIcon icon={faCoffee} />
          FAQs & contact
        </a>
        <a href="http://">
          <FontAwesomeIcon icon={faCoffee} />
          FAQs & contact
        </a>
      </div>
      <div className="topmiddle">
        <a href="#">Excellent</a>
        <a href="">
          <img
            className="star"
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt=""
          />
        </a>
        <a href="">Trustpilot</a>
      </div>
      <div className="topright">
        <a href="#">
          <img
            src="https://images.pet-supermarket.co.uk/image/upload/v1620214727/logo/PAWS_endorsement_EN_SML_WO_RGB.svg"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Landingpage;
