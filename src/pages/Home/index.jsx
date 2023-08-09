import Banner from "@components/Banner/carousel";
import MainPosts from "@components/Posts/mainPosts";
import SearchBar from "@utils/search";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <SearchBar />
        <MainPosts />
      </div>
    </div>
  );
};

export default Home;
