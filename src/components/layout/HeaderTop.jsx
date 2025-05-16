import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="bg-black py-2 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <img
                src="/images/logo.png"
                alt="Call2Prayer Church"
                className="h-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/200x80?text=Call2Prayer";
                }}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
            >
              ABOUT CALL2PRAYER
            </Link>
            <Link
              to="/service-times"
              className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
            >
              SERVICE TIMES
            </Link>
            <Link
              to="/store"
              className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
            >
              STORE
            </Link>
            <Link
              to="/sign-in"
              className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
            >
              SIGN IN
            </Link>
            <Link
              to="/give"
              className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
            >
              GIVE
            </Link>
            <button className="text-white hover:text-blue-300 transition-colors">
              <FaSearch />
            </button>
            <Link
              to="/cart"
              className="relative text-white hover:text-blue-300 transition-colors"
            >
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
