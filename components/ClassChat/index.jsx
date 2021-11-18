import React from "react";
import Chat from "../Chat";
import MyChat from "../MyChat";
import SendArea from "../SendArea";
import "./ClassChat.css";

function ClassChat(props) {
  const {
    title,
    chatProps,
    chat2Props,
    chat3Props,
    myChatProps,
    sendAreaProps,
  } = props;

  return (
    <div className="class-chat">
      <div className="title-2 sfprodisplay-bold-eerie-black-24px">{title}</div>
      <div className="overlap-group8">
        <Chat username={chatProps.username} text={chatProps.text} />
        <Chat
          username={chat2Props.username}
          text={chat2Props.text}
          className={chat2Props.className}
        />
        <Chat
          username={chat3Props.username}
          text={chat3Props.text}
          className={chat3Props.className}
        />
        <MyChat>{myChatProps.children}</MyChat>
        <SendArea textFieldProps={sendAreaProps.textFieldProps} />
      </div>
    </div>
  );
}

export default ClassChat;
