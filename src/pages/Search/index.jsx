import React from "react";
import dummyData from "@hooks/postdummy";

const Search = ({ searchTerm }) => {
  return <div>{dummyData.map((e) => e.title)}</div>;
};

export default Search;
