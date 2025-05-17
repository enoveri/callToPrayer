import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapMarkerAlt, FaClock, FaChild, FaAccessibleIcon, FaParking, FaDirections } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const VisitPage = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 md:py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506018258235-1b7964714c3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Plan Your Visit</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            We can't wait to meet you and help you connect with God and our community.
          </p>
          <a 
            href="#what-to-expect" 
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            What to Expect
          </a>
        </div>
      </section>

      {/* Service Times Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="service-times">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Service Times</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for worship, prayer, and a powerful message from God's Word.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Sunday Services</h3>
              <div className="mb-4 flex items-center justify-center text-gray-700">
                <FaClock className="mr-2 text-blue-600" /> 9:00 AM & 11:00 AM
              </div>
              <p className="text-gray-600">
                Experience powerful worship and a relevant message for all ages. Children's ministry available for both services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Midweek Service</h3>
              <div className="mb-4 flex items-center justify-center text-gray-700">
                <FaClock className="mr-2 text-blue-600" /> Wednesday 7:00 PM
              </div>
              <p className="text-gray-600">
                A time of midweek refreshing with worship, prayer, and Bible teaching to strengthen your faith.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Prayer Meetings</h3>
              <div className="mb-4 flex items-center justify-center text-gray-700">
                <FaClock className="mr-2 text-blue-600" /> Tuesday & Friday 6:30 PM
              </div>
              <p className="text-gray-600">
                Join us in seeking God's presence and praying for our church, community, and world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50" id="what-to-expect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              New to Call2Prayer? Here's what you can expect when you visit us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaChild className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Children's Ministry</h3>
                    <p className="text-gray-600">
                      Your children will love our safe, fun, and engaging children's programs where they'll learn about God's love.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaAccessibleIcon className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Accessibility</h3>
                    <p className="text-gray-600">
                      Our facilities are wheelchair accessible, and we offer assistive listening devices for those who need them.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaParking className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Parking</h3>
                    <p className="text-gray-600">
                      Plenty of free parking is available in our lot, with designated spaces for visitors and those with disabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1557599158-bd0ced1d3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Church worship service" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in the heart of Mbale City.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" /> Address
                </h3>
                <p className="text-gray-600 mb-4">Call2Prayer Church</p>
                <p className="text-gray-600 mb-4">Mbale City, 900m from Mbale S.S</p>
                <p className="text-gray-600 mb-4">Kakungulu Drive, Half London Area</p>
                <p className="text-gray-600 mb-4">Uganda</p>
                
                <div className="mt-8">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaDirections className="mr-2" /> Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for an actual Google Map */}
              <img 
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/33.9462,1.0203,13,0/600x400?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2thbGNiYzNpMGJmYjJ6cGRvYXB3Z2EzaiJ9.example" 
                alt="Map of Church Location" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/e2e8f0/1e3a8a?text=Church+Location+Map";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We're Saving a Seat for You
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We would love for you to join us this weekend. If you have any questions, feel free to contact us.
          </p>          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Contact Us
            </Link>
            <Link 
              to="/service-times" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition"
            >
              View Service Times
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitPage;
