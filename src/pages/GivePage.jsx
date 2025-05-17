import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandHoldingUsd, FaCreditCard, FaMobileAlt, FaRegEnvelope, FaQuestionCircle, FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const GivePage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount("custom");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 md:py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Give</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Your generosity makes a difference in our church and community. Thank you for your faithful support.
          </p>
          <a 
            href="#give-now" 
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
          >
            Give Now
          </a>
        </div>
      </section>

      {/* Giving Options Section */}
      <section ref={addToRefs} className="py-16 md:py-24" id="give-now">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple convenient ways to give, allowing you to support our ministry in a way that works best for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Giving Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Give Online</h3>
              
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">Select Amount</label>
                <div className="grid grid-cols-3 gap-3">
                  {['20', '50', '100', '250', '500', '1000'].map((amount) => (
                    <button 
                      key={amount}
                      onClick={() => handleAmountClick(amount)}
                      className={`py-3 rounded-md font-semibold transition-colors ${
                        donationAmount === amount 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4">
                  <label className="block text-gray-700 font-semibold mb-2">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input 
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      onClick={() => setDonationAmount('custom')}
                      className={`w-full pl-8 pr-4 py-3 border ${
                        donationAmount === 'custom' 
                          ? 'border-blue-600' 
                          : 'border-gray-300'
                      } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">Payment Method</label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors ${
                      paymentMethod === 'card' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <FaCreditCard className="mr-2" /> Card
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('mobile')}
                    className={`py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors ${
                      paymentMethod === 'mobile' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <FaMobileAlt className="mr-2" /> Mobile
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('bank')}
                    className={`py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors ${
                      paymentMethod === 'bank' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <FaRegEnvelope className="mr-2" /> Bank
                  </button>
                </div>
              </div>
              
              {/* Giving Frequency */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">Giving Frequency</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="one-time">One-time Gift</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
              
              {/* Submit Button */}
              <button className="w-full bg-blue-600 text-white py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors">
                Complete Donation
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Your transaction is secure and encrypted.
              </p>
            </div>
            
            {/* Additional Giving Methods */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Other Ways to Give</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaHandHoldingUsd className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">In Person</h4>
                      <p className="text-gray-600">
                        You can give during our worship services by placing your gift in the offering baskets.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">By Mail</h4>
                      <p className="text-gray-600">
                        Send checks to:<br />
                        Call2Prayer Church<br />
                        Mbale City, Kakungulu Drive<br />
                        Half London Area, Uganda
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMobileAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Mobile Money</h4>
                      <p className="text-gray-600">
                        Send your gift via mobile money to:<br />
                        MTN: 0777 123 456<br />
                        Airtel: 0700 123 456
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaQuestionCircle className="text-yellow-500 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg text-yellow-800">Need Assistance?</h4>
                    <p className="text-yellow-700">
                      If you have questions about giving or need help with your donation, please contact our finance team at finance@calltoprayer.org or call (123) 456-7890.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Give Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Why We Give</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Giving is an act of worship and an expression of gratitude for God's generosity toward us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Biblical Foundation</h3>
              <p className="text-gray-600 mb-4">
                Scripture teaches us that giving is an important spiritual discipline. We give because God first gave to us.
              </p>
              <p className="text-gray-500 italic">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Local Impact</h3>
              <p className="text-gray-600 mb-4">
                Your giving supports our church ministries, facilities, staff, and outreach efforts in our local community.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>Youth and children's programs</li>
                <li>Worship and technical resources</li>
                <li>Community outreach events</li>
                <li>Building maintenance and improvements</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Global Mission</h3>
              <p className="text-gray-600 mb-4">
                A portion of every gift goes to support our global missions partners, bringing hope and assistance to people around the world.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>Missionary support</li>
                <li>Church planting initiatives</li>
                <li>Humanitarian aid and disaster relief</li>
                <li>Educational and medical programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Accountability Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">Financial Accountability</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to being good stewards of every gift given to Call2Prayer Church.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Financial team meeting" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Transparent Reporting</h3>
                <p className="text-gray-600">
                  We provide regular financial updates to our congregation and maintain open books. Annual reports are available to church members.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Oversight and Accountability</h3>
                <p className="text-gray-600">
                  Our finance team and church board provide oversight of all church finances. We follow strict financial protocols and undergo regular audits.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Financial Integrity</h3>
                <p className="text-gray-600">
                  We are committed to the highest standards of financial integrity and responsible stewardship of the resources entrusted to us.
                </p>
              </div>
              
              <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-4">
                View Annual Report <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Giving Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear how your generosity is making a difference in the lives of others.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
              <FaHandHoldingHeart className="absolute top-0 left-10 transform -translate-y-1/2 text-blue-600 text-4xl bg-white p-2 rounded-full" />
              
              <div className="pt-6">
                <p className="text-gray-600 mb-6 text-lg italic">
                  "Through the generosity of our church, we were able to build a fresh water well in a village that previously had no access to clean water. Now, hundreds of families have safe drinking water and an opportunity to hear about the living water of Jesus Christ."
                </p>
                
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Testimonial Author" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">James Wilson</h4>
                    <p className="text-gray-500">Missions Team Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={addToRefs} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800">
            Partner with Us in Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Your faithful giving helps us reach more people with the message of hope and transformation through Jesus Christ.
          </p>
          <a 
            href="#give-now" 
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Give Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default GivePage;
