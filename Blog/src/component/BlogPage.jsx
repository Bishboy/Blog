import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";


const BlogPage = () => {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const fetchBlogs = async ({ queryKey }) => {
    const [_, page, category] = queryKey;
    let url = `https://blogbackend-l8un.onrender.com/blogs?page=${page}&limit=${pageSize}`;
    

    if (category) {
      url += `&category=${category}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: blogsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs", currentPage, selectedCategory],
    queryFn: fetchBlogs,
    keepPreviousData: true,
  });

  const handlePageChange = (pageID) => {
    setCurrentPage(pageID);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen font-bold flex items-center text-5xl justify-center animate-spin ">
        <AiOutlineLoading3Quarters size={50} className="text-orange-400"/>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <CategorySelection
          handleCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex flex-col  gap-4 lg:flex-row">
        <BlogCard
          blogs={blogsData || []}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        <div>
          <SideBar />
        </div>
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalItems={blogsData?.length || 0}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogPage;
//  let url = `http://localhost:5000/blogs?page=${page}&limit=${pageSize}`;