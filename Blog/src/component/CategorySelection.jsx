 

const CategorySelection = ({
  handleCategoryChange,
  selectedCategory,
  activeCategory,
}) => {

    const categories = [
      "Health",
      "Fintech",
      "Startups",
      "AI",
      "Security",
      "Enterprise",
      ,
      "Growth",
      ,
      "Apps",
      ,
      "Work",
      ,
      "Gadgets",
      "Tech",
    ];
  return( 
  <div className='px-4 mt-5 mb-2 lg:gap-8 justify-center flex flex-wrap items-center border-2 py-5 text-gray-900 font-bold'>
    <button onClick={() => handleCategoryChange(null)  } className={ `mr-2 ${selectedCategory === null ? "activeButton" : ""} `}>All</button >
    {categories.map((category) => (
      <button
        key={category}
        className={`mr-2   gap-[rem] ${category === activeCategory ? "activeButton" : ""}`}
        onClick={() => handleCategoryChange(category)}
      >
        {category}
      </button>
    ))}

  </div>);
};

export default CategorySelection
