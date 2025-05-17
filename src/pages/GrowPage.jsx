import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBible, FaBookReader, FaUsers, FaPray, FaGraduationCap, FaLaptop, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const GrowPage = () => {
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

  const ResourceCard = ({ icon, title, description, link }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="text-4xl text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href={link} className="inline-flex items-center text-blue-600 font-semibold hover:underline">
          Learn More <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 md:py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616530789056-4a5be872215f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Grow In Your Faith</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover resources and opportunities to deepen your relationship with God and grow as a disciple.
          </p>
          <a 
            href="#discipleship" 
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            Explore Opportunities
          </a>
        </div>
      </section>

      {/* Bible Study Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="bible-study">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Bible Study</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive deeper into God's Word and discover its relevance for your life through our various Bible study options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Bible Study Group" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Weekly Bible Studies</h3>
                <p className="text-gray-600 mb-4">
                  Our weekly Bible studies provide in-depth exploration of Scripture in a small group setting.
                  Join us as we explore different books of the Bible and discuss their application to daily life.
                </p>
                <p className="text-gray-600">
                  <strong>When:</strong> Thursdays at 7:00 PM<br />
                  <strong>Where:</strong> Church Fellowship Hall
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Topical Studies</h3>
                <p className="text-gray-600 mb-4">
                  Our topical studies focus on specific themes such as prayer, faith, relationships, and more.
                  These studies typically run for 4-6 weeks and include teaching, discussion, and practical application.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  View Current Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discipleship Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50" id="discipleship">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Discipleship Pathway</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our discipleship pathway helps you take intentional steps in your spiritual journey, no matter where you are starting from.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBookReader className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">New Believers</h3>
              <p className="text-gray-600 mb-6">
                Just started your faith journey? Our Foundations course will help you understand the core principles of Christianity and build a strong spiritual foundation.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Join Next Class
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform scale-110 z-10 border-t-4 border-yellow-500">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Growing Believers</h3>
              <p className="text-gray-600 mb-6">
                Ready to go deeper? Connect with others in a discipleship group where you'll grow together through Bible study, accountability, and prayer.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Find a Group
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Mature Believers</h3>
              <p className="text-gray-600 mb-6">
                Learn to lead others in their faith journey through our leadership development program and become a discipleship group leader.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Leadership Training
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Resources Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Growth Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access tools and resources to help you grow in your faith, whether you're at home or on the go.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard 
              icon={<FaBible />}
              title="Reading Plans"
              description="Access Bible reading plans designed to help you develop a consistent habit of engaging with Scripture."
              link="#"
            />
            
            <ResourceCard 
              icon={<FaPray />}
              title="Prayer Guides"
              description="Download prayer guides and resources to deepen your prayer life and connect with God."
              link="#"
            />
            
            <ResourceCard 
              icon={<FaLaptop />}
              title="Online Courses"
              description="Take self-paced online courses on various aspects of the Christian faith and spiritual growth."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Transformation Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear how others have grown in their faith through our discipleship opportunities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
              <svg className="absolute top-0 left-10 transform -translate-y-1/2 text-white" width="34" height="27" viewBox="0 0 34 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.5V27H13.5V13.5H6.75C6.75 9.5625 9.5625 6.75 13.5 6.75V0C6.075 0 0 6.075 0 13.5ZM20.25 0V6.75C24.1875 6.75 27 9.5625 27 13.5V27H40.5V13.5C40.5 6.075 34.425 0 27 0H20.25Z" />
              </svg>
              
              <div className="pt-8">
                <p className="text-gray-600 mb-6 text-lg italic">
                  "The discipleship pathway at Call2Prayer has transformed my faith walk. I've grown from someone who barely read the Bible to someone who now leads a Bible study group. The tools and community support have been invaluable."
                </p>
                
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/76.jpg" 
                    alt="Testimonial Author" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-500">Church Member for 3 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Whether you're just beginning your faith journey or looking to go deeper, we're here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/connect" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
              Get Connected
            </Link>
            <Link to="/events" className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowPage;
