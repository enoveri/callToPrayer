import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaPray, FaHeart, FaHandsHelping } from 'react-icons/fa';

const Connect = () => {
  const connectOptions = [
    {
      id: 1,
      title: 'Join a Small Group',
      description: 'Connect with others in a small group setting for fellowship and spiritual growth.',
      icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
      link: '/connect/groups'
    },
    {
      id: 2,
      title: 'Prayer Requests',
      description: 'Submit your prayer requests and join our prayer team in interceding for others.',
      icon: <FaPray className="text-4xl text-blue-600 mb-4" />,
      link: '/connect/prayer'
    },
    {
      id: 3,
      title: 'Volunteering',
      description: 'Serve with us and make a difference in our church and community.',
      icon: <FaHandsHelping className="text-4xl text-blue-600 mb-4" />,
      link: '/connect/volunteer'
    },
    {
      id: 4,
      title: 'Care & Support',
      description: 'Get support during difficult seasons of life through our care ministries.',
      icon: <FaHeart className="text-4xl text-blue-600 mb-4" />,
      link: '/connect/care'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get connected and grow your faith through these opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {connectOptions.map(option => (
            <div 
              key={option.id}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <Link 
                to={option.link}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/connect" 
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition inline-block"
          >
            View All Ways to Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Connect;
