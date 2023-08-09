import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);
  const [showCourseImage, setShowCourseImage] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);

  const toggleShowCourseImage = () => {
    setShowCourseImage(!showCourseImage);
  };

  const toggleShowTraffic = () => {
    setShowTraffic(!showTraffic);
  };

  return (
    <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <div>
          <p className="text-white inline-block ml-2 absolute -mt-5 z-10 text-lg bg-[#96A68B] p-1 rounded-md">
            {post.title}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="relative w-[850px] h-[600px] object-cover mb-2 sm:h-[240px] md:h-[240px]"
          />
          <div className="justify-between flex items-center bg-[#C2D6B4] h-[60px] ">
            <p className="mx-2 text-[20px] font-bold">등산로 사진보기</p>
            <button onClick={toggleShowCourseImage} className="mx-2">
              <FaAngleDown size={20} />
            </button>
          </div>

          {showCourseImage && (
            <div className="flex flex-wrap justify-center p-2">
              {post.courseImage &&
                post.courseImage.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Course ${index}`}
                    className="w-[300px] h-[200px] object-cover m-2"
                  />
                ))}
            </div>
          )}
          <div className="flex flex-row">
            <div className="w-2/3 h-[167px] p-4 my-2 mr-2 bg-[#C2D6B4] ">
              <p className="text-start text-[28px] mb-1 font-bold">산 소재지</p>
              <p className="text-start bg-[#70ad44] text-[16px] p-2">
                {post.location}
              </p>
            </div>
            <div className="w-1/3 justify-between items-start flex h-[167px] p-4 my-2 ml-2 bg-[#C2D6B4]">
              <p className="text-[28px] mb-1 font-bold">교통정보 보기</p>
              <button onClick={toggleShowTraffic} className="">
                <FaAngleDown size={20} />
              </button>
              {showTraffic && (
                <div className="flex flex-col">
                  {post.traffic && post.traffic.map((item) => <p>{item}</p>)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainDetail;
