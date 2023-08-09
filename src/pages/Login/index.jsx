import React from "react";
import { Link } from "react-router-dom";
import KaKaoLogin from "../../assets/kakaoLogin.png";

const Login = () => {
  const REST_API_KEY = "c8be748be694cad38049c4bffb002b6c";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h1 className="text-3xl text-center">회원가입</h1>
      <span className="">
        <p>아이디와 비밀번호 입력 없이</p>
        <p>1초 회원가입으로 간편하게 이용하세요.</p>
      </span>

      <button className="kakaoLogin">
        <Link to={KAKAO_AUTH_URL}>
          <img src={KaKaoLogin} />
        </Link>
      </button>
    </div>
  );
};

export default Login;
