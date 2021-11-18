import React from "react";
import "./UserInfo.css";

function UserInfo(props) {
  const { xclass, name } = props;

  return (
    <div className="user-info">
      <div className="class sfprodisplay-regular-normal-eerie-black-24px">{xclass}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default UserInfo;
