import { useState } from "react";
import Sidebar from "./sidebar";
import { FaGripVertical } from "react-icons/fa";

const Header = () => {
  return (
    <nav className=" w-full  border-gray-200  bg-gray-800  xl:px-20 md:px-10 ">
      <div className="max-w-screen-xl ml-3 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
            SANTA
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
