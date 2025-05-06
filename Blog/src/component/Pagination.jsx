import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageID = index + 1;
      return (
        <li
          className={pageID === currentPage ? "activePagination" : ""}
          key={pageID}
        >
          <button
            className={`md:px-4 px-2 py-1 md:py-2 rounded-md shadow-md hover:bg-gray-200 ${
              pageID === currentPage ? " " : ""
            }`}
            onClick={() => handlePageChange(pageID)}
          >
            {pageID}
          </button>
        </li>
      );
    });
  };

  return (
    <ul className="pagination my-8 flex-wrap w-full flex items-center justify-center mx-auto md:gap-6 gap-2 px-2">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className=" md:text-base text-sm  hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
      </li>
      {renderPaginationLinks()}
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="  md:text-base text-sm  hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
