import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPray,
  FaChevronRight,
} from "react-icons/fa";

const ServiceTimes = () => {
  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Join Us For Service
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invite you to join us for worship and experience the power of
            God's presence in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sunday Service - Lakewood style card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift reveal overflow-hidden border border-gray-100">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
              <FaClock className="text-blue-800 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-800">
              Sunday Service
            </h3>
            <p className="text-gray-600 mb-6">
              Join us every Sunday for worship and teaching
            </p>
            <ul className="text-gray-700 mb-6">
              <li className="py-3 border-b border-gray-100 font-medium">
                9:00 AM - First Service
              </li>
              <li className="py-3 border-b border-gray-100 font-medium">
                11:00 AM - Second Service
              </li>
              <li className="py-3 font-medium">Children's Church available</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-blue-800 font-semibold hover:text-yellow-500 transition-colors"
            >
              Learn More <FaChevronRight className="ml-2" />
            </a>
          </div>

          {/* Prayer Meetings - Lakewood style card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift reveal overflow-hidden border border-gray-100">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full pulse">
              <FaPray className="text-blue-800 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-800">
              Prayer Meetings
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for powerful prayer and intercession
            </p>
            <ul className="text-gray-700 mb-6">
              <li className="py-3 border-b border-gray-100 font-medium">
                Tuesday 6:30 PM - Prayer Meeting
              </li>
              <li className="py-3 border-b border-gray-100 font-medium">
                Wednesday 7:00 PM - Midweek Service
              </li>
              <li className="py-3 font-medium">
                Friday 6:30 PM - Prayer Meeting
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-blue-800 font-semibold hover:text-yellow-500 transition-colors"
            >
              Learn More <FaChevronRight className="ml-2" />
            </a>
          </div>

          {/* Church Location - Lakewood style card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift reveal overflow-hidden border border-gray-100">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
              <FaMapMarkerAlt className="text-blue-800 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-800">Location</h3>
            <p className="text-gray-600 mb-6">Located in Mbale City, Uganda</p>
            <address className="text-gray-700 not-italic mb-6">
              <p className="font-medium">Mbale-City 900m From Mbale S.S</p>
              <p className="font-medium">Kakungulu Drive, Half London Area</p>
              <p className="mt-4 font-medium">Uganda</p>
            </address>
            <a
              href="#"
              className="inline-flex items-center text-blue-800 font-semibold hover:text-yellow-500 transition-colors"
            >
              Get Directions <FaChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
