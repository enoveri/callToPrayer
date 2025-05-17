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
      "https://placehold.co/600x800/6f42c1/ffffff?text=Youth+Conference", // Updated image URL
  },
  {
    id: "evt2",
    name: "Worship Night",
    date: "2025-06-20",
    time: "7:00 PM",
    location: "Prayer Hall",
    description: "An evening of heartfelt worship and praise.",
    image:
      "https://placehold.co/600x800/fd7e14/ffffff?text=Worship+Night", // Updated image URL
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
      "https://placehold.co/600x800/20c997/ffffff?text=Community+Outreach", // Updated image URL
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
      "https://placehold.co/600x800/e83e8c/ffffff?text=Marriage+Seminar", // Updated image URL
  },
];

const UpcomingEvents = () => {
  const renderEventItem = (event, isActive) => (
    <div className="relative w-full h-full group text-white">
      {/* Background Image */}
      <img
        src={event.image}
        alt={event.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div
        className={`relative p-5 flex flex-col h-full ${
          isActive
            ? "ring-2 ring-purple-400 ring-inset rounded-lg"
            : ""
        }`}
      >
        <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
          {event.name}
        </h3>
        <div className="text-sm text-gray-200 mb-1 flex items-center drop-shadow-sm">
          <FaCalendarAlt className="mr-2 text-purple-300" /> {event.date} at{" "}
          {event.time}
        </div>
        <div className="text-sm text-gray-200 mb-4 flex items-center drop-shadow-sm">
          <FaMapMarkerAlt className="mr-2 text-purple-300" /> {event.location}
        </div>
        <p className="text-gray-100 text-base flex-grow overflow-y-auto leading-relaxed scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent pr-2">
          {event.description}
        </p>
        {isActive && (
          <button className="mt-auto bg-purple-500 text-white py-2 px-5 rounded-lg hover:bg-purple-600 transition-colors self-start shadow-lg flex items-center">
            <FaTicketAlt className="mr-2" /> Register Now
          </button>
        )}
      </div>
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
