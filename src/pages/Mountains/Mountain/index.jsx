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
          <div>
            <p className="text-white inline-block ml-2 absolute -mt-5 z-10 text-lg bg-[#96A68B] p-1 rounded-md">
              {post.title}
            </p>
            <img
              src={post.image}
              alt={post.title}
              className="relative w-[850px] h-[600px] object-cover mb-2 sm:h-[240px] md:h-[240px]"
            />
          </div>
          <div>
            <div className="justify-between flex items-center bg-[#C2D6B4] h-[60px] ">
              <p className="mx-2 text-[20px] font-bold">등산로 사진보기</p>
              <button onClick={toggleShowCourseImage} className="mx-2">
                <FaAngleDown size={20} />
              </button>
            </div>

            {showCourseImage && (
              <div className="flex flex-wrap justify-center p-2">
                {post.courseImage &&
                  post.courseImage.map((image) => (
                    <img
                      src={image}
                      alt={`Course`}
                      className="w-[300px] h-[200px] object-cover m-2"
                    />
                  ))}
              </div>
            )}
          </div>
          <div>
            <div className="flex flex-row">
              <div className="w-2/3 h-[167px] p-4 my-2 mr-2 bg-[#C2D6B4] ">
                <p className="text-start text-[28px] mb-1 font-bold">
                  산 소재지
                </p>
                <p className="text-start bg-[#70ad44] text-[16px] sm:text-[12px] p-2">
                  {post.location}
                </p>
              </div>

              <div
                className={`w-1/3 h-[167px] p-4 my-2 ml-2 bg-[#C2D6B4] ${
                  showTraffic ? "h-auto" : "h-[167px]"
                } transition-all relative`}
              >
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[28px] mb-1 font-bold sm:text-[10px]">
                    교통정보 보기
                  </p>
                  <button onClick={toggleShowTraffic} className="ml-2 ">
                    <FaAngleDown size={20} />
                  </button>
                </div>
                <div
                  className={`overflow-hidden absolute left-0 w-full bg-[#C2D6B4] ${
                    showTraffic ? "max-h-[400px]" : "max-h-0"
                  }   duration-1000`}
                >
                  {showTraffic && (
                    <div className="xl:w-[250px] flex flex-col">
                      {post.traffic.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm font-semibold sm:mt-3 sm:text-[8px]"
                        >
                          {item}
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl my-10 pb-3 border-b-2 border-black">
                등산로 상세구간
              </h2>
              <div>
                {post.course.map((course, index) => (
                  <div key={index} className="my-4">
                    <h3 className="text-[32px]  text-center text-[#96A68B] font-extrabold my-8">
                      {course.name}
                    </h3>
                    <div className="p-6 xl:w-[850px] bg-[#C2D6B4] ">
                      {course.description.map((item, idx) => (
                        <p key={idx} className="mb-2">
                          {item}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-row ">
                      <div className="w-1/4 sm:w-1/2 h-[167px] sm:text-[14px] p-4 my-2 mr-2 bg-[#C2D6B4]">
                        <p>등산로 길이: {course.length}</p>
                        <p>상행시간: {course.upTime}</p>
                        <p>하행시간: {course.downTime}</p>
                        <p>등산 난이도: {course.level}</p>
                      </div>
                      <div className="w-3/4 sm:w-1/2 h-[167px] p-4 my-2 ml-2 bg-[#C2D6B4]">
                        <div>
                          <p className="text-[24px] mb-1 font-bold sm:text-[10px]">
                            등산코스 위치 보기
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainDetail;
