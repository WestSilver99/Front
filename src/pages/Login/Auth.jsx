import React from "react";

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI =
  //   "https://benevolent-croquembouche-fd718d.netlify.app/oauth/kakao/callback";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return <div>{code}</div>;
};

export default Auth;
