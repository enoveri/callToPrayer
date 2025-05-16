import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ServiceTimes = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us For Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invite you to join us for worship and experience the power of God's presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sunday Service */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <FaClock className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sunday Service</h3>
            <p className="text-gray-600 mb-4">Join us every Sunday for worship and teaching</p>
            <ul className="text-gray-700">
              <li className="py-2 border-b border-gray-100">
                9:00 AM - First Service
              </li>
              <li className="py-2 border-b border-gray-100">
                11:00 AM - Second Service
              </li>
              <li className="py-2">
                6:00 PM - Evening Service
              </li>
            </ul>
          </div>

          {/* Wednesday Service */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <FaClock className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wednesday Service</h3>
            <p className="text-gray-600 mb-4">Midweek refreshment for your spiritual journey</p>
            <ul className="text-gray-700">
              <li className="py-2 border-b border-gray-100">
                7:00 PM - Prayer & Bible Study
              </li>
              <li className="py-2">
                Children's ministry available
              </li>
            </ul>
          </div>

          {/* Church Location */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600 mb-4">Conveniently located in the heart of the city</p>
            <address className="text-gray-700 not-italic">
              <p>123 Church Street</p>
              <p>City, State 12345</p>
              <p className="mt-4">Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
