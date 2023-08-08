import SearchBar from "@utils/search";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <nav className=" w-full xl:py-6 xl:px-20 md:px-10 sm:mb-10 ">
      <div className=" max-w-screen-xl ml-3 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className=" text-3xl text-[#96A68C] shadow-black  xl:text-[60px] lg:text-[80px] font-semibold whitespace-nowrap ">
            SANTA
          </span>
        </Link>
        <div className="flex flex-row">
          <Link to="/login">
            <button className="mr-2 mt-1">
              <BsFillPersonFill size={30} color="green" />
            </button>
          </Link>
          <SearchBar smHidden="hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
