import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="my-4">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-2">
            <button
              onClick={() => paginate(number)}
              className={`${
                number === currentPage
                  ? "bg-blue-500 hover:bg-blue-700 text-white border-2 border-black"
                  : "bg-transparent hover:bg-blue-500 hover:text-white border-2 border-black"
              } font-bold py-2 px-4 rounded`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
