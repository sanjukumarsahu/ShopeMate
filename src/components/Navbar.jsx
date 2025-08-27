import React from "react";
import logo from "../../public/vites.svg";
import { FaShoppingCart, FaSun } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center  max-w-6xl h-20  text-white mx-auto   ">
        <div className="flex gap-30 items-center">
          <NavLink to="/" className="flex justify-center items-center gap-2">
          <FaSun className="text-2xl text-blue-500 "/>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">ShopMate</p>
          </NavLink>
          <NavLink to="/" className="text-xl">
            Home
          </NavLink>
        </div>
        <div className="flex items-center  font-medium text-slate-100 mr-5 gap-10 ">
          <NavLink to="/cart">
            {" "}
            {cart.length == 0 ? null : (
              <div className="bg-green-600 animate-bounce w-5 h-5 flex justify-center items-center  rounded-full relative  z-10 scale-90 ">
                {cart.length}
              </div>
            )}
            <div className="scale-150">
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
