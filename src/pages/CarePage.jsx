import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaHandHoldingHeart, FaUsers, FaPray, FaPhone, 
  FaHeart, FaBandAid, FaHome, FaHandsHelping 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CarePage = () => {
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

  // Support groups data
  const supportGroups = [
    {
      id: 1,
      name: "Grief Support",
      description: "Finding hope and healing after loss",
      meetingTime: "2nd & 4th Mondays, 6:30 PM",
      icon: <FaHeart className="text-blue-600 text-3xl" />,
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Recovery",
      description: "Support for addiction recovery and healing",
      meetingTime: "Thursdays, 7:00 PM",
      icon: <FaBandAid className="text-blue-600 text-3xl" />,
      image: "https://images.unsplash.com/photo-1573497620372-37940989e144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Marriage Restoration",
      description: "Rebuilding and strengthening marriages",
      meetingTime: "1st & 3rd Tuesdays, 6:30 PM",
      icon: <FaHome className="text-blue-600 text-3xl" />,
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Single Parents",
      description: "Support and encouragement for single parents",
      meetingTime: "2nd Saturday, 10:00 AM",
      icon: <FaHandsHelping className="text-blue-600 text-3xl" />,
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 md:py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518731089948-f8530de5460b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Care & Support</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            You're not meant to walk through life's challenges alone. We're here to support you through life's ups and downs.
          </p>
          <a 
            href="#care-options" 
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            Find Support
          </a>
        </div>
      </section>

      {/* Pastoral Care Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="care-options">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Pastoral Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pastoral team is committed to providing care, counseling, and prayer support during times of need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Pastor praying with a person" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Pastoral Counseling</h3>
                <p className="text-gray-600 mb-4">
                  Our pastors provide confidential, compassionate counseling for individuals, couples, and families going through difficult seasons.
                </p>
                <p className="text-gray-600">
                  We offer guidance through spiritual struggles, relationship challenges, grief, and life transitions.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Prayer Ministry</h3>
                <p className="text-gray-600 mb-4">
                  Our prayer team is dedicated to lifting your needs before God. Submit a prayer request online or in person, and our team will faithfully pray for you.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Submit Prayer Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Groups Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50" id="support-groups">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Support Groups</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with others who understand your journey in a safe, supportive environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {supportGroups.map((group) => (
              <div key={group.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={group.image} 
                    alt={group.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">{group.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <p className="text-gray-500 text-sm mb-6"><strong>Meets:</strong> {group.meetingTime}</p>
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a group for your specific need? We're here to help connect you with the right resources.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Care Team
            </button>
          </div>
        </div>
      </section>

      {/* Counseling Resources Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Counseling Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer professional Christian counseling services and resources to support your mental and emotional health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandHoldingHeart className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Professional Counseling</h3>
              <p className="text-gray-600 mb-6">
                Our licensed counselors integrate biblical truth with clinical expertise to address a variety of mental health concerns.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Schedule Appointment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Group Workshops</h3>
              <p className="text-gray-600 mb-6">
                Seasonal workshops addressing topics like stress management, boundaries, and healthy relationships.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                View Calendar
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPray className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Inner Healing</h3>
              <p className="text-gray-600 mb-6">
                Experience healing from past hurts through our prayer-based inner healing ministry.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Help Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Urgent Help?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              If you're experiencing a crisis or emergency situation, please reach out immediately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-5">
                  <FaPhone className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-800">Care Hotline</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our care team is available 24/7 for prayer and support during crisis situations.
              </p>
              <p className="text-gray-600 font-bold text-xl">
                (123) 456-7890
              </p>
            </div>
            
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-5">
                  <FaHandsHelping className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-800">Emergency Resources</h3>
              </div>
              <p className="text-gray-600 mb-4">
                If you're experiencing a life-threatening emergency, please call 911 or visit your nearest emergency room.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>National Suicide Prevention Lifeline:</strong> 988
              </p>
              <p className="text-gray-600">
                <strong>Crisis Text Line:</strong> Text HOME to 741741
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">
            We're Here For You
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            You don't have to face life's challenges alone. Reach out today to connect with our care team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/connect/care-request" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
              Request Care
            </Link>
            <Link to="/connect" className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Get Connected
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarePage;
