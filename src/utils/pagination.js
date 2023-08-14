import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="my-4 text-[#96A68B] text-[16px]">
      <ul className="flex justify-center">
        <li className="mx-2 sm:mx-1">
          <button
            onClick={() => paginate(1)}
            className="mt-1 bg-transparent hover:text-black font-bold py-2 rounded"
          >
            <FaAngleDoubleLeft size={18} />
          </button>
        </li>
        {currentPage > 1 && (
          <li className="mx-2 sm:mx-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="mt-1 bg-transparent  hover:text-black font-bold py-2 rounded"
            >
              <FaAngleLeft size={18} />
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="mx-2 sm:mx-1">
            <button
              onClick={() => paginate(number)}
              className={`${
                number === currentPage
                  ? "  text-black"
                  : "bg-transparent  hover:text-black"
              } font-bold py-2 px-4 rounded`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li className="mx-2 sm:mx-1">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="mt-1 bg-transparent hover:text-black font-bold py-2 rounded"
            >
              <FaAngleRight size={18} />
            </button>
          </li>
        )}
        <li className="mx-2 sm:mx-1">
          <button
            onClick={() => paginate(pageNumbers.length)}
            className="mt-1 bg-transparent hover:text-black font-bold py-2 rounded"
          >
            <FaAngleDoubleRight size={18} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
