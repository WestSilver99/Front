import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import CommentPost from "./commentPost";
import axios from "axios";

const WritePostWithDate = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("장광진");
  const [content, setContent] = useState("");

  const handleRegister = () => {
    // Create a new reply object with content and username
    const newReply = {
      content: content,
      username: username,
    };

    // Send the new reply data to the server
    axios
      .post(`http://43.202.134.74:8080/reply/${postId}`, newReply)
      .then((response) => {
        // Handle success if needed
        console.log("Reply posted successfully", response);
        // Clear the content input field
        setContent("");
        // Close the modal
        setShowModal(false);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error posting reply:", error);
      });
  };

  return (
    <div>
      <div>
        <div className="flex relative justify-center my-10 sm:mt-14">
          <p className="text-white inline-block ml-2 z-20 text-[24px] sm:text-xl bg-[#829476] p-2 rounded-3xl">
            이용 후기
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="absolute -top-3 sm:-top-5 right-0"
          >
            <BsFillPencilFill color="green" size={24} />
          </button>
          <div className="absolute inset-x-0 bottom-6 h-px bg-[#829476] transform -translate-y-1/2"></div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-gray-500 bg-opacity-50">
          <div className="bg-white  p-4 rounded shadow-lg">
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
                className="border p-2 mb-2 xl:w-[800px] lg:w-[800px] h-[400px] sm:h-[250px] sm:w-[350px] md:w-[600px]"
              />
              <button
                type="button"
                onClick={handleRegister}
                className="bg-[#829476] text-white px-4 py-2 rounded"
              >
                제출
              </button>
            </form>
          </div>
        </div>
      )}
      <CommentPost postId={postId} />
    </div>
  );
};

export default WritePostWithDate;
