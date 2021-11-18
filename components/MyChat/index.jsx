import React from "react";
import "./MyChat.css";

function MyChat(props) {
  const { children } = props;

  return (
    <div className="my-chat">
      <div className="text-5 sfprodisplay-regular-normal-eerie-black-21px">{children}</div>
    </div>
  );
}

export default MyChat;
