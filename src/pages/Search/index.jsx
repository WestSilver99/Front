import React from "react";
import dummyData from "@hooks/postdummy";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { searchTerm } = useParams();

  const filteredData = dummyData.filter((item) =>
    item.mntnnm.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
      <h2 className="text-3xl sm:text-2xl font-bold text-center">
        "{searchTerm}"에 대한 검색 결과입니다.
      </h2>
      {filteredData.length > 0 ? (
        <div className="my-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-[10px] m-[5px]">
          {filteredData.map((post) => (
            <div key={post.id}>
              <div className="flex flex-col items-center justify-center p-4 mb-10">
                <div>
                  <Link to={`/mountains/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.mntnnm}
                      className="w-[300px] h-[450px] object-cover mb-2 sm:h-[240px] md:h-[240px]"
                    />
                  </Link>

                  <p className="text-xl font-bold">{post.mntnnm}</p>
                  <p className="text-gray-600">{post.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
