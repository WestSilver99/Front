import { useParams } from "react-router";
import dummyData from "@hooks/postdummy";
import MountainImages from "@components/Mountains/mountainsImage";
import CourseImages from "@components/Mountains/courseImage";
import TrafficMountains from "@components/Mountains/traffic";
import CourseDetails from "@components/Mountains/courseDetail";
import WritePostWithDate from "@pages/Comment";

const MountainDetail = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id === id);

  return (
    <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <div>
          <MountainImages mntnnm={post.mntnnm} image={post.image} />
          <CourseImages courseImage={post.courseImage} />
          <TrafficMountains
            mntninfopoflc={post.mntninfopoflc}
            pbtrninfodscrt={post.pbtrninfodscrt}
          />
          <CourseDetails course={post.course} />
          <WritePostWithDate postId={id} />
        </div>
      </div>
    </div>
  );
};

export default MountainDetail;
