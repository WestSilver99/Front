import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const TrafficMountains = ({ mntninfopoflc, pbtrninfodscrt }) => {
  const [showTraffic, setShowTraffic] = useState(false);

  const toggleShowTraffic = () => {
    setShowTraffic(!showTraffic);
  };
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-2/3 h-[167px] p-4 my-2 mr-2 bg-[#EAF3EC] ">
          <p className="text-start text-[28px] sm:text-xl mb-5 font-bold">
            산 소재지
          </p>
          <p className="text-start w-full  bg-[#C2D6B4] text-[16px] sm:text-[12px] p-2">
            {mntninfopoflc}
          </p>
        </div>

        <div
          className={`w-1/3 h-[167px] p-4 my-2 ml-2 bg-[#EAF3EC] ${
            showTraffic ? "h-auto" : "h-[167px]"
          } transition-all relative`}
        >
          <div className="flex flex-row justify-between items-center">
            <p className="text-[28px] mb-1 font-bold sm:text-[12px]">
              교통정보 보기
            </p>
            <button onClick={toggleShowTraffic} className="ml-2 ">
              <FaAngleDown size={20} />
            </button>
          </div>
          <div
            className={`overflow-hidden absolute left-0 w-full bg-[#EAF3EC] ${
              showTraffic ? "max-h-[400px]" : "max-h-0"
            }   duration-1000`}
          >
            {showTraffic && (
              <div className="xl:w-[250px] flex flex-col">
                {pbtrninfodscrt.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm font-semibold mx-2 sm:mt-3 sm:text-[8px]"
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
  );
};

export default TrafficMountains;
