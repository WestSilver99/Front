import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const CourseDetails = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div>
      <div>
        <h2 className="text-[30px] sm:text-[28px] font-bold my-10 pb-3 border-b-[2px] border-[#6E7B65]">
          등산로 상세구간
        </h2>
        <div>
          {course.map((course, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between border-b-[1px] border-[#96A68B]">
                <h3 className="text-[22px] sm:text-[22px] text-start text-[#6E7B65] font-extrabold my-2 ">
                  {course.pmntn_nm}
                </h3>
                <button
                  className="bg-[#EAF3EC] px-4 rounded-lg text-[18px] sm:text-[12px] sm:mb-1 sm: mb-2 text-[#8F9D86]"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  정보보기
                </button>
              </div>
              {openIndex === index && (
                <>
                  <div className="p-6 xl:w-[850px] bg-[#EAF3EC] mt-2">
                    {course.description.map((item, idx) => (
                      <p key={idx} className="mb-2">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <div className="w-1/4 sm:w-1/2 h-[167px] sm:text-[14px] p-4 my-2 mr-2 bg-[#EAF3EC]">
                      <div className="flex flex-row justify-between mb-1">
                        <span>등산로 길이</span>{" "}
                        <span className="w-[75px] text-center h-[30px] bg-[#C2D6B4] rounded-md">
                          {course.pmntn_lt}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mb-1">
                        <span>상행시간</span>{" "}
                        <span className="w-[75px] text-center h-[30px] bg-[#C2D6B4] rounded-md">
                          {course.pmntn_uppl}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mb-1">
                        <span>하행시간</span>{" "}
                        <span className="w-[75px] text-center h-[30px] bg-[#C2D6B4] rounded-md">
                          {course.pmntn_godn}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mb-1">
                        <span>등산 난이도</span>{" "}
                        <span className="w-[75px] text-center h-[30px] bg-[#C2D6B4] rounded-md">
                          {course.pmntn_dffl}
                        </span>
                      </div>
                    </div>
                    <div className="w-3/4 sm:w-1/2 h-[167px] p-4 my-2 ml-2 bg-[#EAF3EC]">
                      <div>
                        <p className="text-[22px] mb-1 font-bold sm:text-[14px]">
                          등산코스 위치 보기
                        </p>

                        <button>
                          <a
                            target="_blank"
                            href={`https://map.kakao.com/link/to/${course.locationName},${course.latitued},${course.longitude}`}
                            rel="noreferrer"
                          >
                            <div className="flex items-center justify-center w-48 sm:w-[130px] sm:h-[60px] sm:mt-5 h-20 rounded-xl bg-kakao-yellow text-2xl sm:text-xl">
                              <FaLocationDot className="mr-2 sm:text-base sm:mr-1" />
                              <span className="text-center font-mono uppercase font-extrabold">
                                kakao map
                              </span>
                            </div>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
