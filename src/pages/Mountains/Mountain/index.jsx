import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);
  return (
    <div>
      <img
        src={post.image}
        alt={post.title}
        className="w-32 h-32 object-cover mb-4"
      />
      <div className="text-left">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-600">{post.time}</p>
      </div>
    </div>
  );
};

export default MountainDetail;
