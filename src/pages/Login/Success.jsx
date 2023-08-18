import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  // useLocation 훅을 사용하여 location 객체를 가져옵니다.
  const location = useLocation();

  // 전달받은 데이터를 location.state에서 추출합니다.
  const name = location.state?.name;

  return (
    <div>
      <p>{name}님, 환영합니다!</p>
      {/* 나머지 Success 컴포넌트 내용 */}
    </div>
  );
};

export default Success;
