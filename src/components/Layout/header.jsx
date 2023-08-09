import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsX } from "react-icons/bs";
import SearchBar from "@utils/search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full xl:py-6 xl:px-20 md:px-10 sm:mb-10">
      <div className="max-w-screen-xl ml-3 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="text-3xl text-[#96A68C] shadow-black xl:text-[60px] lg:text-[80px] font-semibold whitespace-nowrap">
            SANTA
          </span>
        </Link>
        <div className="flex flex-row">
          <button
            onClick={handleToggleMenu}
            className={`mr-2 mt-1 ${
              showMenu ? "w-40" : "w-10"
            } bg-transparent border-none outline-none transition-all duration-300`}
          >
            {showMenu ? (
              <div className="h-10 bg-white flex items-center justify-center">
                <BsX size={20} color="green" />
                <Link to="/login">
                  <span className="text-[#96A68C] text-sm ml-2">
                    카카오 간편 로그인
                  </span>
                </Link>
              </div>
            ) : (
              <BsFillPersonFill size={30} color="green" />
            )}
          </button>
          <SearchBar smHidden="hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
