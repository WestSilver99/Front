import React from "react";
import axios from "axios";

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const REST_API_KEY = "c8be748be694cad38049c4bffb002b6c";
  const REDIRECT_URI =
    "https://benevolent-croquembouche-fd718d.netlify.app/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return <div>{code}</div>;
};

export default Auth;
