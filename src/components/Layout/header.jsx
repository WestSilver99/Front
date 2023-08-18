import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import SearchBar from "@utils/search";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const location = useLocation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    setShowSearchBar(false);
  }, [location]);

  return (
    <nav className="w-full xl:py-6 xl:px-20 md:px-10 md:mb-8 md:mt-4 lg:mb-8 lg:mt-5 ">
      <div className="max-w-screen-xl ml-3 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="text-3xl text-[#96A68C] shadow-black xl:text-[60px] lg:text-[55px] md:text-[40px] font-extrabold whitespace-nowrap">
            SANTA
          </span>
        </Link>
        <div className="flex flex-row">
          <button onClick={handleToggleMenu} className="relative mr-3 mt-1">
            <BsFillPersonFill size={30} color="#829476" />
            {showMenu && (
              <div className="absolute bg-white top-[30px] left-[-50px] z-50">
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
          <button
            onClick={handleToggleSearch}
            className="mr-2 mt-1 bg-transparent border-none outline-none transition-all duration-300"
          >
            <FaSearch size={24} color="#829476" />
          </button>
        </div>
      </div>
      {showSearchBar && <SearchBar />}
    </nav>
  );
};

export default Header;
