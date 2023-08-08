import React, { useState } from "react";
import Post from "@components/Posts/Post";
import Pagination from "@utils/pagination";
import dummyData from "@hooks/postdummy";

const MainPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="my-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-[10px] m-[5px]">
        {currentPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={dummyData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPosts;
