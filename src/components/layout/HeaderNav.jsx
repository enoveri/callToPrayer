import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const HeaderNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  // Handle click outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
    };

    if (mobileNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileNavOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileNavOpen]);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    setMobileActiveDropdown(null);
  };
  return (
    <div className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Modified nav to include logo and space items */}
        <nav className="flex items-center justify-between h-16">          {/* Logo - Modified to span both headers */}
          <Link to="/" className="flex items-center group z-20 relative">
            <div className="flex flex-col items-start absolute -top-7">
              <span
                className={`text-3xl font-extrabold leading-none tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300`}
              >
                <span className="font-light">Call</span>
                <span className="font-bold text-yellow-400">2</span>
                <span className="font-light">Prayer</span>
              </span>
              <span
                className={`text-xs uppercase tracking-wider text-blue-300 group-hover:text-yellow-300 transition-colors duration-200`}
              >
                Mbale, Uganda
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-20 text-white focus:outline-none" 
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
          >
            {mobileNavOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex">
            <li className="relative group" 
                onMouseEnter={() => handleMouseEnter('visit')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/visit" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                VISIT
              </Link>
              {activeDropdown === 'visit' && (                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">                  <Link to="/visit/plan-your-visit" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Plan Your Visit
                  </Link>
                  <Link to="/visit/locations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Locations
                  </Link>
                  <Link to="/service-times" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Service Times
                  </Link>
                </div>
              )}
            </li>
            <li className="relative group"
                onMouseEnter={() => handleMouseEnter('watch')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/watch" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                WATCH
              </Link>
              {activeDropdown === 'watch' && (
                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">
                  <Link to="/watch/live" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Watch Live
                  </Link>
                  <Link to="/watch/messages" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Messages
                  </Link>
                </div>
              )}
            </li>
            <li className="relative group"
                onMouseEnter={() => handleMouseEnter('connect')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/connect" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                CONNECT
              </Link>
              {activeDropdown === 'connect' && (
                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">
                  <Link to="/connect/groups" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Groups
                  </Link>
                  <Link to="/connect/volunteer" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Volunteer
                  </Link>
                  <Link to="/connect/prayer" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Prayer
                  </Link>
                </div>
              )}
            </li>
            <li className="relative group"
                onMouseEnter={() => handleMouseEnter('grow')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/grow" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                GROW
              </Link>
              {activeDropdown === 'grow' && (
                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">
                  <Link to="/grow/bible-study" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Bible Study
                  </Link>
                  <Link to="/grow/discipleship" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Discipleship
                  </Link>
                </div>
              )}
            </li>
            <li className="relative group"
                onMouseEnter={() => handleMouseEnter('care')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/care" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                CARE
              </Link>
              {activeDropdown === 'care' && (
                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">
                  <Link to="/care/counseling" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Counseling
                  </Link>
                  <Link to="/care/support" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Support Groups
                  </Link>
                </div>
              )}
            </li>          </ul>

          {/* Mobile Navigation Menu */}
          <div 
            ref={mobileMenuRef}
            className={`fixed inset-0 bg-blue-900 z-10 md:hidden transition-transform duration-300 ease-in-out transform ${
              mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
            } pt-20 pb-6 px-4 overflow-y-auto`}
          >
            <nav className="flex flex-col h-full">
              <ul className="space-y-1">
                <li>
                  <div 
                    className="flex justify-between items-center px-4 py-3 hover:bg-blue-800 rounded-lg"
                    onClick={() => toggleMobileDropdown('visit')}
                  >
                    <Link to="/visit" className="font-medium text-white flex-grow">
                      VISIT
                    </Link>
                    <FaChevronDown 
                      className={`text-white transition-transform duration-200 ${mobileActiveDropdown === 'visit' ? 'transform rotate-180' : ''}`} 
                    />
                  </div>                  {mobileActiveDropdown === 'visit' && (
                    <div className="pl-4 py-2 bg-blue-800/50 rounded-lg mt-1">                      <Link to="/visit/plan-your-visit" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Plan Your Visit
                      </Link>
                      <Link to="/visit/locations" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Locations
                      </Link>
                      <Link to="/service-times" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Service Times
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <div 
                    className="flex justify-between items-center px-4 py-3 hover:bg-blue-800 rounded-lg"
                    onClick={() => toggleMobileDropdown('watch')}
                  >
                    <Link to="/watch" className="font-medium text-white flex-grow">
                      WATCH
                    </Link>
                    <FaChevronDown 
                      className={`text-white transition-transform duration-200 ${mobileActiveDropdown === 'watch' ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  {mobileActiveDropdown === 'watch' && (
                    <div className="pl-4 py-2 bg-blue-800/50 rounded-lg mt-1">
                      <Link to="/watch/live" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Watch Live
                      </Link>
                      <Link to="/watch/messages" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Messages
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <div 
                    className="flex justify-between items-center px-4 py-3 hover:bg-blue-800 rounded-lg"
                    onClick={() => toggleMobileDropdown('connect')}
                  >
                    <Link to="/connect" className="font-medium text-white flex-grow">
                      CONNECT
                    </Link>
                    <FaChevronDown 
                      className={`text-white transition-transform duration-200 ${mobileActiveDropdown === 'connect' ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  {mobileActiveDropdown === 'connect' && (
                    <div className="pl-4 py-2 bg-blue-800/50 rounded-lg mt-1">
                      <Link to="/connect/groups" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Groups
                      </Link>
                      <Link to="/connect/volunteer" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Volunteer
                      </Link>
                      <Link to="/connect/prayer" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Prayer
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <div 
                    className="flex justify-between items-center px-4 py-3 hover:bg-blue-800 rounded-lg"
                    onClick={() => toggleMobileDropdown('grow')}
                  >
                    <Link to="/grow" className="font-medium text-white flex-grow">
                      GROW
                    </Link>
                    <FaChevronDown 
                      className={`text-white transition-transform duration-200 ${mobileActiveDropdown === 'grow' ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  {mobileActiveDropdown === 'grow' && (
                    <div className="pl-4 py-2 bg-blue-800/50 rounded-lg mt-1">
                      <Link to="/grow/bible-study" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Bible Study
                      </Link>
                      <Link to="/grow/discipleship" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Discipleship
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <div 
                    className="flex justify-between items-center px-4 py-3 hover:bg-blue-800 rounded-lg"
                    onClick={() => toggleMobileDropdown('care')}
                  >
                    <Link to="/care" className="font-medium text-white flex-grow">
                      CARE
                    </Link>
                    <FaChevronDown 
                      className={`text-white transition-transform duration-200 ${mobileActiveDropdown === 'care' ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  {mobileActiveDropdown === 'care' && (
                    <div className="pl-4 py-2 bg-blue-800/50 rounded-lg mt-1">
                      <Link to="/care/counseling" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Counseling
                      </Link>
                      <Link to="/care/support" className="block px-4 py-2 text-blue-100 hover:text-white">
                        <FaChevronRight className="inline mr-2 text-xs" /> Support Groups
                      </Link>
                    </div>
                  )}
                </li>
                <li className="mt-6">
                  <Link 
                    to="/give" 
                    className="block w-full text-center bg-yellow-500 text-blue-900 font-bold px-4 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    GIVE NOW
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
