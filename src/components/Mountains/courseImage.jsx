import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CourseImages = ({ courseImage }) => {
  const [showCourseImage, setShowCourseImage] = useState(false);
  const toggleShowCourseImage = () => {
    setShowCourseImage(!showCourseImage);
  };
  return (
    <div>
      <div className="justify-between flex items-center bg-[#EAF3EC] h-[60px] ">
        <p className="mx-2 text-[28px] sm:text-xl font-bold">등산로 사진보기</p>
        <button onClick={toggleShowCourseImage} className="mx-2">
          <FaAngleDown size={20} />
        </button>
      </div>

      {showCourseImage && (
        <div className="flex flex-wrap justify-center p-2">
          {courseImage &&
            courseImage.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Course`}
                className="w-[300px] h-[200px] object-cover m-2"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CourseImages;
