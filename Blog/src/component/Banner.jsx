import React from 'react'
import { FaA, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white  text-center'>
        <h1 className='text-5xl font-bold lg:text-7xl  leading-snug mb-5'>Welcome to our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto '>start your blog today and join a community of writters and readers who are passionate about sharing their stories and ideas. we offer a range of writing services to help you bring your ideas to life</p>
        <div> 
        <Link to="/" className='font-semibold text-orange-500 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
