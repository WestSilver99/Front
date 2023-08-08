import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);
  return (
    <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <div>
          <p className="text-white inline-block ml-2 absolute -mt-5 z-10 text-lg bg-[#96A68B] p-1 rounded-md">
            {post.title}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="relative w-[850px] h-[600px] object-cover mb-2 sm:h-[240px] md:h-[240px]"
          />
          <p className="text-gray-600">{post.time}</p>
        </div>
      </div>
    </div>
  );
};

export default MountainDetail;
