import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  // Filter blogs by category if selectedCategory is provided
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  // Calculate pagination slice
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

  return (
    <div className="grid md:grid-cols-3  mt-5 sm:grid-cols-2 grid-cols-1 gap-8">
      {paginatedBlogs.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          key={blog.id}
          className="p-5 shadow-lg  lg:max-h-[27rem] cursor-pointer rounded"
        >
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 min-h-[5rem] cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-sm ">
            <FaUser className="inline-flex items-center mr-2 text-gray-500" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published on {blog.published_date} • {blog.reading_time}
          </p>
          {/* <div className="mt-2 flex flex-wrap gap-2">
            {blog.tags?.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div> */}
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
