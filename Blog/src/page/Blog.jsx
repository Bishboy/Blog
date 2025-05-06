import React from 'react'
import BlogPage from '../component/BlogPage';

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-40 bg-black text-white text-center">
        <h1 className="text-5xl font-bold lg:text-7xl  leading-snug mb-5">
          Blog page
        </h1>
      </div>

      <div className='max-w-[90%] mx-auto'>
        <BlogPage />
      </div>
    </div>
  );
}

export default Blog
