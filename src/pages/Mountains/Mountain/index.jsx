import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);
  return (
    <div className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <img
        src={post.image}
        alt={post.title}
        className="w-[300px] h-[450px] object-cover mb-2"
      />
      <div className="text-left">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-600">{post.time}</p>
      </div>
    </div>
  );
};

export default MountainDetail;
