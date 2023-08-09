import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsX } from "react-icons/bs";
import SearchBar from "@utils/search";
import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from "react-icons/bs";

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
          <button onClick={handleToggleMenu} className="relative">
            <BsFillPersonFill size={30} color="green" />
            {showMenu && (
              <div className="absolute bg-white top-10 left-0 z-50">
                <Link to="/login" className="flex items-center ml-2">
                  <div className="ml-[-80px] mt-1 w-40 bg-kakao-yellow p-2 rounded-lg">
                    <span className="text-sm flex items-center">
                      <BsFillChatFill className="mr-2" />
                      카카오 간편 로그인
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </button>

          <SearchBar smHidden="hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
