import React from 'react'

const SearchBar = ({setSearchQuery,query}) => {
  const handleSearch =(e)=>{
setSearchQuery(e.target.value.toLowerCase())
  }
  return (
   <div className=" w-full max-w-md mx-auto  ">
      <div className="flex items-center border-2   border-gray-400 rounded shadow-lg px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 bg-amber-50">
        {/* <FiSearch className="text-gray-500 mr-3 text-xl" /> */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search your cart..."
          className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}

export default SearchBar