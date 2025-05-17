import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; // Import Link
import { FaPlayCircle, FaYoutube, FaRss } from "react-icons/fa"; // Example icons

gsap.registerPlugin(ScrollTrigger);

// Sample data for messages - replace with actual data source
const sampleMessages = [
  {
    id: 1,
    title: "Faith Over Fear",
    speaker: "Pastor John Doe",
    date: "May 12, 2025",
    thumbnail: "https://placehold.co/600x338/EBF4FF/3B82F6?text=Faith+Over+Fear",
    videoUrl: "/watch/messages/faith-over-fear", // Example link to a specific message page
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor Jane Smith",
    date: "May 5, 2025",
    thumbnail: "https://placehold.co/600x338/EBF4FF/3B82F6?text=Power+of+Prayer",
    videoUrl: "/watch/messages/power-of-prayer",
  },
  {
    id: 3,
    title: "Living a Life of Purpose",
    speaker: "Pastor John Doe",
    date: "April 28, 2025",
    thumbnail: "https://placehold.co/600x338/EBF4FF/3B82F6?text=Life+of+Purpose",
    videoUrl: "/watch/messages/life-of-purpose",
  },
];

const WatchPage = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

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
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Placeholder: Check if a service is currently live
  const isServiceLive = true; // Set to false to see the "Watch Latest Message" variant

  return (
      <div className="pt-20 md:pt-28 pb-16 bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section 
          ref={addToRefs} 
          className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 md:py-32 text-center"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              {isServiceLive ? "Watch Our Service Live" : "Experience the Latest Message"}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              {isServiceLive 
                ? "Join us online right now for a powerful time of worship and teaching."
                : "Catch up on our most recent sermon and stay connected with God's word."
              }
            </p>
            {isServiceLive && (
              <a 
                href="#live-stream" // Link to the live stream section below
                className="inline-block bg-white text-indigo-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-xl shadow-lg"
              >
                <FaPlayCircle className="inline mr-2" /> Watch Live Now
              </a>
            )}
            {!isServiceLive && sampleMessages.length > 0 && (
               <Link 
                to={sampleMessages[0].videoUrl} 
                className="inline-block bg-white text-indigo-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-xl shadow-lg"
              >
                <FaPlayCircle className="inline mr-2" /> Watch Latest Message
              </Link>
            )}
          </div>
        </section>

        {/* Live Stream Section (Conditional) */}
        {isServiceLive && (
          <section id="live-stream" ref={addToRefs} className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-white">
                Live Stream
              </h2>
              <div className="aspect-video bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center text-white">
                {/* Placeholder for live video player embed (e.g., YouTube, Vimeo) */}
                <p className="text-2xl">Live Video Player Placeholder</p>
              </div>
            </div>
          </section>
        )}

        {/* Latest Messages Section */}
        <section ref={addToRefs} className={`py-16 md:py-24 ${isServiceLive ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-800">
              Latest Messages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleMessages.map((message) => (
                <div 
                  key={message.id} 
                  className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <Link to={message.videoUrl}>
                    <img src={message.thumbnail} alt={message.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-blue-700">{message.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">Speaker: {message.speaker}</p>
                      <p className="text-gray-500 text-sm">Date: {message.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/watch/messages" // Link to a full message archive page
                className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-lg"
              >
                View All Messages
              </Link>
            </div>
          </div>
        </section>

        {/* Ways to Watch Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
              More Ways to Watch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <FaYoutube className="text-5xl text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">YouTube</h3>
                <p className="text-gray-700 mb-4">Subscribe to our channel for the latest messages and updates.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Visit Channel</a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                {/* Replace with your app icon or a generic one */}
                <FaPlayCircle className="text-5xl text-blue-600 mx-auto mb-4" /> 
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">Our App</h3>
                <p className="text-gray-700 mb-4">Download our mobile app to watch on the go and access exclusive content.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Download App</a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <FaRss className="text-5xl text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">Podcast</h3>
                <p className="text-gray-700 mb-4">Listen to our messages on your favorite podcast platform.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">Subscribe to Podcast</a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action/Connect Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Online Community
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Connect with us beyond the screen. Join a group, attend an event, or reach out for prayer.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/connect" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Get Connected
              </Link>
              <Link to="/events" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg">
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>

      </div>
  );
};

export default WatchPage;
