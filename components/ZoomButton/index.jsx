import React from "react";
import "./ZoomButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
function ZoomButton(props) {
  const { subject } = props;
  return (
    <a href={subject?.url} target="_blank">
      <div className="zoom-button border-1px-alto sfprodisplay-semi-bold-eerie-black-18px">
        <div className="text-2">
          <FontAwesomeIcon icon={faVideo} />
        </div>
        <div className="text-1">{subject?.name} 줌 입장</div>
      </div>
    </a>
  );
}

export default ZoomButton;
