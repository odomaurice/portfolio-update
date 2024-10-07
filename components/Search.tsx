import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full hidden mt-4 h-[50px] font-header bg-white rounded-[50px] sm:flex items-center justify-between px-3 shadow-md">
      <input
        placeholder="search..."
        className="ml-6 w-full text-[14px] bg-transparent text-black focus:outline-none"
      />
      <div className=" w-[50px] cursor-pointer font-bold aspect-square rounded-full flex items-center justify-center bg-blue-gradient text-white">
        <IoIosSearch />
      </div>
    </div>
  );
};

export default Search;
