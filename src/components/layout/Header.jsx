import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../../context/NavigationContext";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const {
    isTransparentHeader,
    setIsTransparentHeader,
  } = useNavigation();

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
    </header>
  );
};

export default Header;
