import React, { useState } from "react";
import dotenv from "dotenv";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

dotenv.config();

function Callback() {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const [token, setToken] = useState();
  axios
    .post(`${process.env.API_HOST + "/v1/login/token"}`, {
      code: code,
    })
    .then((res) => setToken(res.data.token));
  if (token) {
    localStorage.setItem("HDID_TOKEN", token);
  }
  return (
    <div>
      {localStorage.getItem("HDID_TOKEN") ? <Redirect to="/" /> : null}처리중...
    </div>
  );
}

export default Callback;
