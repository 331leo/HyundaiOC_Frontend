import React from "react";
import Chat from "../Chat";
import SendArea from "../SendArea";
import "./ClassChat.css";

function ClassChat() {
  return (
    <div className="class-chat">
      <div className="title-2 sfprodisplay-bold-eerie-black-24px">
        우리반 광장
      </div>
      <div className="overlap-group8">
        <Chat
          username={"송원준"}
          text={"오늘 수학 수업시간에 배운거 기억나?"}
        />
        <Chat
          username={"김지섭"}
          text={"응! 당연히 생각나지~ 근데 갑자기 왜?"}
          className={"chat-2"}
        />{" "}
        <Chat
          username={"최수혁"}
          text={"다름이 아니라, 같이 수학 발표할 친구를 찾고 있었어"}
          className={"chat-2"}
        />{" "}
        <Chat
          username={"조재희"}
          text={"혹시 내가 같이 해도 될까??"}
          className={"chat-2"}
        />{" "}
        <Chat
          username={"김지성"}
          text="아니, 힘들것 같아. 너는 다른애들이랑도 하잖아."
          className={"chat-2"}
        />{" "}
        <SendArea />
      </div>
    </div>
  );
}

export default ClassChat;
