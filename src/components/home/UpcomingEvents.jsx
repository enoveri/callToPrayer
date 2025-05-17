import React from "react";
import StackedCardCarousel from "../common/StackedCardCarousel";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

// Sample data - replace with your actual data source
const sampleEvents = [
  {
    id: "evt1",
    name: "Youth Conference 2025",
    date: "2025-06-10",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description:
      "A dynamic conference for young people to grow in faith and fellowship.",
    image:
      "https://placehold.co/300x200/6f42c1/ffffff?text=Event+1",
  },
  {
    id: "evt2",
    name: "Worship Night",
    date: "2025-06-20",
    time: "7:00 PM",
    location: "Prayer Hall",
    description: "An evening of heartfelt worship and praise.",
    image:
      "https://placehold.co/300x200/fd7e14/ffffff?text=Event+2",
  },
  {
    id: "evt3",
    name: "Community Outreach",
    date: "2025-07-05",
    time: "10:00 AM - 2:00 PM",
    location: "City Park",
    description:
      "Join us as we serve and bless our local community.",
    image:
      "https://placehold.co/300x200/20c997/ffffff?text=Event+3",
  },
  {
    id: "evt4",
    name: "Marriage Seminar",
    date: "2025-07-15",
    time: "6:00 PM - 9:00 PM",
    location: "Fellowship Hall",
    description:
      "Strengthen your marriage with biblical insights and practical advice.",
    image:
      "https://placehold.co/300x200/e83e8c/ffffff?text=Event+4",
  },
];

const UpcomingEvents = () => {
  const renderEventItem = (event, isActive) => (
    <div
      className={`p-4 h-full flex flex-col ${
        isActive ? "border-2 border-purple-500" : ""
      }`}
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {event.name}
      </h3>
      <div className="text-sm text-gray-600 mb-1 flex items-center">
        <FaCalendarAlt className="mr-2 text-purple-600" /> {event.date} at{" "}
        {event.time}
      </div>
      <div className="text-sm text-gray-600 mb-3 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-purple-600" /> {event.location}
      </div>
      <p className="text-gray-700 text-sm flex-grow overflow-y-auto">
        {event.description}
      </p>
      {isActive && (
        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 self-start flex items-center">
          <FaTicketAlt className="mr-2" /> Register Now
        </button>
      )}
    </div>
  );

  return (
    <section id="upcoming-events" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay connected with our church events and activities.
          </p>
        </div>
        <StackedCardCarousel
          items={sampleEvents}
          renderItem={renderEventItem}
          cardWidth={320}
          cardHeight={450} // Events might need more height
          stackOffset={20}
          stackRotation={-5} // Rotate the other way for variety
          autoplayDelay={7000} // Autoplay every 7 seconds for events
        />
      </div>
    </section>
  );
};

export default UpcomingEvents;
