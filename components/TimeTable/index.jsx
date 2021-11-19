import React from "react";
import ZoomEnterButton from "../ZoomEnterButton";
import "./TimeTable.css";

function TimeTable(props) {
  const { timetext, classname, teachername, className, url } = props;

  return (
    <div className={`time-table-2 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="time-text-2 sfprodisplay-regular-normal-eerie-black-16px">
          {timetext}교시
        </div>
        <div className="class-name sfprodisplay-bold-eerie-black-27px">
          {classname}
        </div>
      </div>
      <div className="teacher-name-1 sfprodisplay-medium-eerie-black-27px">
        {teachername} 선생님
      </div>
      <ZoomEnterButton url={url} />
    </div>
  );
}

export default TimeTable;
