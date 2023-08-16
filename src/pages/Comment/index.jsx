import React, { useState, useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const WritePostWithDate = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("장광진");
  const [content, setContent] = useState("");
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    fetchBoardData();
  }, []);

  const fetchBoardData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/board/{id}");
      setBoardData(response.data);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/reply/{id}`, {
        username,
        content,
      });

      // const newReply = response.data;

      setShowModal(false);

      fetchBoardData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <div className="absolute inset-x-0 bottom-6 h-px bg-[#829476] transform -translate-y-1/2">
            {/* Horizontal line */}
          </div>
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
              <button
                type="button"
                onClick={handleRegister}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Display boardData below the button */}
      <div className="mt-4 w-[850px]">
        {boardData.map((item, index) => (
          <div key={index}>
            <p className="mb-3 font-bold">{item.content}</p>
            <p className="text-right text-gray-400 ">{item.username}</p>
            <hr className="bg-[#829476] my-10" />
          </div>
        ))}
        {/* 이게 위에 boardData 예시본 */}
        <div className="w-[850px]">
          <div>
            <p className="mb-3 font-bold">
              제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발
            </p>
            <p className="text-right text-gray-400">장광진</p>
            <hr className="bg-[#829476] my-10" />
          </div>
          <div>
            <p className="mb-3 font-bold">
              제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발
            </p>
            <p className="text-right text-gray-400 mb-2">장광진</p>
            <hr className="bg-[#829476] my-10" />
          </div>
          <div>
            <p className="mb-3 font-bold">
              제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발
            </p>
            <p className="text-right text-gray-400 mb-2">장광진</p>
            <hr className="bg-[#829476] my-10" />
          </div>
        </div>
        {/* 이게 위에 boardData 예시본 */}
      </div>
    </div>
  );
};

export default WritePostWithDate;
