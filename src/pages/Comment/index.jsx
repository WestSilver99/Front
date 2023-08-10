import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("홍길동"); // 사용자 이름 상태 추가

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const commentWithUser = `${userName ? userName + ": " : ""}${newComment}`; // 사용자 이름 포함하여 댓글 생성
      setComments([...comments, commentWithUser]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <input
          rows="4"
          className="w-full p-2 border rounded"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요"
        />
        <button
          className="mt-2 py-1 px-3 bg-[#96A68C] text-white rounded hover:bg-blue-600"
          onClick={handleCommentSubmit}
        >
          댓글 작성
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">댓글 목록</h2>
        <ul className="list-disc pl-6 list-none">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
