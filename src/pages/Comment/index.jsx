import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import CommentPost from "./commentPost";

const WritePostWithDate = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("장광진");
  const [content, setContent] = useState("");

  return (
    <div>
      <div>
        <div className="flex relative justify-center my-10">
          <p className="text-white inline-block ml-2 z-20 text-[28px] sm:text-xl bg-[#829476] p-1 rounded-2xl">
            이용 후기
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="absolute -top-1 right-0"
          >
            <BsFillPencilFill color="green" size={24} />
          </button>
          <div className="absolute inset-x-0 bottom-6 h-px bg-[#829476] transform -translate-y-1/2"></div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex justify-between flex-row">
              <h2>후기 작성</h2>
              <button onClick={() => setShowModal(false)}>
                <FaTimes color="red" />
              </button>
            </div>
            <form className="flex flex-col">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 mb-2"
                disabled
              />
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 mb-2 w-[800px] h-[400px]"
              />
              {/* <button
                type="button"
                onClick={handleRegister}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Register
              </button> */}
            </form>
          </div>
        </div>
      )}
      <CommentPost postId={postId} />
    </div>
  );
};

export default WritePostWithDate;
