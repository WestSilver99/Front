import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import SearchBar from "@utils/search";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleSearch = () => {
    setShowSearchBar(!showSearchBar);
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
          <button onClick={handleToggleMenu} className="relative mr-3 mt-1">
            <Link to="/login" className="flex items-center ml-2">
              <BsFillPersonFill size={30} color="green" />
            </Link>
          </button>
          <button
            onClick={handleToggleSearch}
            className="mr-2 mt-1 bg-transparent border-none outline-none transition-all duration-300"
          >
            <FaSearch size={24} color="green" />
          </button>
        </div>
      </div>
      {showSearchBar && <SearchBar />}
    </nav>
  );
};

export default Header;
