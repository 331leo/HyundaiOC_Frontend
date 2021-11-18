import React from "react";
import ZoomButton from "../ZoomButton";
import "./TodayInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
function TodayInfo(props) {
  const { date, time } = props;

  return (
    <div className="today-info">
      <div className="date sfprodisplay-regular-normal-eerie-black-24px">
        {date}
      </div>
      <div className="time">{time}</div>
      <div className="refresh">
        <FontAwesomeIcon icon={faSyncAlt} />
      </div>
      <ZoomButton subject="실험" />
    </div>
  );
}

export default TodayInfo;
