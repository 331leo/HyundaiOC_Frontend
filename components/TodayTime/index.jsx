import React from "react";
import TimeTable from "../TimeTable";
import "./TodayTime.css";

function TodayTime(props) {
  const { data } = props;
  const classNameArray = [
    "",
    "time-table-4",
    "time-table-5",
    "time-table-1-1",
    "time-table-3",
    "time-table-1",
    "time-table",
  ];
  return (
    <div className="today-time">
      <div className="title-1 sfprodisplay-bold-eerie-black-24px">
        오늘의 시간표
      </div>
      <div className="overlap-group7">
        {console.log(data)}
        {data?.map((item, index) => {
          console.log(item);
          return (
            <TimeTable
              timetext={index + 1}
              classname={item?.name}
              teachername={item?.teacher}
              url={item?.url}
              className={classNameArray[index]}
              key={index}
            />
          );
        })}
        {/* <TimeTable
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
        /> */}
      </div>
    </div>
  );
}

export default TodayTime;
