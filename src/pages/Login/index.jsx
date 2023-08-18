import React from "react";
import { Link } from "react-router-dom";
import { BsFillChatFill } from "react-icons/bs";
import hikingImg from "@assets/free-icon-hiking-7757822.png";
import recommendImg from "@assets/free-icon-recommendation-992883.png";
import locationImg from "@assets/free-icon-map-point-3119614.png";
import mountainImg from "@assets/free-icon-mountains-753760.png";

const Login = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  //const REDIRECT_URI = "https://benevolent-croquembouche-fd718d.netlify.app/oauth/kakao/callback";
  const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-5">회원가입</h1>
        <div className="mb-5">
          <p>아이디와 비밀번호 입력 없이</p>
          <p>1초 회원가입으로 간편하게 이용하세요.</p>
        </div>
      </div>

      <button>
        <Link to={KAKAO_AUTH_URL}>
          <div className="flex items-center justify-center w-96 h-20 rounded-xl bg-kakao-yellow text-2xl">
            <BsFillChatFill className="mr-2" />
            <span className="text-center">카카오 1초 로그인/회원가입</span>
          </div>
        </Link>
      </button>

      <div className="flex items-center justify-center mt-52 space-x-4">
        <div className="flex flex-col items-center">
          <img
            style={{
              width: "100px",
              marginBottom: "30px",
            }}
            src={hikingImg}
            alt="Hiking"
          />
          <span className="mt-2 text-center">
            <p>다양한 등산로</p> <p>확인 가능</p>
          </span>
        </div>
        <div className="border-r border-2 border-black h-52 mx-4"></div>
        <div className="flex flex-col items-center">
          <img
            style={{
              width: "100px",
              marginBottom: "30px",
            }}
            src={recommendImg}
            alt="Recommend"
          />
          <span className="mt-2 text-center">
            <p>다른 사람에게</p>
            <p>추천 가능</p>
          </span>
        </div>
        <div className="border-r border-2 border-black h-52 mx-4"></div>
        <div className="flex flex-col items-center">
          <img
            style={{
              width: "100px",
              marginBottom: "30px",
            }}
            src={locationImg}
            alt="Location"
          />
          <span className="mt-2 text-center ">
            <p>주변 관광지 </p>
            <p>확인 가능</p>
          </span>
        </div>
        <div className="border-r border-2 border-black h-52 mx-4"></div>
        <div className="flex flex-col items-center">
          <img
            style={{
              width: "100px",
              marginBottom: "30px",
            }}
            src={mountainImg}
            alt="Mountain"
          />
          <span className="mt-2 text-center">
            <p>산에 대한 정보</p>
            <p>확인 가능</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
