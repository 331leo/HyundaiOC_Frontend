import React from "react";
import TimeTable from "../TimeTable";
import "./TodayTime.css";

function TodayTime(props) {
  const {
    title,
    timeTableProps,
    timeTable2Props,
    timeTable3Props,
    timeTable4Props,
    timeTable5Props,
    timeTable6Props,
    timeTable7Props,
  } = props;

  return (
    <div className="today-time">
      <div className="title-1 sfprodisplay-bold-eerie-black-24px">{title}</div>
      <div className="overlap-group7">
        <TimeTable
          timetext={timeTableProps.timetext}
          classname={timeTableProps.classname}
          teachername={timeTableProps.teachername}
        />
        <TimeTable
          timetext={timeTable2Props.timetext}
          classname={timeTable2Props.classname}
          teachername={timeTable2Props.teachername}
          className={timeTable2Props.className}
        />
        <TimeTable
          timetext={timeTable3Props.timetext}
          classname={timeTable3Props.classname}
          teachername={timeTable3Props.teachername}
          className={timeTable3Props.className}
        />
        <TimeTable
          timetext={timeTable4Props.timetext}
          classname={timeTable4Props.classname}
          teachername={timeTable4Props.teachername}
          className={timeTable4Props.className}
        />
        <TimeTable
          timetext={timeTable5Props.timetext}
          classname={timeTable5Props.classname}
          teachername={timeTable5Props.teachername}
          className={timeTable5Props.className}
        />
        <TimeTable
          timetext={timeTable6Props.timetext}
          classname={timeTable6Props.classname}
          teachername={timeTable6Props.teachername}
          className={timeTable6Props.className}
        />
        <TimeTable
          timetext={timeTable7Props.timetext}
          classname={timeTable7Props.classname}
          teachername={timeTable7Props.teachername}
          className={timeTable7Props.className}
        />
      </div>
    </div>
  );
}

export default TodayTime;
