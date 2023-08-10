import React from "react";
import dummyData from "@hooks/postdummy";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2>검색 결과</h2>
      <div>{dummyData.map((e) => e.title)}</div>
    </div>
  );
};

export default Search;
