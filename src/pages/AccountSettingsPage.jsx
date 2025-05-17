import React, { useEffect, useRef, useState } from "react";
import { FaLock, FaBell, FaUserShield, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAuth } from "../context/AuthContext";

gsap.registerPlugin(ScrollTrigger);

const AccountSettingsPage = () => {
  const { currentUser } = useAuth();
  const [currentTab, setCurrentTab] = useState("security");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    serviceReminders: true,
    specialEvents: true,
    prayerRequests: false,
    newsletter: true,
  });
  const sectionsRef = useRef([]);
  
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
  }, [currentTab]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // In a real app, validate passwords and submit to API
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    alert("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const toggleNotification = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Account Settings</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar */}
              <div className="bg-gray-50 p-6">
                <ul>
                  <li>
                    <button
                      onClick={() => setCurrentTab("security")}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg mb-2 ${
                        currentTab === "security"
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <FaLock className="mr-2" /> Security
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentTab("notifications")}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg mb-2 ${
                        currentTab === "notifications"
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <FaBell className="mr-2" /> Notifications
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentTab("privacy")}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${
                        currentTab === "privacy"
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <FaUserShield className="mr-2" /> Privacy
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Main content */}
              <div className="p-6 col-span-3">
                {currentTab === "security" && (
                  <div ref={addToRefs}>
                    <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-blue-800">
                        Protect your account by using a strong password that you don't use on other websites.
                      </p>
                    </div>
                    
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Minimum 8 characters
                          </p>
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                    
                    <div className="mt-10">
                      <h3 className="text-lg font-medium mb-4">Login History</h3>
                      <div className="border border-gray-200 rounded-md">
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <p className="font-medium">Current session</p>
                            <p className="text-sm text-gray-500">Started May 17, 2025 • Mbale, Uganda</p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Active now
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">Previous login</p>
                            <p className="text-sm text-gray-500">May 15, 2025 • Mbale, Uganda</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === "notifications" && (
                  <div ref={addToRefs}>
                    <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive all notifications via email</p>
                        </div>
                        <button
                          onClick={() => toggleNotification("emailNotifications")}
                          className="text-2xl text-blue-600"
                        >
                          {notificationSettings.emailNotifications ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Service Reminders</p>
                          <p className="text-sm text-gray-500">Get reminded about upcoming services</p>
                        </div>
                        <button
                          onClick={() => toggleNotification("serviceReminders")}
                          className="text-2xl text-blue-600"
                        >
                          {notificationSettings.serviceReminders ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Special Events</p>
                          <p className="text-sm text-gray-500">Be notified about special events and conferences</p>
                        </div>
                        <button
                          onClick={() => toggleNotification("specialEvents")}
                          className="text-2xl text-blue-600"
                        >
                          {notificationSettings.specialEvents ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Prayer Requests</p>
                          <p className="text-sm text-gray-500">Receive updates on prayer requests</p>
                        </div>
                        <button
                          onClick={() => toggleNotification("prayerRequests")}
                          className="text-2xl text-blue-600"
                        >
                          {notificationSettings.prayerRequests ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Weekly Newsletter</p>
                          <p className="text-sm text-gray-500">Weekly updates from our church</p>
                        </div>
                        <button
                          onClick={() => toggleNotification("newsletter")}
                          className="text-2xl text-blue-600"
                        >
                          {notificationSettings.newsletter ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === "privacy" && (
                  <div ref={addToRefs}>
                    <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-blue-800">
                        Control how your information is used and who can see your profile.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-gray-500">Allow other church members to see your profile</p>
                        </div>
                        <div>
                          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Everyone</option>
                            <option>Members Only</option>
                            <option>Group Leaders Only</option>
                            <option>Only Me</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Contact Information</p>
                          <p className="text-sm text-gray-500">Allow others to contact you through the platform</p>
                        </div>
                        <div>
                          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Everyone</option>
                            <option>Members Only</option>
                            <option>Group Leaders Only</option>
                            <option>Only Me</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Data Usage</p>
                          <p className="text-sm text-gray-500">How we can use your data to improve our services</p>
                        </div>
                        <button className="text-2xl text-blue-600">
                          <FaToggleOn />
                        </button>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                        >
                          Save Privacy Settings
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <h3 className="text-lg font-medium mb-4">Data Management</h3>
                      <div className="space-y-4">
                        <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center">
                          Download my data
                        </button>
                        <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
                          Delete my account
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
