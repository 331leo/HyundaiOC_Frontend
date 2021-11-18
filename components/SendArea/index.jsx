import React from "react";
import TextField from "../TextField";
import "./SendArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function SendArea(props) {
  const { textFieldProps } = props;

  return (
    <div className="send-area">
      <TextField>{textFieldProps.children}</TextField>
      <div className="send-button">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
}

export default SendArea;
