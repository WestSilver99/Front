import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";
import MountainImages from "@components/Mountains/mountainsImage";
import CourseImages from "@components/Mountains/courseImage";
import TrafficMountains from "@components/Mountains/traffic";
import CourseDetails from "@components/Mountains/courseDetail";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);

  return (
    <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <div>
          <MountainImages title={post.title} image={post.image} />
          <CourseImages courseImage={post.courseImage} />
          <TrafficMountains location={post.location} traffic={post.traffic} />
          <CourseDetails course={post.course} />
        </div>
      </div>
    </div>
  );
};

export default MountainDetail;
