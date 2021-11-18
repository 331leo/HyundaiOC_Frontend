import React from "react";
import "./Chat.css";

function Chat(props) {
  const { username, text, className } = props;

  return (
    <div className={`chat ${className || ""}`}>
      <div className="user-name sfprodisplay-semi-bold-eerie-black-16px">{username}</div>
      <div className="chat-text">
        <div className="text-4 sfprodisplay-regular-normal-eerie-black-21px">{text}</div>
      </div>
    </div>
  );
}

export default Chat;
