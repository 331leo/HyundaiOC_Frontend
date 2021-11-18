import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router";
import LoginButton from "../LoginButton";
import "./Login.css";

function Login() {
  const [token, setToken] = React.useState(localStorage.getItem("HDID_TOKEN"));
  useEffect(() => {
    if (token) {
      axios
        .get(process.env.OAUTH_HOST + "/v1/users/@me", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
          } else {
            localStorage.clear();
          }
        });
    }
  }, []);
  if (token) {
    return <Redirect to="/main" />;
  }
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
