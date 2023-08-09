import React from "react";
import { Link } from "react-router-dom";
import KaKaoLogin from "../../assets/kakaoLogin.png";
import { BsFillChatFill } from "react-icons/bs";
const Login = () => {
  const REST_API_KEY = "c8be748be694cad38049c4bffb002b6c";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl">회원가입</h1>
      <span className="">
        <p>아이디와 비밀번호 입력 없이</p>
        <p>1초 회원가입으로 간편하게 이용하세요.</p>
      </span>

      <button>
        <Link to={KAKAO_AUTH_URL}>
          <div className="flex items-center justify-center w-96 h-20 rounded-xl bg-kakao-yellow text-2xl">
            <BsFillChatFill className="mr-2" />
            <span className="text-center">카카오 1초 로그인/회원가입</span>
          </div>
        </Link>
      </button>
      <div className="flex items-center mt-52">
        <span>다양한 등산로 확인 가능</span>
        <div className="border-r border-black h-40 mx-4"></div>
        <span>다른 사람에게 추천 기능</span>
        <div className="border-r border-black h-40 mx-4"></div>
        <span>주변 관광지 확인 가능</span>
        <div className="border-r border-black h-40 mx-4"></div>
        <span>산에 대한 정보 확인 가능</span>
      </div>
    </div>
  );
};

export default Login;
