import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-10">
      <div>
        <Link to={`/mountains/${post.id}`}>
          <img
            src={post.image}
            alt={post.mntnnm}
            className="w-[300px] h-[450px]  object-cover mb-2 lg:h-[350px] sm:h-[240px] md:h-[240px]"
          />
        </Link>
        <p className="text-[20px] font-extrabold text-[#5E6C56]">
          {post.mntnnm}
        </p>
        <p className="text-[#8E9E84] text-[15px] font-bold">{post.time}</p>
      </div>
    </div>
  );
};

export default Post;
