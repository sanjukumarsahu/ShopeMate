import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-28">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-green-700 text-xl font-semibold">
                Your Cart
              </h2>
              <h3 className="text-3xl font-bold text-green-900">Summary</h3>
              <p className="mt-4 text-gray-600 font-medium">
                Total Items:{" "}
                <span className="font-bold text-gray-800">{cart.length}</span>
              </p>
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-700 font-medium">Total Amount:</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalAmount}
                </p>
              </div>

              <button className="w-full bg-green-700 hover:bg-green-800 transition-colors py-3 rounded-lg text-white font-semibold shadow-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Cart is Empty 🛒
          </h2>
          <Link to={"/"}>
            <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-6 rounded-lg text-white font-medium shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
