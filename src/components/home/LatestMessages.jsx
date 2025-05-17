import React from "react";
import StackedCardCarousel from "../common/StackedCardCarousel";

// Sample data - replace with your actual data source (e.g., API call, context)
const sampleMessages = [  {
    id: "msg1",
    title: "Faith Over Fear",
    speaker: "Pastor John",
    date: "2025-05-15",
    summary: "A powerful message on overcoming challenges with faith. Learn how to stand strong in your faith when facing life's greatest challenges and uncertainties.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },  {
    id: "msg2",
    title: "The Power of Prayer",
    speaker: "Guest Speaker Alice",
    date: "2025-05-08",
    summary: "Discover the transformative power of a consistent prayer life. This message explores how prayer connects us to God's purpose and brings breakthrough in every area of life.",
    image: "https://images.unsplash.com/photo-1544374722-86a5a5e92be3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },  {
    id: "msg3",
    title: "Living a Purposeful Life",
    speaker: "Pastor Jane",
    date: "2025-05-01",
    summary: "Finding and fulfilling your God-given purpose. Understand the unique calling God has placed on your life and how to walk in it with confidence and joy.",
    image: "https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "msg4",
    title: "Community and Fellowship",
    speaker: "Pastor John",
    date: "2025-04-24",
    summary: "The importance of belonging to a supportive church family.",
    image: "https://placehold.co/600x800/dc3545/ffffff?text=Community", // Updated image URL
  },
  {
    id: "msg5",
    title: "Grace and Forgiveness",
    speaker: "Pastor Emily",
    date: "2025-04-17",
    summary: "Understanding the depth of God’s grace and forgiveness.",
    image: "https://placehold.co/600x800/17a2b8/ffffff?text=Grace+%26+Forgiveness", // Updated image URL
  },
];

const LatestMessages = () => {
  const renderMessageItem = (message, isActive) => (
    <div className="relative w-full h-full group text-white"> {/* Ensure text is white by default */}
      {/* Background Image */}
      <img
        src={message.image}
        alt={message.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className={`relative p-5 flex flex-col h-full ${isActive ? "ring-2 ring-blue-400 ring-inset rounded-lg" : ""}`}>
        <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
          {message.title}
        </h3>
        <p className="text-sm text-gray-200 mb-1 drop-shadow-sm">Speaker: {message.speaker}</p>
        <p className="text-xs text-gray-300 mb-4 drop-shadow-sm">Date: {message.date}</p>
        <p className="text-gray-100 text-base flex-grow overflow-y-auto leading-relaxed scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent pr-2">
          {message.summary}
        </p>
        {isActive && (
          <button className="mt-auto bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors self-start shadow-lg">
            Watch Now
          </button>
        )}
      </div>
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
