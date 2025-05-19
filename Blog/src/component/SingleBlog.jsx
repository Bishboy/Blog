import { dataTagSymbol } from '@tanstack/react-query';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaClock, FaUser} from "react-icons/fa6";
import SideBar from './SideBar';
// import {  } from "react-icons/f6";
const SingleBlog = () => {
    const data = useLoaderData()
    console.log(data);
    const {title, image,category,author,published_date,reading_time,content} = data[0]
    
  return (
    <div>
      <div className="px-4 py-40 bg-black text-white text-center">
        <h1 className="text-5xl font-bold lg:text-7xl  leading-snug mb-5">
          Single Blog PAge
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12  ">
        <div className="lg:w-3/5 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-5">
            {title}
          </h2>
          <p className="inline-flex items-center gap-2 text-sm text-gray-600">
            {" "}
            <FaUser /> {author} | {published_date}{" "}
          </p>
          <p className="  items-center gap-2 text-sm text-gray-600">
            {" "}
            <FaClock className="inline-flex items-center gap-4" />{" "}
            {reading_time}
          </p>
          <p className="text-sm text-gray-500 mb-5 mt-5">{content}</p>
          <div className="text-sm text-gray-500 mb-5 mt-5">
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam architecto veniam accusamus itaque sit, iste suscipit illo repellat voluptatum. Rerum cumque maiores officiis nostrum accusantium ipsa tenetur quas iste odit!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam sint officiis quasi, deleniti quos ea provident rerum aut laudantium, autem beatae ex saepe quisquam pariatur placeat itaque modi incidunt.
              </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et esse tenetur quaerat porro quos explicabo delectus maxime, laudantium corporis sint ab iste unde soluta facere architecto magni repellat odio?</p>
          </div>
        </div>
        <div className='lg:w-1/2 mx-auto'>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog