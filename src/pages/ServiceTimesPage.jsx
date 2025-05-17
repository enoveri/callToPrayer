import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaChurch, 
  FaCalendarAlt, 
  FaPray, 
  FaBible, 
  FaChild, 
  FaDirections,
  FaArrowRight,
  FaHandsHelping,
  FaChevronRight,
  FaPlay
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ServiceTimesPage = () => {
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

  // Service schedule data structure
  const services = [
    {
      id: 1,
      day: "Sunday",
      title: "Sunday Service",
      times: [
        { time: "9:00 AM", name: "First Service", details: "Main Sanctuary" },
        { time: "11:00 AM", name: "Second Service", details: "Main Sanctuary" },
      ],
      description: "Experience powerful worship and a relevant message for all ages. Children's ministry available for both services.",
      icon: <FaChurch />,
      color: "blue",
    },
    {
      id: 2,
      day: "Wednesday",
      title: "Midweek Service",
      times: [
        { time: "7:00 PM", name: "Evening Service", details: "Main Sanctuary" },
      ],
      description: "A time of midweek refreshing with worship, prayer, and Bible teaching to strengthen your faith.",
      icon: <FaBible />,
      color: "green",
    },
    {
      id: 3,
      day: "Tuesday & Friday",
      title: "Prayer Meetings",
      times: [
        { time: "6:30 PM", name: "Prayer Service", details: "Prayer Room" },
      ],
      description: "Join us in seeking God's presence and praying for our church, community, and world.",
      icon: <FaPray />,
      color: "purple",
    }
  ];

  // Special services/events
  const specialServices = [
    {
      id: 1,
      title: "Monthly Communion Service",
      date: "First Sunday of Each Month",
      time: "During Regular Services",
      description: "Join us for our special communion service as we remember Christ's sacrifice together.",
    },
    {
      id: 2,
      title: "Night of Worship",
      date: "Last Friday of Each Month",
      time: "7:00 PM - 9:00 PM",
      description: "An extended evening of praise and worship focused on encountering God's presence.",
    },
    {
      id: 3,
      title: "Healing & Deliverance Service",
      date: "Third Saturday of Each Month",
      time: "4:00 PM - 6:00 PM",
      description: "A special service dedicated to prayer for healing and deliverance.",
    },
  ];

  // Church locations data
  const locations = [
    {
      id: 1,
      name: "Main Campus",
      address: "Mbale-City 900m From Mbale S.S",
      addressLine2: "Kakungulu Drive, Half London Area",
      city: "Mbale",
      country: "Uganda",
      phone: "(+256) 123-456-789",
      mapUrl: "#",
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 md:py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Service Times</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We invite you to join us for worship and experience the power of 
            God's presence in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#weekly-services" 
              className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
            >
              View Service Schedule
            </a>
            <Link
              to="/visit"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly Services Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="weekly-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Weekly Service Schedule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us throughout the week for worship, prayer, and teaching that will help you grow in your faith.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="mb-10 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className={`md:flex md:flex-col md:justify-center md:items-center p-6 md:w-1/4 bg-${service.color}-600 text-white text-center`}>
                    <div className="text-4xl mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.day}</h3>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-4">
                      {service.times.map((timeSlot, index) => (
                        <div key={index} className="flex items-center">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 flex-shrink-0">
                            <FaClock className="text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <span className="block text-lg font-semibold text-blue-900">{timeSlot.time} - {timeSlot.name}</span>
                            <span className="text-gray-500">{timeSlot.details}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/visit" 
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Plan Your First Visit <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Services & Events Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50" id="special-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Special Services & Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to our weekly services, we offer these special gatherings throughout the month.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialServices.map(service => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaCalendarAlt className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-blue-800">{service.title}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="w-20 flex-shrink-0 font-semibold text-gray-700">Date:</span>
                    <span className="text-gray-600">{service.date}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-20 flex-shrink-0 font-semibold text-gray-700">Time:</span>
                    <span className="text-gray-600">{service.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More <FaChevronRight className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/events" 
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View All Events <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="locations">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We look forward to meeting you at one of our service times. Here's where you can find us.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {locations.map(location => (
              <div 
                key={location.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden md:flex hover:shadow-xl transition-shadow duration-300"
              >
                {/* Map placeholder - replace with actual map */}
                <div className="md:w-1/2 h-64 md:h-auto bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FaMapMarkerAlt className="text-5xl text-blue-600 mx-auto mb-3" />
                    <p className="text-gray-700">Interactive map will be displayed here</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-3"
                    >
                      Open in Google Maps <FaDirections className="ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">{location.name}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Address:</h4>
                      <address className="not-italic text-gray-600">
                        {location.address}<br />
                        {location.addressLine2}<br />
                        {location.city}<br />
                        {location.country}
                      </address>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Phone:</h4>
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Service Times:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>Sunday: 9:00 AM & 11:00 AM</li>
                        <li>Wednesday: 7:00 PM</li>
                        <li>Prayer Meetings: Tuesday & Friday 6:30 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Services Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50" id="online-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Join Us Online</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Can't make it in person? Join our services from anywhere in the world through our livestream.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Livestream Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sunday Services</h4>
                    <p className="text-gray-600">9:00 AM & 11:00 AM (Local Time)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Wednesday Service</h4>
                    <p className="text-gray-600">7:00 PM (Local Time)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 mb-4">
                  All livestreams are available on our website, YouTube channel, and Facebook page.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/watch" 
                    className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
                  >
                    Watch Now <FaArrowRight className="ml-2" />
                  </Link>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-red-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 transition duration-300 text-sm"
                  >
                    YouTube <FaArrowRight className="ml-2" />
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
                  >
                    Facebook <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <FaPlay className="text-blue-600 ml-1" />
                    </div>
                  </div>
                  <p className="text-white">Livestream Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-blue-700 text-white" id="next-steps">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We're Saving a Seat for You
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We would love for you to join us at our next service. If you have any questions, our team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/connect" 
              className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition"
            >
              Connect With Us
            </Link>
            <Link 
              to="/visit" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Plan Your Visit
            </Link>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <FaHandsHelping className="text-4xl text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Prayer?</h3>
              <p className="text-white/80">Our prayer team would love to pray for your needs</p>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 font-medium mt-2 inline-block">Request Prayer</a>
            </div>
            
            <div className="text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <FaChild className="text-4xl text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kids & Youth</h3>
              <p className="text-white/80">Learn about our programs for children and teenagers</p>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 font-medium mt-2 inline-block">Children's Ministry</a>
            </div>
            
            <div className="text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <FaPhone className="text-4xl text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-white/80">Have questions? We're here to help</p>
              <Link to="/contact" className="text-yellow-400 hover:text-yellow-300 font-medium mt-2 inline-block">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTimesPage;
