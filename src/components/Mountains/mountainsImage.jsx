import React from "react";

const MountainImages = ({ mntnnm, image }) => {
  return (
    <div>
      <p className="text-white inline-block ml-2 absolute -mt-5 z-10 text-[28px] sm:text-xl bg-[#829476] p-1 rounded-md">
        {mntnnm}
      </p>
      <img
        src={image}
        alt={mntnnm}
        className="relative w-[850px] h-[600px] object-cover filter drop-shadow-lg mb-2 sm:h-[240px] md:h-[240px]"
      />
    </div>
  );
};

export default MountainImages;
