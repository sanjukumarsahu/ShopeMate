import React from "react";

const Spinner = () => {
  return (
    <div className=" relative top-80 h-[100vh]">
      <div className="border-4 w-10 h-10 rounded-full border-sky-700 scale-200 animate-spin border-t-transparent drop-shadow-lg"></div>
    </div>
  );
};

export default Spinner;
