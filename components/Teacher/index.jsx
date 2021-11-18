import React from "react";
import ContactButton from "../ContactButton";
import "./Teacher.css";

function Teacher(props) {
  const { teachertype, teachername, className } = props;

  return (
    <div className={`teacher ${className || ""}`}>
      <div className="teacher-type sfprodisplay-regular-normal-eerie-black-16px">{teachertype}</div>
      <div className="teacher-name sfprodisplay-bold-eerie-black-24px">{teachername}</div>
      <ContactButton />
    </div>
  );
}

export default Teacher;
