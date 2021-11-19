import React from "react";
import ZoomButton from "../ZoomButton";
import "./TodayInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
function TodayInfo(props) {
  const { date, time, subject, refrash } = props;

  return (
    <div className="today-info">
      <div className="date sfprodisplay-regular-normal-eerie-black-24px">
        {date}
      </div>
      <div className="time">
        {time > 1 ? `지금은 ${time}교시 입니다.` : "수업시간이 아닙니다."}
      </div>
      <div className="refresh">
        <a href="#" onClick={refrash}>
          <FontAwesomeIcon icon={faSyncAlt} />
        </a>
      </div>
      {subject ? <ZoomButton subject={subject} /> : null}
    </div>
  );
}

export default TodayInfo;
