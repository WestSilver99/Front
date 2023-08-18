import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const CourseDetails = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div>
      <div>
        <h2 className="text-[32px] sm:text-[28px] font-bold my-10 pb-3 border-b-[2px] border-[#6E7B65]">
          등산로 상세구간
        </h2>
        <div>
          {course.map((course, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between border-b-[1px] border-[#96A68B]">
                <h3 className="text-[24px] sm:text-[22px] text-start text-[#6E7B65] font-extrabold my-2 ">
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
                  <div className="p-6 xl:w-[850px] bg-[#C2D6B4] mt-2">
                    {course.description.map((item, idx) => (
                      <p key={idx} className="mb-2">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <div className="w-1/4 sm:w-1/2 h-[167px] sm:text-[14px] p-4 my-2 mr-2 bg-[#C2D6B4]">
                      <p>등산로 길이: {course.pmntn_lt}</p>
                      <p>상행시간: {course.pmntn_uppl}</p>
                      <p>하행시간: {course.pmntn_godn}</p>
                      <p>등산 난이도: {course.pmntn_dffl}</p>
                    </div>
                    <div className="w-3/4 sm:w-1/2 h-[167px] p-4 my-2 ml-2 bg-[#C2D6B4]">
                      <div>
                        <p className="text-[24px] mb-1 font-bold sm:text-[14px]">
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
