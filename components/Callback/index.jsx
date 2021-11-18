import React from "react";
import dotenv from "dotenv";
import { useLocation } from "react-router-dom";

dotenv.config();

function Callback() {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  console.log(query);
  return (
    <div>
      처리중...<p>{code}</p>
    </div>
  );
}

export default Callback;
