import React from "react";
import "./TextField.css";

function TextField(props) {
  const { children } = props;

  return (
    <div className="text-field">
      <div className="overlap-group">
        <p className="hint sfprodisplay-regular-normal-eerie-black-16px">{children}</p>
      </div>
    </div>
  );
}

export default TextField;
