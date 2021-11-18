import React from "react";
import { useEffect } from "react";
import UserInfo from "../UserInfo";
import Teacher from "../Teacher";
import TodayInfo from "../TodayInfo";
import TodayTime from "../TodayTime";
import ClassChat from "../ClassChat";
import "./Main.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
function Main(props) {
  const {
    title,
    teacherProps,
    teacher2Props,
    todayInfoProps,
    todayTimeProps,
    classChatProps,
  } = props;
  const authToken = localStorage.getItem("HDID_TOKEN");
  const [userData, setUserData] = React.useState({});
  useEffect(() => {
    axios
      .get(process.env.API_HOST + "/v1/users/@me", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data);
        } else {
          localStorage.clear();
          return <Redirect to="/" />;
        }
      });
  }, []);
  if (!authToken) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <div className="flex-row">
          <div className="flex-col">
            <div className="title">{title}</div>
            <UserInfo
              grade={userData.grade}
              xclass={userData.classnum}
              num={userData.number}
              name={userData.name}
            />
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
