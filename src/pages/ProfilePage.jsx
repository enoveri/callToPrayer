import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaEdit, FaCamera } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAuth } from "../context/AuthContext";

gsap.registerPlugin(ScrollTrigger);

const ProfilePage = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  
  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/sign-in");
    } else {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
      });
    }
  }, [currentUser, navigate]);

  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // GSAP animations
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we'd update the user profile with an API call
    // For now, we'll just simulate a successful update
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  if (!currentUser) {
    return null; // Will redirect
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">My Profile</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-4 border-white">
                    {currentUser.profileImage ? (
                      <img 
                        src={currentUser.profileImage} 
                        alt={currentUser.username} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUser className="text-4xl text-white" />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-yellow-500 text-blue-900 p-2 rounded-full shadow-lg">
                    <FaCamera />
                  </button>
                </div>
                
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">{currentUser.username}</h2>
                  <p className="text-blue-100 mt-1 flex items-center justify-center md:justify-start">
                    <FaEnvelope className="mr-2" /> {currentUser.email}
                  </p>
                  {currentUser.isSubscribed && (
                    <span className="inline-block mt-3 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Premium Subscriber
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              {/* Profile Information */}
              <div ref={addToRefs} className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit className="mr-1" /> {isEditing ? "Cancel" : "Edit"}
                  </button>
                </div>
                
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
                    <div>
                      <p className="text-sm text-gray-500">Username</p>
                      <p className="font-medium">{currentUser.username}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium">{currentUser.email}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Subscription Status */}
              <div ref={addToRefs} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscription Status</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        {currentUser.isSubscribed ? "Premium Subscription" : "Free Account"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {currentUser.isSubscribed 
                          ? "You have access to all premium content"
                          : "Upgrade to access premium content"}
                      </p>
                    </div>
                    {!currentUser.isSubscribed && (
                      <button className="px-4 py-2 bg-yellow-500 text-blue-900 rounded-md font-medium hover:bg-yellow-400 transition">
                        Upgrade Now
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Actions */}
              <div ref={addToRefs}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    <span>Change Password</span>
                    <span className="text-blue-600">→</span>
                  </button>
                  <button className="w-full text-left p-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    <span>Notification Preferences</span>
                    <span className="text-blue-600">→</span>
                  </button>
                  <button 
                    onClick={signOut}
                    className="w-full text-left p-3 flex items-center justify-between bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition"
                  >
                    <span>Sign Out</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
