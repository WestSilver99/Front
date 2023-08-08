import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-10">
      <div>
        <Link to={`/mountains/${post.id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-[300px] h-[450px] object-cover mb-2 sm:h-[240px] md:h-[240px]"
          />
        </Link>
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-600">{post.time}</p>
      </div>
    </div>
  );
};

export default Post;
