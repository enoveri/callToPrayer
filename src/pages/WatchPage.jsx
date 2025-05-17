import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaPlayCircle, FaCalendarAlt, FaClock, FaTag, FaPlay, FaArrowLeft, FaThumbsUp, FaUser, FaYoutube, FaPodcast, FaSpotify, FaApple, FaDownload } from "react-icons/fa";
import ReactPlayer from "react-player/lazy"; // Using lazy loading for better performance
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sermonMessages, users } from "../data/data"; // Import data from data.js

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WatchPage = () => {
  const { messageId } = useParams();
  const sectionsRef = useRef([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [comment, setComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [currentUser, setCurrentUser] = useState(users[0]); // Simulate logged in user
  const navigate = useNavigate();
  
  // Keep track of refs for animations
  sectionsRef.current = [];

  // Set up GSAP animations
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add elements to refs for animation
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Handle messageId changes to show the selected sermon
  useEffect(() => {
    if (messageId) {
      const message = sermonMessages.find(msg => msg.id === parseInt(messageId));
      if (message) {
        setSelectedMessage(message);
        window.scrollTo(0, 0);
      } else {
        navigate("/watch", { replace: true });
      }
    } else {
      setSelectedMessage(null);
    }
  }, [messageId, navigate]);

  // Extract all unique categories from sermons
  const allCategories = ["All", ...new Set(sermonMessages.flatMap(message => message.categories || []))];

  // Filter messages by selected category
  const filteredMessages = filterCategory === "All" 
    ? sermonMessages 
    : sermonMessages.filter(message => message.categories.includes(filterCategory));

  // Add a new comment to a message
  const handleAddComment = () => {
    if (!comment.trim() || !selectedMessage) return;

    const newComment = {
      id: Date.now(),
      userId: currentUser.id,
      username: currentUser.username,
      text: comment,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };

    // Update the sermon message with the new comment
    const updatedMessage = {
      ...selectedMessage,
      comments: [...selectedMessage.comments, newComment]
    };

    // Find the index of the message to update
    const messageIndex = sermonMessages.findIndex(msg => msg.id === selectedMessage.id);
    if (messageIndex !== -1) {
      sermonMessages[messageIndex] = updatedMessage;
      setSelectedMessage(updatedMessage);
      setComment("");
      setIsCommenting(false);
    }
  };

  // Handle liking a comment
  const handleLikeComment = (commentId) => {
    if (!selectedMessage) return;

    // Find the comment and update its likes
    const updatedComments = selectedMessage.comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });

    // Update the sermon message with the updated comments
    const updatedMessage = {
      ...selectedMessage,
      comments: updatedComments
    };

    // Find the index of the message to update
    const messageIndex = sermonMessages.findIndex(msg => msg.id === selectedMessage.id);
    if (messageIndex !== -1) {
      sermonMessages[messageIndex] = updatedMessage;
      setSelectedMessage(updatedMessage);
    }
  };

  // Check if we are in sermon detail view
  const isDetailView = !!selectedMessage;

  // Generate formatted date from ISO string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Placeholder for live service check (could be tied to actual schedule)
  const isServiceLive = false;
  const currentLiveStreamUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <div className="pt-20 md:pt-28 pb-16 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      {!isDetailView && (
        <section 
          ref={addToRefs} 
          className="bg-cover bg-center text-white py-20 md:py-32 text-center relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {isServiceLive ? "Join Our Live Service" : "Experience Life-Changing Messages"}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {isServiceLive 
                ? "We're streaming right now! Join hundreds of others experiencing God's presence together."
                : "Explore our library of powerful sermons that will inspire, challenge, and strengthen your faith."
              }
            </p>
            {isServiceLive ? (
              <a 
                href="#live-stream"
                className="inline-block bg-yellow-500 text-blue-900 font-semibold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-xl shadow-lg transform hover:scale-105"
              >
                <FaPlayCircle className="inline mr-2" /> Watch Live Now
              </a>
            ) : (
              <a 
                href="#featured-message"
                className="inline-block bg-yellow-500 text-blue-900 font-semibold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-xl shadow-lg transform hover:scale-105"
              >
                <FaPlayCircle className="inline mr-2" /> Watch Latest Message
              </a>
            )}
          </div>
        </section>
      )}

      {/* Live Stream Section (Conditional) */}
      {isServiceLive && !isDetailView && (
        <section id="live-stream" ref={addToRefs} className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <span className="inline-flex items-center text-red-600 font-semibold mb-2">
                <span className="h-3 w-3 bg-red-600 rounded-full mr-2 animate-pulse"></span> LIVE NOW
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Sunday Morning Worship Service
              </h2>
              <p className="text-gray-300 mt-2">Join us for worship, prayer, and an inspiring message</p>
            </div>
            
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden">
              <ReactPlayer
                url={currentLiveStreamUrl}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                playsinline={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* Sermon Detail View */}
        {isDetailView ? (
          <div ref={addToRefs}>
            {/* Back button */}
            <button 
              onClick={() => navigate("/watch")}
              className="flex items-center text-blue-700 hover:text-blue-900 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Messages
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden mb-8">
              <ReactPlayer
                url={selectedMessage.videoUrl}
                width="100%"
                height="100%"
                controls={true}
                playsinline={true}
              />
            </div>

            {/* Message Info */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{selectedMessage.title}</h1>
              
              <div className="flex flex-wrap items-center text-gray-600 mb-6">
                <div className="mr-6 mb-2 flex items-center">
                  <FaUser className="mr-2 text-blue-700" /> {selectedMessage.preacher}
                </div>
                <div className="mr-6 mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-700" /> {formatDate(selectedMessage.date)}
                </div>
                <div className="mr-6 mb-2 flex items-center">
                  <FaClock className="mr-2 text-blue-700" /> {selectedMessage.duration}
                </div>
                <div className="flex items-center">
                  <FaTag className="mr-2 text-blue-700" /> {selectedMessage.categories.join(", ")}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-2">Scripture: <span className="font-normal">{selectedMessage.scripture}</span></h3>
                <p className="text-gray-700 leading-relaxed">{selectedMessage.description}</p>
              </div>

              {/* Comments Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  Comments <span className="ml-2 text-gray-500 text-sm font-normal">({selectedMessage.comments.length})</span>
                </h3>
                
                {/* Comment Form */}
                {currentUser && (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    {isCommenting ? (
                      <div>
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring focus:ring-blue-200 focus:outline-none"
                          rows="3"
                          placeholder="Share your thoughts..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 transition-colors"
                            onClick={() => setIsCommenting(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                            onClick={handleAddComment}
                            disabled={!comment.trim()}
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setIsCommenting(true)}
                      >
                        Add a comment...
                      </button>
                    )}
                  </div>
                )}
                
                {/* Comment List */}
                {selectedMessage.comments.length > 0 ? (
                  <div className="space-y-6">
                    {selectedMessage.comments.map(comment => (
                      <div key={comment.id} className="pb-5 border-b border-gray-100 last:border-none">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {/* Could add actual user images here */}
                            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-medium">
                              {comment.username.substring(0, 1)}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center mb-1">
                              <h4 className="font-medium text-gray-900">{comment.username}</h4>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{comment.text}</p>
                            <button 
                              className="text-gray-500 hover:text-blue-700 text-sm flex items-center"
                              onClick={() => handleLikeComment(comment.id)}
                            >
                              <FaThumbsUp className="mr-1" /> Like ({comment.likes})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Be the first to comment on this message!</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Sermons Listing View */
          <>
            {/* Featured Message */}
            <section id="featured-message" ref={addToRefs} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Message</h2>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto">
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img 
                      src={sermonMessages[0].thumbnailUrl} 
                      alt={sermonMessages[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link 
                        to={`/watch/${sermonMessages[0].id}`}
                        className="bg-blue-700/80 hover:bg-blue-800 text-white p-4 rounded-full transform transition-transform hover:scale-110"
                      >
                        <FaPlay className="text-2xl" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">LATEST</span>
                    <h3 className="text-2xl font-bold my-3">{sermonMessages[0].title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <FaUser className="mr-1" />
                      <span className="mr-4">{sermonMessages[0].preacher}</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>{formatDate(sermonMessages[0].date)}</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{sermonMessages[0].description}</p>
                    <Link 
                      to={`/watch/${sermonMessages[0].id}`}
                      className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold"
                    >
                      Watch Now <FaPlayCircle className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Category Filters */}
            <section ref={addToRefs} className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterCategory === category
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* All Messages Grid */}
            <section ref={addToRefs} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">All Messages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMessages.map(message => (
                  <div 
                    key={message.id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative">
                      <img 
                        src={message.thumbnailUrl} 
                        alt={message.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link 
                          to={`/watch/${message.id}`}
                          className="bg-blue-700/80 hover:bg-blue-800 text-white p-3 rounded-full transform transition-transform hover:scale-110"
                        >
                          <FaPlay />
                        </Link>
                      </div>
                      {message.categories && message.categories[0] && (
                        <span className="absolute bottom-2 left-2 bg-blue-700/80 text-white text-xs font-semibold px-2 py-1 rounded">
                          {message.categories[0]}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg line-clamp-1 mb-2">{message.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <FaUser className="mr-1" />
                        <span>{message.preacher}</span>
                      </div>
                      <div className="flex justify-between text-gray-500 text-sm mb-3">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          <span>{formatDate(message.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          <span>{message.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{message.description}</p>
                      <Link 
                        to={`/watch/${message.id}`}
                        className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center text-sm"
                      >
                        Watch Now <FaPlayCircle className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
