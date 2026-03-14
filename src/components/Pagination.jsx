import React from "react";
import { usePostContext } from "../context_api/PostContext";

const Pagination = () => {
  const { currentPage, totalPage, setCurrentPage, setEditUpdateData } =
    usePostContext();

  // handlePage next<->pre
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setEditUpdateData({});
  };

  return (
    <>
      <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-indigo-600 text-white 
                         rounded-lg hover:bg-indigo-500 transition"
        >
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg transition
        ${
          currentPage === page
            ? "bg-emerald-600 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className="px-4 py-2 bg-indigo-600 text-white 
                         rounded-lg hover:bg-indigo-500 transition"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
