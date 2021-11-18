import React from "react";
import TextField from "../TextField";
import "./SendArea.css";

function SendArea(props) {
  const { sendbutton, textFieldProps } = props;

  return (
    <div className="send-area">
      <TextField>{textFieldProps.children}</TextField>
      <div className="send-button">{sendbutton}</div>
    </div>
  );
}

export default SendArea;
