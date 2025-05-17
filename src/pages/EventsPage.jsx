import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaTicketAlt, FaSearch, FaFilter } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const EventsPage = () => {
  const pageRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample events data
  const allEvents = [
    {      id: 1,
      title: 'Annual Community Prayer Breakfast',
      date: 'October 26, 2024',
      time: '8:00 AM - 10:00 AM',
      location: 'Main Sanctuary Hall',
      description: 'Join us for a morning of prayer, fellowship, and an inspiring message. A continental breakfast will be served. This annual gathering brings together people from all walks of life to pray for our community, nation, and world.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'community',
      featured: true,
      ticketLink: '#'
    },
    {      id: 2,
      title: 'Youth IGNITE Conference',
      date: 'November 10-12, 2024',
      time: 'Fri 7PM - Sun 12PM',
      location: 'Youth Center & Online',
      description: 'A power-packed weekend for youth to encounter God, build friendships, and be equipped for their faith journey. Dynamic worship, inspiring speakers, and interactive workshops designed for teens and young adults.',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'youth',
      featured: false,
      ticketLink: '#'
    },
    {      id: 3,
      title: 'Worship Night: Songs of Deliverance',
      date: 'December 1, 2024',
      time: '7:30 PM - 9:00 PM',
      location: 'Main Sanctuary',
      description: 'An evening dedicated to worship, praise, and experiencing the presence of God through music. Join our worship team and special guest artists for a night of encountering God through powerful worship and prayer.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5463357?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'worship',
      featured: false,
      ticketLink: '#'
    },
    {      id: 4,
      title: 'Christmas Outreach & Toy Drive',
      date: 'December 15, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Community Center Grounds',
      description: 'Bless families in our community this Christmas. Donate toys and volunteer to help distribute gifts to children in need. Together we can bring joy and hope to hundreds of families during the holiday season.',
      image: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'outreach',
      featured: true,
      ticketLink: '#'
    },
    {      id: 5,
      title: 'New Year\'s Eve Watchnight Service',
      date: 'December 31, 2024',
      time: '10:00 PM - 12:15 AM',
      location: 'Main Sanctuary & Online',
      description: 'Welcome the new year with prayer, worship, and a powerful message of hope for the year ahead. This special service includes communion, testimony sharing, and a time of corporate prayer as we cross into the new year together.',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'special',
      featured: false,
      ticketLink: '#'
    },
     {      id: 6,
      title: 'Men\'s Fellowship Breakfast',
      date: 'First Saturday of each month',
      time: '8:00 AM - 9:30 AM',
      location: 'Fellowship Hall',
      description: 'A time for men to connect, share, and grow in their faith over a hearty breakfast. Join us for good food, inspiring discussions, and building brotherhood in Christ.',
      image: 'https://images.unsplash.com/photo-1517370091901-8fffa9a2c2f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'community',
      featured: false,
      ticketLink: '#'
    },
  ];

  const filteredEvents = allEvents.filter(event => {
    const categoryMatch = filter === 'all' || event.category === filter;
    const searchMatch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  useEffect(() => {
    const sections = gsap.utils.toArray('.fade-in-section');
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
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate event cards
    const eventCards = gsap.utils.toArray('.event-card');
    eventCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, scale: 0.9 }, 
        {
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          delay: index * 0.1, // Stagger animation
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

  }, [filteredEvents]); // Re-run animations if filteredEvents changes

  const Section = ({ title, children, bgColor = 'bg-white', textColor = 'text-gray-800', id }) => (
    <section id={id} className={`py-16 md:py-24 fade-in-section ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 md:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col event-card transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110" />
        <div className={`absolute top-0 right-0 py-1 px-3 m-3 rounded-full text-xs font-bold text-white ${
          event.category === 'community' ? 'bg-blue-600' :
          event.category === 'youth' ? 'bg-orange-500' :
          event.category === 'worship' ? 'bg-green-600' :
          event.category === 'outreach' ? 'bg-red-600' : 
          'bg-purple-600'
        }`}>
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-blue-800 hover:text-blue-600 transition-colors">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FaCalendarAlt className="mr-2 text-blue-600" /> {event.date} - {event.time}
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="mr-2 text-blue-600" /> {event.location}
        </div>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{event.description}</p>
        <a
          href={event.ticketLink}
          className="mt-auto inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More / Register <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );

  const featuredEvent = allEvents.find(event => event.featured);

  return (
    <div ref={pageRef} className="overflow-x-hidden">
      {/* Hero Section */}      <section
        className="relative bg-gradient-to-r from-primary to-secondary text-white py-32 md:py-48 flex items-center justify-center text-center fade-in-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Church Events</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover what's happening at Call To Prayer. Join us for worship, fellowship, and community outreach.
          </p>
          <a
            href="#upcoming-events"
            className="bg-white text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300"
          >
            View All Events
          </a>
        </div>
      </section>

      {/* Featured Event Section */}
      {featuredEvent && (
        <Section bgColor="bg-gray-50" id="featured-event">
          <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Event</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="event-card">
              <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-auto md:h-[400px] object-cover rounded-lg shadow-xl" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{featuredEvent.title}</h3>
              <div className="flex items-center text-gray-600 mb-2 text-lg">
                <FaCalendarAlt className="mr-2 text-secondary" /> {featuredEvent.date} - {featuredEvent.time}
              </div>
              <div className="flex items-center text-gray-600 mb-4 text-lg">
                <FaMapMarkerAlt className="mr-2 text-secondary" /> {featuredEvent.location}
              </div>
              <p className="text-gray-700 text-lg mb-6">{featuredEvent.description}</p>
              <a
                href={featuredEvent.ticketLink}
                className="inline-flex items-center bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition duration-300"
              >
                <FaTicketAlt className="mr-2" /> Get Tickets / More Info
              </a>
            </div>
          </div>
        </Section>
      )}

      {/* Upcoming Events Section with Filters */}
      <Section title="Upcoming Events" id="upcoming-events" bgColor="bg-white">
        <div className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <label htmlFor="search-event" className="block text-sm font-medium text-gray-700 mb-1">Search Events</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="search-event"
                  placeholder="Search by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="filter-category" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
              <div className="relative">
                <select 
                  id="filter-category"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary appearance-none bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="community">Community</option>
                  <option value="youth">Youth</option>
                  <option value="worship">Worship</option>
                  <option value="outreach">Outreach</option>
                  <option value="special">Special Events</option>
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => <EventCard key={event.id} event={event} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No events match your current filters. Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </Section>

      {/* Call to Action Section */}
      <Section title="Host or Suggest an Event" bgColor="bg-primary" textColor="text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-8">
            Have an idea for an event that would bless our community or church family? Or perhaps you'd like to volunteer to help with existing events? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
              href="/contact" // Link to contact page or a specific form
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300"
              >
              Suggest an Event
              </a>
              <a
              href="/connect#volunteer" // Link to volunteer section on connect page
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-primary transition duration-300"
              >
              Volunteer for Events
              </a>
          </div>           
        </div>
      </Section>

    </div>
  );
};

export default EventsPage;
