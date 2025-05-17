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
  
  // Add resize listener to handle mobile menu closing on resize
  useEffect(() => {
    const handleResize = () => {
      const mobileMenuElement = document.getElementById('mobile-nav');
      if (window.innerWidth >= 768 && mobileMenuElement && mobileMenuElement.classList.contains('translate-x-0')) {
        // Close mobile menu if screen expands to desktop size
        mobileMenuElement.classList.remove('translate-x-0');
        mobileMenuElement.classList.add('translate-x-full');
        document.body.style.overflow = 'unset'; // Re-enable scrolling
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        !isTransparentHeader || isScrolled
          ? `bg-white shadow-md`
          : "bg-transparent"
      }`}
    >
      <div className="relative">
        <HeaderTop />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
