import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Modified nav to include logo and space items */}
        <nav className="flex items-center justify-between h-16">
          {/* Logo - Adapted for HeaderNav */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col items-start">
              <span
                className={`text-2xl font-extrabold leading-none tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300`}
              >
                <span className="font-light">Call</span>
                <span className="font-bold text-yellow-400">2</span>
                <span className="font-light">Prayer</span>
              </span>
              <span
                className={`text-[9px] uppercase tracking-wider text-blue-300 group-hover:text-yellow-300 transition-colors duration-200`}
              >
                Mbale, Uganda
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex">
            <li className="relative group" 
                onMouseEnter={() => handleMouseEnter('visit')} 
                onMouseLeave={handleMouseLeave}>
              <Link to="/visit" className="block px-6 py-4 font-medium hover:bg-blue-700 transition-colors">
                VISIT
              </Link>
              {activeDropdown === 'visit' && (
                <div className="absolute left-0 w-48 bg-white shadow-lg z-10">
                  <Link to="/visit/plan-your-visit" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Plan Your Visit
                  </Link>
                  <Link to="/visit/locations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Locations
                  </Link>
                  <Link to="/visit/service-times" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
