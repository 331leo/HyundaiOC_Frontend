import React from "react";
import LoginButton from "../LoginButton";
import "./Login.css";

function Login() {
  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <div className="flex-col-2">
          <div className="overlap-group-2">
            <h1 className="title-text">HyundaiOC</h1>
            <div className="sub-title-text">
              더 간편하게, 더 쉽게 수업을 하다.
            </div>
          </div>
          <LoginButton />
        </div>
        <img className="landscape" src="/img/landscape@1x.png" />
      </div>
    </div>
  );
}

export default Login;
