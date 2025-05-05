import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom'


const BlogCard = ({ blogs, currentPage, selectedCategory, pagesize }) => {
  const filterBlog = blogs.filter(
    (blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pagesize, currentPage * pagesize);
  console.log(filterBlog);

  return (
    <div className="grid md:grid-cols-3 mt-5 sm:grid-cols-2 grid-cols-1 gap-8">
      {filterBlog.map((blog) => (
        <Link key={blog.id} className="p-5 shadow-lg cursor-pointer rounded">
          <div>
            <img src={blog.image} alt=" " className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-sm ">
            <FaUser className="inline-flex items-center mr-2 text-gray-500" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            published on {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard
