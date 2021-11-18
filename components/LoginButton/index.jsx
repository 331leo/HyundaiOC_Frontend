import React from "react";
import "./LoginButton.css";
import dotenv from "dotenv";
dotenv.config();

function LoginButton() {
  return (
    <a href={process.env.API_HOST + "/v1/login"}>
      <div className="login-button">
        <img className="logo" src="/img/logo@1x.png" />
        <div className="text-6">현대고등학교 계정으로 로그인</div>
      </div>
    </a>
  );
}

export default LoginButton;
