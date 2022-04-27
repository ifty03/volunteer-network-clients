import React from "react";

const SearchFeild = () => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="md:text-4xl text-2xl font-semibold my-5">
        I grow by helping people in need.
      </h2>
      <div className="w-fit mx-auto">
        <input placeholder="search" className="h-10 md:w-80 pl-4" type="text" />
        <button className="py-2 px-4 bg-violet-600 text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchFeild;
