import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPray,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h4 className="font-bold text-xl mb-4 flex items-center">
              <FaPray className="mr-2 text-purple-400" /> Call2Prayer
            </h4>
            <p className="mb-2">Mbale-City 900m From Mbale S.S</p>
            <p className="mb-2">Kakungulu Drive, Half London Area</p>
            <p className="mb-2">Uganda</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-400 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/watch" className="hover:text-blue-400 transition">
                  Watch Online
                </Link>
              </li>
              <li>
                <Link to="/give" className="hover:text-blue-400 transition">
                  Give
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>          {/* Service Times */}
          <div>
            <h4 className="font-bold text-xl mb-4">Service Times</h4>
            <div className="mb-3">
              <p className="font-semibold">Sunday Service</p>
              <p>9:00 AM & 11:00 AM</p>
            </div>
            <div className="mb-3">
              <p className="font-semibold">Midweek Service</p>
              <p>Wednesday 7:00 PM</p>
            </div>
            <div className="mt-2">
              <Link to="/service-times" className="text-blue-400 hover:text-blue-300">
                View all service times
              </Link>
            </div>
            <div className="mb-3">
              <p className="font-semibold">Prayer Meeting</p>
              <p>Tuesday & Friday 6:30 PM</p>
            </div>
            <Link to="/service-times" className="text-blue-400 hover:text-blue-300 transition mt-2 inline-block">
              View All Service Times
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-4">Newsletter</h4>
            <p className="mb-4">
              Subscribe to our newsletter to receive updates on church events
              and activities.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Call2Prayer Church. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-purple-400 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-purple-400 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
