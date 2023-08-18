import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentPost = ({ postId }) => {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://43.202.134.74:8080/board/${postId}`)
      .then((res) => {
        setBoardData(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  // console.log(postId);
  console.log(boardData);
  return (
    <div className="mt-4 xl:w-[850px]">
      <p>{boardData.id}</p>
      <p>{boardData.hkngpntdscrt}</p>
      {/* {boardData.replyList.map((reply) => (
        <p key={reply.id}>{reply.content}</p>
      ))} */}
    </div>
  );
};

export default CommentPost;
