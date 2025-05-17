import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaPhone,
  FaClock,
  FaChurch,
  FaPray,
  FaBible,
  FaGuitar,
  FaHeart,
  FaPeopleCarry,
  FaChild,
  FaPalette,
  FaMicrophoneAlt,
  FaTools,
  FaCoffee,
  FaGlobe,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ConnectPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-in-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const Section = ({
    title,
    subtitle,
    children,
    icon,
    bgColor = "bg-white",
    textColor = "text-gray-800",
    id,
  }) => (
    <section
      id={id}
      className={`py-16 md:py-24 fade-in-section ${bgColor} ${textColor}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          {icon && (
            <div className="text-5xl mb-4 inline-block" style={{ color: '#3B82F6' }}>
              {icon}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );

  const InfoCard = ({
    icon,
    title,
    description,
    link,
    linkText,
  }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group">
      <div className="text-4xl mb-6 text-blue-600 group-hover:scale-110 transform transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-transform duration-300"
        >
          {linkText} <FaArrowRight className="ml-2" />
        </Link>
      )}
    </div>
  );

  const volunteerOpportunities = [
    { 
      name: "Welcome Team", 
      description: "Create a warm and welcoming atmosphere for guests and members by serving as greeters, ushers, or information desk volunteers. You'll help people find their way and feel at home.",
      icon: <FaHandsHelping />,
      commitmentLevel: "Weekly, 1-2 hours"
    },
    { 
      name: "Kids Ministry", 
      description: "Make a lasting impact in children's lives by teaching, assisting in classrooms, or helping with check-in. Training and curriculum provided. Background check required.",
      icon: <FaChild />,  
      commitmentLevel: "Weekly or bi-weekly, 2 hours"
    },
    { 
      name: "Worship Team", 
      description: "Use your musical gifts to lead our congregation in worship. We need vocalists, instrumentalists, and audio/visual technicians. Audition required for musical positions.",
      icon: <FaGuitar />,
      commitmentLevel: "Weekly, includes rehearsals"
    },
    { 
      name: "Media & Tech Team", 
      description: "Support our services by running sound, lights, video, livestream, or presentation software. Training provided for all skill levels.",
      icon: <FaMicrophoneAlt />,
      commitmentLevel: "Rotating schedule, 2-3 hours"
    },
    { 
      name: "Prayer Team", 
      description: "Join a dedicated team that prays for the needs of our church and community. Opportunities include prayer during services, weekly prayer meetings, and the prayer chain.",
      icon: <FaPray />,
      commitmentLevel: "Flexible options available"
    },
    { 
      name: "Hospitality Team", 
      description: "Help create a welcoming environment through coffee service, meal preparation for events, or organizing fellowship gatherings. Perfect for those who love to serve behind the scenes.",
      icon: <FaCoffee />,
      commitmentLevel: "Event-based or weekly, 1-3 hours"
    },
    { 
      name: "Outreach Team", 
      description: "Serve our local community through various initiatives including food drives, community service projects, and evangelism opportunities.",
      icon: <FaGlobe />,
      commitmentLevel: "Monthly projects, 2-4 hours"
    },
    { 
      name: "Care Ministry", 
      description: "Provide practical support and encouragement to those experiencing difficult seasons through visitation, meal delivery, and other acts of compassion.",
      icon: <FaHeart />,
      commitmentLevel: "As needed, 1-2 hours"
    },
  ];

  const smallGroupTypes = [
    { 
      name: "Men's Groups", 
      description: "Connect with other men for authentic fellowship, accountability, and spiritual growth. Groups meet weekly or bi-weekly and focus on biblical manhood and life challenges.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly or bi-weekly",
      currentGroups: 4
    },
    { 
      name: "Women's Groups", 
      description: "Join a supportive community of women for Bible study, prayer, and meaningful relationships. Groups include various studies addressing faith, family, and personal growth.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly",
      currentGroups: 6
    },
    { 
      name: "Couples Groups", 
      description: "Strengthen your marriage while connecting with other couples. These groups provide encouragement, biblical teaching on relationships, and social connection.",
      image: "https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Every other week",
      currentGroups: 3
    },
    { 
      name: "Young Adults", 
      description: "For adults in their 20s and 30s, these groups blend Bible study, social activities, and authentic community. Perfect for college students, professionals, and young families.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly",
      currentGroups: 2
    },
    { 
      name: "Senior Adults", 
      description: "For those in their golden years looking for fellowship, Bible study, and prayer with peers. Groups meet during weekdays and include occasional outings.",
      image: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly, daytime",
      currentGroups: 2
    },
    { 
      name: "Interest-Based Groups", 
      description: "Connect around shared interests like hiking, books, cooking, or sports while growing spiritually. These groups balance fellowship, fun activities, and Bible discussion.",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Varies by group",
      currentGroups: 5
    },
    { 
      name: "Prayer Groups", 
      description: "Focused specifically on prayer for our church, community, and world. These intimate groups provide spiritual growth and support through the practice of corporate prayer.",
      image: "https://images.unsplash.com/photo-1544374722-86a5a5e92be3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly",
      currentGroups: 2
    },
    { 
      name: "Online Groups", 
      description: "Connect virtually from anywhere. Perfect for those with busy schedules, health constraints, or who live at a distance but want to remain connected to our church family.",
      image: "https://images.unsplash.com/photo-1609749034394-8e4853e455e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      meetingFrequency: "Weekly, evening",
      currentGroups: 4
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      group: "Women's Bible Study",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "Joining a small group has transformed my spiritual journey. The support and accountability I've found have helped me grow in ways I never expected."
    },
    {
      name: "Michael & Rebecca Chen",
      group: "Couples Group",
      image: "https://images.unsplash.com/photo-1623091410901-00e2d038b9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "Our couples group has strengthened our marriage and provided us with lifelong friends who understand our journey. We look forward to every meeting!"
    },
    {
      name: "David Williams",
      group: "Men's Fellowship",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "The men's group has given me a place to be authentic about my faith struggles and victories. It's become an essential part of my week."
    }
  ];

  const upcomingEvents = [
    {
      title: "New Member Welcome Lunch",
      date: "May 21, 2025 • 12:30 PM",
      location: "Fellowship Hall",
      description: "A special lunch for those who have recently joined our church family. Meet ministry leaders and learn about next steps.",
      image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Connect Group Leader Training",
      date: "May 25, 2025 • 6:30 PM",
      location: "Room 201",
      description: "Training session for current and prospective small group leaders. Learn effective facilitation and pastoral care techniques.",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Young Adult Mixer",
      date: "May 28, 2025 • 7:00 PM",
      location: "Church Courtyard",
      description: "A casual evening for young adults to connect, enjoy refreshments, and learn about our young adult ministry opportunities.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div ref={pageRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 md:py-48 flex items-center justify-center text-center fade-in-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519326891217-0d4e0fdb1579?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Find Your Place Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Connect with a community that cares, grows, and serves together. 
            Discover meaningful relationships and purpose in our church family.
          </p>
          <a
            href="#next-steps"
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:-translate-y-1 animate-fadeInUp animation-delay-400"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* New Here? / Next Steps Section */}
      <Section
        title="New Here? We'd Love to Meet You"
        subtitle="Here are some great ways to get started and become part of our church family"
        icon={<FaChurch />}
        bgColor="bg-gray-50"
        id="next-steps"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            icon={<FaUsers />}
            title="Sunday Services"
            description="Experience inspiring worship and practical Bible teaching. Our friendly welcome team will help you find your way around and answer any questions."
            link="/visit"
            linkText="Plan Your Visit"
          />
          <InfoCard
            icon={<FaPeopleCarry />}
            title="Connection Events"
            description="Join our monthly newcomer gatherings to meet our pastors, learn about our vision and values, and connect with others who are also new to our church."
            link="#upcoming-events"
            linkText="See Upcoming Events"
          />
          <InfoCard
            icon={<FaBible />}
            title="Join a Group"
            description="Small groups are the heart of our church community. Find a group where you can grow spiritually, build relationships, and feel supported."
            link="#small-groups"
            linkText="Find Your Group"
          />
        </div>
        
        {/* Upcoming Connection Events */}
        <div className="mt-20" id="upcoming-events">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">Upcoming Connection Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-blue-800">{event.title}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-1">{event.date}</p>
                  <p className="text-gray-500 text-sm mb-3">{event.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                    Register <FaArrowRight className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Small Groups Section */}
      <Section
        title="Find Your Community in a Small Group"
        subtitle="Life is better connected. Our small groups provide a place to build meaningful relationships, study God's Word, and support one another."
        icon={<FaUsers />}
        bgColor="bg-white"
        id="small-groups"
      >
        {/* Testimonials */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl relative">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                  <svg className="h-12 w-12 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.582 7.154 1.5 13.33 1.5 20.037c0 5.367 3.068 8.986 7.273 8.986 3.515 0 6.312-2.622 6.312-6.245 0-3.714-2.804-6.426-6.038-6.426-.565 0-1.408.094-1.962.283.377-3.523 3.907-8.12 6.957-10.054L9.352 4zm15.5 0c-4.77 3.154-7.852 9.33-7.852 16.037 0 5.367 3.07 8.986 7.274 8.986 3.516 0 6.312-2.622 6.312-6.245 0-3.714-2.804-6.426-6.038-6.426-.566 0-1.4.094-1.963.283.378-3.523 3.908-8.12 6.957-10.054L24.852 4z" />
                  </svg>
                </div>
                <div className="flex items-center mb-4 mt-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.group}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smallGroupTypes.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{group.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">{group.meetingFrequency}</span>
                  <span>{group.currentGroups} groups available</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {group.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  Find a Group <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-6">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Not sure which group is right for you? Fill out our Group Matching Form and we'll help you find the perfect fit!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Browse All Groups
            </a>
            <a
              href="#"
              className="bg-blue-100 text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-200 transition duration-300"
            >
              Group Matching Form
            </a>
          </div>
        </div>
      </Section>

      {/* Get Involved / Volunteer Section */}
      <Section
        title="Serve With Purpose"
        subtitle="Discover the joy of making a difference using your unique gifts and talents"
        icon={<FaHandsHelping />}
        textColor="text-white"
        bgColor="bg-gradient-to-r from-blue-800 to-blue-900"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteerOpportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
              <p className="text-blue-100 mb-4 text-sm line-clamp-4">{item.description}</p>
              <div className="text-xs font-medium text-blue-200 mb-4">
                Commitment: {item.commitmentLevel}
              </div>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm flex items-center"
              >
                Learn More <FaArrowRight className="ml-1 text-xs" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Not sure where to serve?</h3>
          <p className="text-blue-100 mb-6">
            Take our Spiritual Gifts Assessment to discover your unique talents and how they can be used to serve others.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
            >
              Take Spiritual Gifts Assessment
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300"
            >
              Schedule a Ministry Consultation
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Us Section */}
      <Section
        title="Connect With Us"
        subtitle="We'd love to hear from you and help you get connected"
        icon={<FaEnvelope />}
        bgColor="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  I'm Interested In:
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="visiting">Visiting for the first time</option>
                  <option value="small-groups">Joining a small group</option>
                  <option value="volunteering">Volunteer opportunities</option>
                  <option value="prayer">Prayer request</option>
                  <option value="general">General question</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mb-1">
                      123 Prayer Lane, Faith City, FC 54321
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Get Directions <FaArrowRight className="ml-1 text-xs" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-1">connect@calltoprayer.org</p>
                    <p className="text-gray-500 text-sm">For general inquiries and questions</p>
                    <p className="text-gray-600 mb-1 mt-2">prayer@calltoprayer.org</p>
                    <p className="text-gray-500 text-sm mb-1">For prayer requests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-1">(123) 456-7890</p>
                    <p className="text-gray-500 text-sm">Monday-Friday, 9AM-5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Service Times
                    </h3>
                    <p className="text-gray-600 mb-1">Sundays: 9:00 AM & 11:00 AM</p>
                    <p className="text-gray-600 mb-1">
                      Wednesdays: 7:00 PM (Midweek Service)
                    </p>
                    <Link
                      to="/visit"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Plan Your Visit <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-blue-600 p-6 rounded-xl text-center text-white">
              <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Facebook">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors" aria-label="YouTube">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ConnectPage;
