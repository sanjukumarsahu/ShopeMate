import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="w-full border-b border-gray-500 py-4 bg-amber-50 ">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Product Image */}
        <div className="w-full md:w-40 flex justify-center md:justify-start py-6">
          <img
            className="w-40 h-40 object-contain"
            src={item.image}
            alt="product_image"
          />
        </div>

        {/* Text and Actions */}
        <div className="flex flex-col flex-1 pr-20 h-45 ">
          <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
          <p className="text-md text-gray-600 line-clamp-2 my-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-green-600 font-semibold text-xl bg-green-100 rounded py-1 px-2">
              ${item.price}
            </span>
            <button
              onClick={removeFromCart}
              className="bg-red-100 hover:bg-red-200  text-red-600 p-2 rounded-full transition-all"
            >
              <MdOutlineDeleteForever size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
