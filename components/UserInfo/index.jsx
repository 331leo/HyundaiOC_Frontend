import React from "react";
import "./UserInfo.css";

function UserInfo(props) {
  const { grade, xclass, num, name } = props;

  return (
    <div className="user-info">
      <div className="class sfprodisplay-regular-normal-eerie-black-24px">
        {grade}학년 {xclass}반 {num}번
      </div>
      <div className="name">{String(name).slice(1)}님, 안녕하세요.</div>
    </div>
  );
}

export default UserInfo;
