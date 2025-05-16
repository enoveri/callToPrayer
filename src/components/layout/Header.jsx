import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPray,
} from "react-icons/fa";
import NavigationContext, {
  useNavigation,
} from "../../context/NavigationContext";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const {
    isTransparentHeader,
    setIsTransparentHeader,
    currentPage,
    getCurrentTheme,
  } = useNavigation();
  const theme = getCurrentTheme();

  // Determine if we're on the homepage or another page
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      // We're on homepage, transparent header initially
      setIsTransparentHeader(true);
    } else {
      // Non-homepage - always solid background
      setIsTransparentHeader(false);
    }
  }, [location.pathname, setIsTransparentHeader]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Helper function to get text color based on scroll and transparency
  const getTextColor = () => {
    if (!isTransparentHeader || isScrolled) {
      return "text-gray-800";
    }
    return "text-white";
  };

  // Get dynamic accent color based on current page
  const getAccentColor = (isActive) => {
    return isActive ? `text-${theme.primaryColor}` : getTextColor();
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        !isTransparentHeader || isScrolled
          ? `bg-white shadow-md`
          : "bg-transparent"
      }`}
    >
      <HeaderTop />
      <HeaderNav />
      <div className="container mx-auto px-4 hidden">
        <div className="flex items-center justify-between">
          {/* Logo - Lakewood style */}
          <Link to="/" className="flex items-center">
            <FaPray className={`text-3xl mr-3 text-${theme.primaryColor}`} />
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold text-${theme.primaryColor} leading-tight`}
              >
                Call2Prayer
              </span>
              <span
                className={`text-xs uppercase tracking-wider text-${theme.accentColor} font-semibold`}
              >
                Mbale, Uganda
              </span>
            </div>
          </Link>
          {/* Desktop Navigation - Lakewood style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold uppercase tracking-wide text-sm py-2 px-1 ${getAccentColor(
                  isActive
                )} hover:text-${theme.accentColor} transition-all
                ${
                  isActive
                    ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                    : ""
                }`
              }
            >
              Home
            </NavLink>

            {/* About dropdown - Lakewood style */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveSubmenu("about")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-semibold uppercase tracking-wide text-sm flex items-center py-2 px-1 ${getAccentColor(
                    isActive
                  )} hover:text-${theme.accentColor} transition-all
                  ${
                    isActive
                      ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                      : ""
                  }`
                }
              >
                About <FaChevronDown className="ml-1 text-xs" />
              </NavLink>
              <div
                className={`absolute -left-2 transform mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden transition-all duration-300 ${
                  activeSubmenu === "about"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 pointer-events-none"
                }`}
              >
                <div className="py-2 px-3 bg-blue-800 text-white text-xs font-semibold uppercase tracking-wider">
                  About Us
                </div>
                <Link
                  to="/about/our-church"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-blue-800 border-b border-gray-100 text-sm"
                >
                  Our Church
                </Link>
                <Link
                  to="/about/our-pastor"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-blue-800 border-b border-gray-100 text-sm"
                >
                  Our Pastor
                </Link>
                <Link
                  to="/about/beliefs"
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-blue-800 text-sm"
                >
                  What We Believe
                </Link>
              </div>
            </div>

            <NavLink
              to="/watch"
              className={({ isActive }) =>
                `font-semibold uppercase tracking-wide text-sm relative py-2 px-1 ${getAccentColor(
                  isActive
                )} hover:text-${theme.accentColor} transition-all
                ${
                  isActive
                    ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                    : ""
                }`
              }
            >
              Watch
            </NavLink>

            <NavLink
              to="/give"
              className={({ isActive }) =>
                `font-semibold uppercase tracking-wide text-sm relative py-2 px-1 ${getAccentColor(
                  isActive
                )} hover:text-${theme.accentColor} transition-all
                ${
                  isActive
                    ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                    : ""
                }`
              }
            >
              Give
            </NavLink>

            <NavLink
              to="/connect"
              className={({ isActive }) =>
                `font-semibold uppercase tracking-wide text-sm relative py-2 px-1 ${getAccentColor(
                  isActive
                )} hover:text-${theme.accentColor} transition-all
                ${
                  isActive
                    ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                    : ""
                }`
              }
            >
              Connect
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `font-semibold uppercase tracking-wide text-sm relative py-2 px-1 ${getAccentColor(
                  isActive
                )} hover:text-${theme.accentColor} transition-all
                ${
                  isActive
                    ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-${theme.accentColor}`
                    : ""
                }`
              }
            >
              Events
            </NavLink>

            {/* Search button - Lakewood style */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`focus:outline-none p-2 rounded-full hover:bg-gray-100 ${getTextColor()} border border-gray-200`}
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="px-4 py-3 w-full focus:outline-none text-gray-700"
                    />
                    <button
                      className={`bg-yellow-500 text-blue-800 px-4 font-semibold`}
                    >
                      <FaSearch />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Call to action button - Lakewood style */}
            <Link
              to="/give"
              className="ml-6 bg-yellow-500 text-blue-900 px-5 py-2 rounded-md text-sm font-semibold hover:bg-yellow-400 transition-all uppercase tracking-wide"
            >
              Donate Now
            </Link>
          </nav>{" "}
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${getTextColor()} hover:bg-${
                isTransparentHeader && !isScrolled ? "white/10" : "gray-100"
              } rounded-md`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide down with animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-4 pb-4 flex flex-col space-y-2 rounded-lg shadow-lg ${
              isTransparentHeader && !isScrolled
                ? "bg-gray-900/90 backdrop-blur-md"
                : "bg-white"
            } p-4`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium py-3 px-3 rounded-md ${
                  isTransparentHeader && !isScrolled
                    ? isActive
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : isActive
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            {/* About with dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === "about-mobile" ? null : "about-mobile"
                  )
                }
                className={`w-full text-left font-medium py-3 px-3 rounded-md flex justify-between items-center ${
                  isTransparentHeader && !isScrolled
                    ? location.pathname.includes("/about")
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : location.pathname.includes("/about")
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`}
              >
                <span>About</span>
                <FaChevronDown
                  className={`transition-transform ${
                    activeSubmenu === "about-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 pl-4 ${
                  activeSubmenu === "about-mobile" ? "max-h-48 mt-1" : "max-h-0"
                }`}
              >
                <Link
                  to="/about/our-church"
                  className={`block py-2 px-3 rounded-md ${
                    isTransparentHeader && !isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Church
                </Link>
                <Link
                  to="/about/our-pastor"
                  className={`block py-2 px-3 rounded-md ${
                    isTransparentHeader && !isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Pastor
                </Link>
                <Link
                  to="/about/beliefs"
                  className={`block py-2 px-3 rounded-md ${
                    isTransparentHeader && !isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What We Believe
                </Link>
              </div>
            </div>

            <NavLink
              to="/watch"
              className={({ isActive }) =>
                `font-medium py-3 px-3 rounded-md ${
                  isTransparentHeader && !isScrolled
                    ? isActive
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : isActive
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Watch
            </NavLink>

            <NavLink
              to="/give"
              className={({ isActive }) =>
                `font-medium py-3 px-3 rounded-md ${
                  isTransparentHeader && !isScrolled
                    ? isActive
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : isActive
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Give
            </NavLink>

            <NavLink
              to="/connect"
              className={({ isActive }) =>
                `font-medium py-3 px-3 rounded-md ${
                  isTransparentHeader && !isScrolled
                    ? isActive
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : isActive
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Connect
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `font-medium py-3 px-3 rounded-md ${
                  isTransparentHeader && !isScrolled
                    ? isActive
                      ? `text-${theme.accentColor} bg-white/10`
                      : "text-white hover:bg-white/10"
                    : isActive
                    ? `text-${theme.primaryColor} bg-${theme.primaryColor}/10`
                    : "text-gray-800 hover:bg-gray-100"
                } transition-all`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </NavLink>

            {/* Search Bar */}
            <div
              className={`flex border rounded-md overflow-hidden mt-2 ${
                isTransparentHeader && !isScrolled
                  ? "border-white/20 bg-white/10"
                  : "border-gray-300"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-3 w-full focus:outline-none ${
                  isTransparentHeader && !isScrolled
                    ? "bg-transparent text-white placeholder-white/70"
                    : "text-gray-800"
                }`}
              />
              <button className={`bg-${theme.primaryColor} text-white px-4`}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
