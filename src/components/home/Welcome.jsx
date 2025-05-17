import React, { useEffect } from "react"; // Added useEffect
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { initScrollReveal } from "../../utils/scrollReveal"; // Corrected import

const Welcome = () => {
  useEffect(() => {
    // Initialize ScrollReveal and get the cleanup function
    const cleanup = initScrollReveal();

    // Return the cleanup function to be called on component unmount
    return cleanup;
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="py-24" style={{ marginBottom: "20px" }}>
      <div className="container mx-auto px-4">
        {/* Section heading in Lakewood style */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Welcome to Call2Prayer
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column with reveal animation - Lakewood style */}
          <div className="order-2 lg:order-1 reveal">
            <div className="relative">
              <img
                src="https://gidudu.org/wp-content/uploads/2023/09/IMG_2094-scaled-e1706826097884.jpg"
                alt="Call2Prayer Church"
                className="w-full rounded-lg shadow-xl hover-lift object-cover"
                style={{ height: "450px" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-800 p-6 rounded-lg shadow-lg hidden md:block transform transition-transform hover:scale-105">
                <p className="text-white text-xl font-bold">
                  "Making Disciples, Equipping them for the work of the
                  ministry."
                </p>
              </div>
            </div>
          </div>

          {/* Content Column with staggered reveal animations - Lakewood style */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 reveal">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed reveal text-lg">
                We are a church after God's heart committed to Evangelism,
                Loving People and Changing Lives. Located in Mbale, Uganda, we
                strive to create a community where everyone can experience God's
                love and grow in their faith journey.
              </p>
              <h3 className="text-2xl font-bold mb-6 text-blue-800 reveal">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed reveal text-lg">
                Our mission is to make disciples and equip them for the work of
                the ministry. Whether you're exploring faith for the first time
                or have been walking with God for years, you'll find a warm
                welcome in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 reveal">
                <Link
                  to="/about"
                  className="bg-blue-800 text-white px-6 py-4 rounded-md text-center hover:bg-blue-900 transition-all hover:scale-105 transform flex items-center justify-center sm:justify-start"
                >
                  About Us <FaArrowRight className="ml-2" />
                </Link>                <Link
                  to="/service-times"
                  className="bg-yellow-500 text-blue-900 px-6 py-4 rounded-md text-center hover:bg-yellow-400 transition-all hover:scale-105 transform flex items-center justify-center sm:justify-start"
                >
                  Service Times <FaArrowRight className="ml-2" />
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
