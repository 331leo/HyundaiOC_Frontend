import React from "react";
import "./ZoomEnterButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function ZoomEnterButton(props) {
  const { url } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="zoom-enter-button border-1px-alto">
        <div className="x11-2 sfprodisplay-semi-bold-eerie-black-16px">
          <div className="icon-1">
            <FontAwesomeIcon icon={faVideo} />
          </div>
          <div className="text-3">줌 입장</div>
        </div>
      </div>
    </a>
  );
}

export default ZoomEnterButton;
