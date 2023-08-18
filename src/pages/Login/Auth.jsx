import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";

  // const REDIRECT_URI = "https://benevolent-croquembouche-fd718d.netlify.app/oauth/kakao/callback";

  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        // url: `http://localhost:3000/login/oauth2/code/kakao/?code=${code}`,
        url: `/login/oauth2/code/kakao/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      })
        .then((res) => {
          //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
          console.log(res);
          // const token = res.headers.authorization;
          // window.localStorage.setItem("token", token);
          //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
          localStorage.setItem("name", res.data.account.kakaoName);
          //로그인이 성공하면 이동할 페이지
          navigate("/success");
        })
        .catch((err) => {
          console.log("에러", err);
          window.alert("로그인에 실패했습니다.");
        });
    };

    kakaoLogin();
  }, []);

  return (
    <div>
      <div>
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <p>{code}</p>
      </div>
    </div>
  );
};

export default Auth;
