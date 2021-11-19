import React from "react";
import TextField from "../TextField";
import "./SendArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function SendArea(props) {
  return (
    <div className="send-area">
      <TextField>
        {
          "(기능 개발중)모두가 행복한 광장이 될 수 있도록 바르고 고운 말을 사용해주세요!"
        }
      </TextField>
      <div className="send-button">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
}

export default SendArea;
