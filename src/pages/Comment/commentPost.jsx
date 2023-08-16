import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentPost = ({ postId }) => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/board/${postId}`)
      .then((res) => {
        setBoardData(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="mt-4 w-[850px]">
      {/* {boardData.replyList.map((reply, index) => (
        <div key={index}>
          <p className="mb-3 font-bold">{reply.content}</p>
          <p className="text-right text-gray-400 ">{reply.username}</p>
          <hr className="bg-[#829476] my-10" />
        </div>
      ))} */}
    </div>
  );
};

export default CommentPost;
