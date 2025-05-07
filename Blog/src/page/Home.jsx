import React from 'react'
import Banner from '../component/Banner'
import BlogPage from '../component/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1500px] w-[90%] mx-auto ">
        <BlogPage />
      </div>
    </div>
  );
}

export default Home