import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className=" bg-slate-900  w-full fixed    ">
        <Navbar />
      </div>

      <div className="bg-gray-300">
        <Outlet />
      </div>
    </>
  );
};

export default App;
