import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaChurch, FaPrayingHands, FaBookOpen, FaUsers, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger when 80% of the section is visible
            toggleActions: "play none none none",
          },
        }
      );
    });
    // Refresh ScrollTrigger to ensure proper calculations after initial render
    ScrollTrigger.refresh();
     return () => {
      // Kill ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  // Core Values data
  const coreValues = [
    {
      title: "Biblical Authority",
      description: "We believe the Bible is God's inspired Word and the ultimate authority for our faith and practice.",
      icon: <FaBookOpen className="text-4xl mb-4 text-blue-600" />
    },
    {
      title: "Authentic Worship",
      description: "We pursue genuine encounters with God through passionate, Spirit-led worship that transforms hearts.",
      icon: <FaPrayingHands className="text-4xl mb-4 text-blue-600" />
    },
    {
      title: "Meaningful Community",
      description: "We foster deep relationships where people are known, loved, and can grow together in faith.",
      icon: <FaUsers className="text-4xl mb-4 text-blue-600" />
    },
    {
      title: "Compassionate Service",
      description: "We demonstrate Christ's love by serving others with humility, generosity and practical care.",
      icon: <FaHandHoldingHeart className="text-4xl mb-4 text-blue-600" />
    }
  ];
  
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Pastor John Doe",
      role: "Lead Pastor",
      bio: "Pastor John has led our church for over 15 years with a passion for biblical teaching and discipleship. He and his wife Sarah have three children.",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pastor Emily Johnson",
      role: "Worship Pastor",
      bio: "Emily oversees our worship ministry with a heart for creating authentic worship experiences. She has served in ministry for 12 years.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pastor Michael Chen",
      role: "Community Life Pastor",
      bio: "Pastor Michael leads our small groups ministry and pastoral care team. His focus is on building meaningful connections within our church family.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pastor Rebecca Wilson",
      role: "Children's Pastor",
      bio: "With a background in education, Rebecca brings creativity and biblical foundation to our thriving children's ministry program.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Our beliefs expanded
  const beliefs = [
    {
      title: "The Scriptures",
      description: "The Bible is the inspired, infallible Word of God, the supreme authority in all matters of faith and conduct. It is without error in its original writings.",
      scripture: "2 Timothy 3:16-17"
    },
    {
      title: "The Trinity",
      description: "There is one God, eternally existing in three persons: Father, Son, and Holy Spirit. Each possesses all the attributes of deity and deserves our worship and obedience.",
      scripture: "Matthew 28:19"
    },
    {
      title: "Jesus Christ",
      description: "Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, died on the cross as atonement for our sins, and rose bodily from the dead.",
      scripture: "John 1:14"
    },
    {
      title: "Salvation",
      description: "Salvation is a free gift of God, received by faith in Jesus Christ alone. It cannot be earned through good works but leads to a life of good works.",
      scripture: "Ephesians 2:8-10"
    },
    {
      title: "The Holy Spirit",
      description: "The Holy Spirit indwells all believers, empowering them to live godly lives and equipping them with gifts for service and ministry.",
      scripture: "1 Corinthians 12:7"
    },
    {
      title: "The Church",
      description: "The Church is the Body of Christ, comprising all believers, called to worship God, grow in faith, and share the gospel with the world.",
      scripture: "Ephesians 4:11-16"
    }
  ];

  // Timeline milestones for church history
  const historyMilestones = [
    {
      year: "2005",
      title: "Humble Beginnings",
      description: "Started as a small prayer group meeting in the founder's living room with just 12 people."
    },
    {
      year: "2008",
      title: "First Official Service",
      description: "Moved to a rented school auditorium and held our first Sunday service with 75 attendees."
    },
    {
      year: "2012",
      title: "Community Outreach Launch",
      description: "Began our first major community outreach programs, serving over 500 families in need."
    },
    {
      year: "2015",
      title: "Current Building",
      description: "Purchased and renovated our current worship center, providing a permanent home for our growing congregation."
    },
    {
      year: "2018",
      title: "Multisite Expansion",
      description: "Launched our first satellite campus to reach more people in neighboring communities."
    },
    {
      year: "2022",
      title: "Global Missions",
      description: "Established partnerships with ministries in five countries to support global missions efforts."
    }
  ];

  return (
      <div className="pt-20 md:pt-28 pb-16 bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section 
          ref={addToRefs} 
          className="relative bg-cover bg-center text-white py-24 md:py-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
                About Call To Prayer
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300 leading-relaxed">
                We are a vibrant church family dedicated to authentic worship, transformative teaching, 
                and compassionate service. Here, you'll discover our heart, our mission, and the community that makes us who we are.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#our-story" className="bg-white text-blue-800 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-semibold">
                  Our Story
                </a>
                <a href="#beliefs" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg font-semibold">
                  What We Believe
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section with Timeline */}
        <section ref={addToRefs} className="py-16 md:py-24" id="our-story">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-4">
                <FaChurch className="text-5xl text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                Our Journey of Faith
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Call To Prayer began with a simple vision: to create a space where people from all walks of life can encounter God, 
                grow in their faith, and find a loving community. From humble beginnings in 2005, we have seen God's faithfulness guide us, 
                allowing us to impact lives and serve our community with compassion and dedication.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our story is one of answered prayers, transformed lives, and a relentless pursuit of God's purpose. Each step of our 
                journey reflects God's provision and the dedicated service of countless individuals who have contributed to our church family.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto pt-10 pb-8">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline events */}
              <div className="space-y-24">
                {historyMilestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Date bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-blue-100 z-10 flex items-center justify-center text-white font-bold">
                      <span className="hidden md:inline">{milestone.year.substring(2)}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                      <div className={`${
                        index % 2 === 0 ? 'ml-auto' : ''
                      } bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 max-w-md`}>
                        <div className="text-blue-600 font-bold mb-1">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - with image overlays */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1470076892663-af684e5e15af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Church mission" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    To lead people into a growing relationship with Jesus Christ by creating environments where they are encouraged 
                    and equipped to pursue:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Passionate intimacy with God through worship and prayer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Authentic community with fellow believers for growth and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Meaningful influence with those who don't yet know Christ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Compassionate service to meet the needs of our community</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1602526432604-029a709e129c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Church vision" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    To be a beacon of hope and transformation, where people from all walks of life:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Experience God's presence and discover His purpose for their lives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Grow into mature disciples who reflect Christ's character</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Build a multicultural community that celebrates diversity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      <span>Impact our city and world through acts of service and evangelism</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do as a church community, from our worship services to our ministry programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                >
                  {value.icon}
                  <h3 className="text-xl font-bold mb-3 text-blue-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Beliefs Section - Expanded */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-white" id="beliefs">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <FaBookOpen className="text-5xl text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                What We Believe
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our beliefs are rooted in the historical Christian faith and centered on the gospel of Jesus Christ.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{belief.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{belief.description}</p>
                  <p className="text-blue-600 text-sm font-medium">{belief.scripture}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/connect" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Learn more about our full statement of faith <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Our dedicated team of pastors and leaders are committed to serving our congregation and community with integrity and love.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-blue-900">{leader.name}</h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">{leader.role}</p>
                    <p className="text-gray-600 text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about/staff" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Meet Our Full Team
              </Link>
            </div>
          </div>
        </section>
        
        {/* Join Us Section - Stats and Numbers */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                For over 20 years, we have been serving our community and helping people grow in their faith journey.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">20+</div>
                <div className="text-sm md:text-base opacity-75">Years of Ministry</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">1,200+</div>
                <div className="text-sm md:text-base opacity-75">Weekly Attendees</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">45+</div>
                <div className="text-sm md:text-base opacity-75">Small Groups</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">12</div>
                <div className="text-sm md:text-base opacity-75">Outreach Programs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Whether you're new to faith, looking for a church home, or want to get more involved, 
              we're excited to connect with you and help you find your place in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/visit" className="inline-block bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg shadow-lg">
                Plan Your Visit
              </Link>
              <Link to="/connect" className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                Get Connected
              </Link>
              <Link to="/grow" className="inline-block bg-white text-blue-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg">
                Start Growing
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutPage;
