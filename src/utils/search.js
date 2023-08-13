import React, { useState } from "react";
import dummyData from "@hooks/postdummy";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredData = dummyData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
    setSearchResult(filteredData);
  };

  return (
    <div className={`relative sm:${props.smHidden || ""}`}>
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`px-4 py-2 border rounded-md w-full`}
      />
      {/* AutoFocus 기능 추가할 것 */}
      <button
        onClick={handleSearch}
        className="absolute right-0 top-1 px-4 py-2 text-black rounded-md bg-transparent"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
