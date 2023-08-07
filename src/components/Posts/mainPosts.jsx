import React from "react";
import dummyData from "@hooks/postdummy";
import { Link } from "react-router-dom";

const MainPosts = () => {
  return (
    <div className="my-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {dummyData.map((post, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 mb-10 "
        >
          <div>
            <Link to={`/mountains/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-48 h-full object-cover mb-2"
              />
            </Link>
            <p className="text-xl font-bold ">{post.title}</p>
            <p className="text-gray-600">{post.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPosts;
