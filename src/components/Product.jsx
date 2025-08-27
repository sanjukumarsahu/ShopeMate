import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/CartSlice";
import { toast } from "react-toastify";

const Product = ({ post }) => {
  const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div className="  shadow-lg shadow-gray-500 p-5 bg-amber-50 rounded-2xl cursor-pointer ">
      <div>
        <p className="font-bold text-[1.2rem]  pb-2 text-gray-800 line-clamp-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="text-[0.95rem] line-clamp-3 mb-4 text-gray-800  ">
          {post.description}
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={`${post.image}`}
          alt=""
          className="w-40 h-45 object-contain"
        />
      </div>
      <div className=" flex justify-between mt-5">
        <p className="text-green-600 font-extrabold">${post.price}</p>
        <div className="border   rounded-full ">
          {cart.some((p) => p.id == post.id) ? (
            <button
              onClick={removeFromCart}
              className="bg-red-300 px-2 py-1 rounded-full"
            >
              {" "}
              Remove Item
            </button>
          ) : (
            <button
              className="bg-green-300 px-2 py-1 rounded-full  "
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
