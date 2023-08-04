import React from "react";
import dummyData from "@hooks/postdummy";
import { Link } from "react-router-dom";

const MainPosts = () => {
  return (
    <div className="my-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {dummyData.map((post, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 "
        >
          <Link to={`/mountains/${post.id}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-32 h-32 object-cover mb-4"
            />
          </Link>
          <div className=" text-left">
            <p className="text-xl font-bold">{post.title}</p>
            <p className="text-gray-600">{post.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPosts;
