import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
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
  }, []);

  const Section = ({
    title,
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
            <div className="text-5xl text-primary mb-4 inline-block">
              {icon}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
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
    <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="text-4xl text-primary mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center text-primary font-semibold hover:underline"
        >
          {linkText} <FaArrowRight className="ml-2" />
        </a>
      )}
    </div>
  );

  const volunteerOpportunities = [
    { name: "Welcome Team", description: "Help create a welcoming environment for guests and members." },
    { name: "Kids Ministry", description: "Invest in the next generation by serving in our children's programs." },
    { name: "Worship & Tech", description: "Use your musical or technical gifts to support our worship services." },
    { name: "Outreach Programs", description: "Serve our local community through various outreach initiatives." },
    { name: "Prayer Team", description: "Join us in praying for the needs of our church and community." },
    { name: "Hospitality", description: "Help with events, refreshments, and creating a friendly atmosphere." },
  ];

  const smallGroupTypes = [
    { name: "Men's Groups", description: "Connect with other men for fellowship and growth.", image: "https://placehold.co/600x400/4A90E2/FFFFFF?text=Men%27s+Groups" },
    { name: "Women's Groups", description: "Join a community of women for support, study, and prayer.", image: "https://placehold.co/600x400/D0021B/FFFFFF?text=Women%27s+Groups" },
    { name: "Couples Groups", description: "Strengthen your marriage and connect with other couples.", image: "https://placehold.co/600x400/F5A623/FFFFFF?text=Couples+Groups" },
    { name: "Youth Groups", description: "A dynamic environment for students to grow in their faith.", image: "https://placehold.co/600x400/7ED321/FFFFFF?text=Youth+Groups" },
    { name: "Interest-Based Groups", description: "Connect with others who share similar hobbies or interests.", image: "https://placehold.co/600x400/9013FE/FFFFFF?text=Interest+Groups" },
    { name: "Online Groups", description: "Join a group from anywhere, anytime.", image: "https://placehold.co/600x400/50E3C2/FFFFFF?text=Online+Groups" },
  ];

  return (
    <Layout>
      <div ref={pageRef} className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-primary to-secondary text-white py-32 md:py-48 flex items-center justify-center text-center fade-in-section"
          style={{
            backgroundImage:
              "url('https://placehold.co/1920x800/334155/ffffff?text=Connect+With+Us')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get Connected
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our community and find your place. We have many ways for you to
              connect, grow, and serve.
            </p>
            <a
              href="#next-steps"
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300"
            >
              Find Your Place
            </a>
          </div>
        </section>

        {/* New Here? / Next Steps Section */}
        <Section
          title="New Here? Take the Next Step"
          icon={<FaArrowRight />}
          bgColor="bg-gray-50"
          id="next-steps"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Welcome to Call To Prayer! We're excited to have you. Here are a few
              ways to get started and learn more about our church family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<FaUsers />}
              title="Attend a Service"
              description="Experience our worship services and hear a message from God's Word. Check our service times and locations."
              link="/visit"
              linkText="Plan Your Visit"
            />
            <InfoCard
              icon={<FaHandsHelping />}
              title="Join a Small Group"
              description="Connect with others in a smaller setting to grow in your faith and build relationships."
              link="#small-groups" // Links to the Small Groups section on this page
              linkText="Find a Group"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Discover Our Mission"
              description="Learn about what we believe, our history, and our vision for the future."
              link="/about"
              linkText="Learn More About Us"
            />
          </div>
        </Section>

        {/* Get Involved / Volunteer Section */}
        <Section
          title="Get Involved & Make a Difference"
          icon={<FaHandsHelping />}
          textColor="text-white"
          bgColor="bg-secondary"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-200">
              God has gifted each of us to serve. Discover how you can use your
              talents to impact our church and community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 rounded-lg shadow-md text-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More & Sign Up{" "}
                  <FaArrowRight className="inline ml-1" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#" // Replace with actual link to volunteer sign-up page
              className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-80 transition duration-300"
            >
              Explore All Volunteer Roles
            </a>
          </div>
        </Section>

        {/* Small Groups Section */}
        <Section
          title="Find Your Community in a Small Group"
          icon={<FaUsers />}
          bgColor="bg-gray-100"
          id="small-groups"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Life is better connected. Our small groups provide a place to build
              meaningful relationships, study God's Word, and support one another.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallGroupTypes.map((group) => (
              <div
                key={group.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {group.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Find a Group{" "}
                    <FaArrowRight className="inline ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#" // Replace with actual link to small groups directory
              className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-80 transition duration-300"
            >
              Browse All Small Groups
            </a>
          </div>
        </Section>

        {/* Contact Us Section */}
        <Section
          title="Connect With Us"
          icon={<FaEnvelope />}
          bgColor="bg-white"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form Placeholder */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold mb-6 text-primary">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="How can we help?"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Our Location
                </h3>
                <p className="text-gray-600 mb-1">
                  123 Prayer Lane, Faith City, FC 54321
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Get Directions{" "}
                  <FaMapMarkerAlt className="inline ml-1" />
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-1">connect@calltoprayer.org</p>
                <a
                  href="mailto:connect@calltoprayer.org"
                  className="text-primary hover:underline"
                >
                  Send an Email{" "}
                  <FaEnvelope className="inline ml-1" />
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Call Us
                </h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Service Times
                </h3>
                <p className="text-gray-600">Sundays: 9:00 AM & 11:00 AM</p>
                <p className="text-gray-600">
                  Wednesdays: 7:00 PM (Midweek Service)
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default ConnectPage;
