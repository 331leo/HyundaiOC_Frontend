import React from "react";
import "./ContactButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function ContactButton() {
  return (
    <div className="contact-button border-1px-alto">
      <div className="x11 sfprodisplay-semi-bold-eerie-black-14px">
        <div className="icon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <div className="text">연락하기</div>
      </div>
    </div>
  );
}

export default ContactButton;
