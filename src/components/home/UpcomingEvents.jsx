import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const UpcomingEvents = () => {
  // Sample events data - in a real application this would come from an API or database
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      description:
        "Join us for a powerful worship experience and inspiring message.",
      image:
        "https://images.unsplash.com/photo-1603528767125-a7988d664ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNodXJjaCUyMHdvcnNoaXB8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Youth Conference 2025",
      date: "June 15-17, 2025",
      time: "6:00 PM",
      description:
        "A special conference for young people to grow in their faith and connect.",
      image:
        "https://images.unsplash.com/photo-1609234656473-3a97936d6376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIweW91dGh8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Prayer & Worship Night",
      date: "Last Friday of Each Month",
      time: "7:00 PM",
      description:
        "A night dedicated to prayer and worship for spiritual renewal.",
      image:
        "https://images.unsplash.com/photo-1544212415-e3f44a469938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNodXJjaCUyMHByYXllcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us at our upcoming events and services
            </p>
          </div>
          <Link
            to="/events"
            className="flex items-center mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Events <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
