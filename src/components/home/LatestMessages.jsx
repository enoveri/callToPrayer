import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const LatestMessages = () => {
  // Sample messages data - would come from an API in a real application
  const messages = [
    {
      id: 1,
      title: "Finding Peace in God's Presence",
      speaker: "Pastor Johnson",
      date: "May 12, 2025",
      thumbnail: "https://images.unsplash.com/photo-1492681290082-e932832941e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByZWFjaGVyfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Walking in Faith Every Day",
      speaker: "Pastor Johnson",
      date: "May 5, 2025",
      thumbnail: "https://images.unsplash.com/photo-1596568359553-a56bbbea5ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByZWFjaGVyfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "The Power of Prayer",
      speaker: "Pastor Johnson",
      date: "April 28, 2025",
      thumbnail: "https://images.unsplash.com/photo-1516675302207-722c37ce2f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Messages</h2>
            <p className="text-lg text-gray-600">Watch and listen to our recent sermons</p>
          </div>
          <Link 
            to="/watch" 
            className="flex items-center mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Messages <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map(message => (
            <div key={message.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={message.thumbnail} 
                  alt={message.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link 
                    to={`/watch/${message.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center"
                  >
                    <FaPlay className="ml-1" />
                  </Link>
                </div>
              </div>
              <div>
                <span className="block text-gray-500 text-sm mb-2">{message.date} • {message.speaker}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  <Link to={`/watch/${message.id}`}>{message.title}</Link>
                </h3>
                <Link 
                  to={`/watch/${message.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestMessages;
