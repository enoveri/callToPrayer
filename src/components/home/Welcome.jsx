import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNodXJjaCUyMHBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Pastor" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white text-xl font-bold">
                  "Faith is taking the first step even when you don't see the whole staircase."
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Our Church</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a vibrant community of believers dedicated to sharing God's love and message 
                of hope with our local community and the world. Our mission is to help people connect 
                with God, grow in their faith, and make a difference in the world.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're just beginning to explore faith or have been a believer for years, 
                you'll find a warm welcome here. We believe everyone matters to God, and everyone 
                matters to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-center hover:bg-blue-700 transition"
                >
                  About Us
                </Link>
                <Link 
                  to="/connect" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-center hover:bg-blue-50 transition"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
