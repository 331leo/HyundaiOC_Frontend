import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Callback from "./components/Callback";

function App() {
  const authToken = localStorage.getItem("HDID_TOKEN");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authToken ? <Main /> : <Login />}
        </Route>
        <Route path="/callback" render={Callback} />
        <Route path="/login">
          <Login />
          <Main
            title="HyundaiOC"
            userInfoProps={mainData.userInfoProps}
            teacherProps={mainData.teacherProps}
            teacher2Props={mainData.teacher2Props}
            todayInfoProps={mainData.todayInfoProps}
            todayTimeProps={mainData.todayTimeProps}
            classChatProps={mainData.classChatProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const userInfoData = {
  xclass: "1학년 10반 2번",
  name: "동현님, 안녕하세요.",
};

const teacherData = {
  teachertype: "담임교사",
  teachername: "최형건 선생님",
};

const teacher2Data = {
  teachertype: "교과교사",
  teachername: "고헌영 선생님",
  className: "teacher-1",
};

const todayInfoData = {
  date: "2021년 11월 19일 (금)",
  time: "지금은 4교시 입니다.",
};

const timeTableData = {
  timetext: "1교시",
  classname: "사회A",
  teachername: "강지유 선생님",
};

const timeTable2Data = {
  timetext: "2교시",
  classname: "음악",
  teachername: "주지현 선생님",
  className: "time-table-4",
};

const timeTable3Data = {
  timetext: "3교시",
  classname: "수학",
  teachername: "김병수 선생님",
  className: "time-table-5",
};

const timeTable4Data = {
  timetext: "4교시",
  classname: "실험",
  teachername: "고현영 선생님",
  className: "time-table-1-1",
};

const timeTable5Data = {
  timetext: "5교시",
  classname: "국어B",
  teachername: "유민지 선생님",
  className: "time-table-3",
};

const timeTable6Data = {
  timetext: "6교시",
  classname: "창체",
  teachername: "최형건 선생님",
  className: "time-table-1",
};

const timeTable7Data = {
  timetext: "7교시",
  classname: "창체",
  teachername: "최형건 선생님",
  className: "time-table",
};

const todayTimeData = {
  title: "오늘의 시간표",
  timeTableProps: timeTableData,
  timeTable2Props: timeTable2Data,
  timeTable3Props: timeTable3Data,
  timeTable4Props: timeTable4Data,
  timeTable5Props: timeTable5Data,
  timeTable6Props: timeTable6Data,
  timeTable7Props: timeTable7Data,
};

const chatData = {
  username: "송원준",
  text: "와 이번 시험 어렵다 기출 있는 사람",
};

const chat2Data = {
  username: "김지섭",
  text: "영어 범위 너무 많은데? 살려줘",
  className: "chat-1",
};

const chat3Data = {
  username: "최수혁",
  text: "나 무서워,,이러다간 다 죽어!!",
  className: "chat-2",
};

const myChatData = {
  children:
    "이것은최대글자수입니다하하안녕하세요밥은드셨나요?전밥을못먹었어요지금물한모금으로버티고있습니다여러분모두좋은아침보내시고요제맥북은배터리가아직많이남았어요네이거쓸데없는글자입니다여러분동현이형많이사랑해주세요연어덮밥도많이사주고착하고귀여운형입니다허허그럼디자인훈수두는저의글귀는여기까지할게용ㅎㅎ",
};

const textFieldData = {
  children: "모두가 행복한 광장이 될 수 있도록 바르고 고운 말을 사용해주세요!",
};

const sendAreaData = {
  sendbutton: "􀈠",
  textFieldProps: textFieldData,
};

const classChatData = {
  title: "우리반 광장",
  chatProps: chatData,
  chat2Props: chat2Data,
  chat3Props: chat3Data,
  myChatProps: myChatData,
  sendAreaProps: sendAreaData,
};

const mainData = {
  title: "HyundaiOC",
  userInfoProps: userInfoData,
  teacherProps: teacherData,
  teacher2Props: teacher2Data,
  todayInfoProps: todayInfoData,
  todayTimeProps: todayTimeData,
  classChatProps: classChatData,
};
