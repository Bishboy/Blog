import React, { useEffect, useState}from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogPage = () => {
   const pagesize = 12;
   const [blogs, setBlogs] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [activeCategory, setActiveCategory] = useState(null);
   let Url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize}`;
    
  useEffect(()=> {
    const fetchBlogs = async () => {
      if(selectedCategory){
        Url +=`&category=${selectedCategory}`
      }
        const response = await fetch(Url);
        const data = await response.json();
        setBlogs(data);
    }
    fetchBlogs();
  },[currentPage, pagesize, selectedCategory])

  const handlePageChange = (pageID) => {
    setCurrentPage(pageID)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)
  }

  return (
    <div>
        <div>
            Page Category
        </div>
        <div>
            <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize} />
        </div>
        <div>
          <Pagination currentPage={currentPage}  blogs={blogs} pagesize={pagesize} handlePageChange={handlePageChange}/>
        </div>
    </div>
  )
}

export default BlogPage 