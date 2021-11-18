import React from "react";
import UserInfo from "../UserInfo";
import Teacher from "../Teacher";
import TodayInfo from "../TodayInfo";
import TodayTime from "../TodayTime";
import ClassChat from "../ClassChat";
import "./Main.css";

function Main(props) {
  const {
    title,
    userInfoProps,
    teacherProps,
    teacher2Props,
    todayInfoProps,
    todayTimeProps,
    classChatProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <div className="flex-row">
          <div className="flex-col">
            <div className="title">{title}</div>
            <UserInfo xclass={userInfoProps.xclass} name={userInfoProps.name} />
          </div>
          <div className="flex-col-1">
            <Teacher
              teachertype={teacherProps.teachertype}
              teachername={teacherProps.teachername}
            />
            <Teacher
              teachertype={teacher2Props.teachertype}
              teachername={teacher2Props.teachername}
              className={teacher2Props.className}
            />
          </div>
          <TodayInfo date={todayInfoProps.date} time={todayInfoProps.time} />
        </div>
        <div className="flex-row-1">
          <TodayTime {...todayTimeProps} />
          <ClassChat
            title={classChatProps.title}
            chatProps={classChatProps.chatProps}
            chat2Props={classChatProps.chat2Props}
            chat3Props={classChatProps.chat3Props}
            myChatProps={classChatProps.myChatProps}
            sendAreaProps={classChatProps.sendAreaProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
