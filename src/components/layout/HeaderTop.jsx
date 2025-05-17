import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaEllipsisV, FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const HeaderTop = () => {
  const [showMobileTopMenu, setShowMobileTopMenu] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { currentUser, signOut } = useAuth();
  const userDropdownRef = useRef(null);

  const toggleMobileTopMenu = () => {
    setShowMobileTopMenu(!showMobileTopMenu);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (    <div className="bg-black py-2 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side spacer to balance the header */}
          <div className="w-24"></div>

          {/* Mobile Top Menu Toggle */}
          <div className="md:hidden relative">
            <button 
              onClick={toggleMobileTopMenu}
              className="text-white p-1"
              aria-label="Toggle top menu options"
            >
              <FaEllipsisV />
            </button>
            
            {/* Mobile Dropdown */}
            {showMobileTopMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 z-50">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={() => setShowMobileTopMenu(false)}
                >
                  ABOUT CALL2PRAYER
                </Link>
                <Link
                  to="/service-times"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={() => setShowMobileTopMenu(false)}
                >
                  SERVICE TIMES
                </Link>
                <Link
                  to="/store"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={() => setShowMobileTopMenu(false)}
                >
                  STORE
                </Link>                {!currentUser ? (
                  <Link
                    to="/sign-in"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={() => setShowMobileTopMenu(false)}
                  >
                    SIGN IN
                  </Link>
                ) : (
                  <>
                    <div className="px-4 py-2 border-b border-gray-700">
                      <p className="text-sm font-medium text-white">{currentUser.username}</p>
                      <p className="text-xs text-gray-400 truncate">{currentUser.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                      onClick={() => setShowMobileTopMenu(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setShowMobileTopMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                    >
                      Sign Out
                    </button>
                  </>
                )}
                <Link
                  to="/give"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={() => setShowMobileTopMenu(false)}
                >
                  GIVE
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
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
            </Link>            {!currentUser ? (
              <Link
                to="/sign-in"
                className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
              >
                SIGN IN
              </Link>
            ) : (
              <div ref={userDropdownRef} className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors focus:outline-none"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-1 overflow-hidden">
                    {currentUser.profileImage ? (
                      <img src={currentUser.profileImage} alt={currentUser.username} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white text-xs">{currentUser.username.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="hidden sm:block">{currentUser.username}</span>
                </button>
                
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-2 px-4 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{currentUser.username}</p>
                      <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <FaUser className="mr-2 text-gray-500" />
                        My Profile
                      </Link>
                      <Link
                        to="/account-settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <FaCog className="mr-2 text-gray-500" />
                        Account Settings
                      </Link>
                    </div>
                    <div className="py-1 border-t border-gray-100">
                      <button
                        onClick={() => {
                          signOut();
                          setShowUserDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                      >
                        <FaSignOutAlt className="mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
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
