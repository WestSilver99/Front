import SearchBar from "@utils/search";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className=" w-full xl:py-6 xl:px-20 md:px-10 ">
      <div className=" max-w-screen-xl ml-3 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className=" text-2xl text-[#96A68C] shadow-black  xl:text-[60px] lg:text-[80px] font-semibold whitespace-nowrap ">
            SANTA
          </span>
        </Link>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Header;
