import React from "react";

const Pagination = ({ currentPage, blogs, pagesize, handlePageChange }) => {
  const totalPage = Math.ceil(blogs.length / pagesize);
  console.log(totalPage);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, index) => {
      const pageID = index + 1; // pages typically start at 1, not 0
      return (
        <li
          className={pageID === currentPage ? "activePagination" : ""}
          key={pageID}
        >
          <a
            className="px-4 py-2 rounded-md shadow-md"
            href="#"
            onClick={() => handlePageChange(pageID)}
          >
            {pageID}
          </a>
        </li>
      );
    });
  };

  return (
    <ul className="pagination my-8 flex-wrap w-full flex items-center justify-center mx-auto gap-6 px-2">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      </li>
      {renderPaginationLinks()}
      <li>
        <button
          disabled={currentPage === totalPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
