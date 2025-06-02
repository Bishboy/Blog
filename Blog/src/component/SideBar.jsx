import React,{useEffect, useState} from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
  
    let url = `https://blogbackend-l8un.onrender.com/blogs`;
    // let url = `${import.meta.env.VITE_BASE_URL}/blogs`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPopularBlogs(data.slice(0,15)))
    },[])

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold px-4">Latest Blogs</h1>
        {popularBlogs.slice(0, 5).map((blog) => (
          <div
            className="my-5 border-2 border-spacing-2 px-4 py-2"
            key={blog.id}
          >
            <h4 className="font-medium mb-2">{blog.title}</h4>
            <Link
              to="/"
              className="font-semibold text-orange-500 inline-flex items-center pb-2"
            >
              Read more <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        ))}
      </div>
      <div className=''>
        <h1 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h1>
        {popularBlogs.slice(6, 10).map((blog) => (
          <div
            className="my-5 border-2 border-spacing-2 px-4 py-2"
            key={blog.id}
          >
            <h4 className="font-medium mb-2">{blog.title}</h4>
            <Link
              to="/"
              className="font-semibold text-orange-500 inline-flex items-center pb-2"
            >
              Read more <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar