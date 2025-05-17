import React from "react";
import StackedCardCarousel from "../common/StackedCardCarousel";

// Sample data - replace with your actual data source (e.g., API call, context)
const sampleMessages = [
  {
    id: "msg1",
    title: "Faith Over Fear",
    speaker: "Pastor John",
    date: "2025-05-15",
    summary: "A powerful message on overcoming challenges with faith.",
    image:
      "https://placehold.co/300x200/007bff/ffffff?text=Message+1",
  },
  {
    id: "msg2",
    title: "The Power of Prayer",
    speaker: "Guest Speaker Alice",
    date: "2025-05-08",
    summary:
      "Discover the transformative power of a consistent prayer life.",
    image:
      "https://placehold.co/300x200/28a745/ffffff?text=Message+2",
  },
  {
    id: "msg3",
    title: "Living a Purposeful Life",
    speaker: "Pastor Jane",
    date: "2025-05-01",
    summary: "Finding and fulfilling your God-given purpose.",
    image:
      "https://placehold.co/300x200/ffc107/000000?text=Message+3",
  },
  {
    id: "msg4",
    title: "Community and Fellowship",
    speaker: "Pastor John",
    date: "2025-04-24",
    summary:
      "The importance of belonging to a supportive church family.",
    image:
      "https://placehold.co/300x200/dc3545/ffffff?text=Message+4",
  },
  {
    id: "msg5",
    title: "Grace and Forgiveness",
    speaker: "Pastor Emily",
    date: "2025-04-17",
    summary:
      "Understanding the depth of God’s grace and forgiveness.",
    image:
      "https://placehold.co/300x200/17a2b8/ffffff?text=Message+5",
  },
];

const LatestMessages = () => {
  const renderMessageItem = (message, isActive) => (
    <div
      className={`p-4 h-full flex flex-col ${
        isActive ? "border-2 border-blue-500" : ""
      }`}
    >
      {message.image && (
        <img
          src={message.image}
          alt={message.title}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {message.title}
      </h3>
      <p className="text-sm text-gray-600 mb-1">Speaker: {message.speaker}</p>
      <p className="text-xs text-gray-500 mb-3">Date: {message.date}</p>
      <p className="text-gray-700 text-sm flex-grow overflow-y-auto">
        {message.summary}
      </p>
      {isActive && (
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 self-start">
          Watch Now
        </button>
      )}
    </div>
  );

  return (
    <section id="latest-messages" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Messages
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Catch up on our recent sermons and teachings.
          </p>
        </div>
        <StackedCardCarousel
          items={sampleMessages}
          renderItem={renderMessageItem}
          cardWidth={320} // Example: slightly wider cards
          cardHeight={420}
          stackOffset={25}
          autoplayDelay={5000} // Autoplay every 5 seconds
        />
      </div>
    </section>
  );
};

export default LatestMessages;
