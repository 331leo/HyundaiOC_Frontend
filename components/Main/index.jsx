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
  const { todayTimeProps, classChatProps } = props;
  const authToken = localStorage.getItem("HDID_TOKEN");
  const [userData, setUserData] = React.useState({});
  const [nowData, setNowData] = React.useState({});
  const refrashNowData = () => {
    axios
      .get(process.env.API_HOST + "/v1/time/", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        if (res.status === 200) {
          setNowData(res.data);
        } else {
          console.log("현재 정보 불러오기 실패");
        }
      });
  };
  useEffect(() => {
    axios
      .get(process.env.API_HOST + "/v1/users/class", {
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
  useEffect(() => {
    refrashNowData();
  }, []);
  if (!authToken) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <div className="flex-row">
          <div className="flex-col">
            <div className="title">HyundaiOC</div>
            <UserInfo
              grade={userData?.student?.grade}
              xclass={userData?.student?.classnum}
              num={userData?.student?.number}
              name={userData?.student?.name}
            />
          </div>
          <div className="flex-col-1">
            {console.log(nowData)}
            <Teacher
              teachertype="담임교사"
              teachername={userData?.teacher}
              contact={userData.teacher_tel}
            />
            <Teacher
              teachertype="교과교사"
              teachername={nowData?.subject ? nowData.subject.teacher : "---"}
              className="teacher-1"
              contact={nowData?.subject?.teacher_tel}
            />
          </div>
          <TodayInfo
            date={nowData?.date}
            time={nowData?.period + 1}
            subject={nowData?.subject}
            refrash={refrashNowData}
          />
        </div>
        <div className="flex-row-1">
          <TodayTime
            {...todayTimeProps}
            data={userData?.classes?.[nowData?.weekday]}
          />
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
