import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  return (
    <Layout>
      <div className="pt-20 md:pt-28 pb-16 bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section 
          ref={addToRefs} 
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32 text-center"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              About Call To Prayer
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              Discover our heart, our mission, and the community that makes us who we are. 
              We are dedicated to sharing a message of hope, faith, and love.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={addToRefs} className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
                Our Journey of Faith
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Call To Prayer began with a simple vision: to create a space where people from all walks of life can encounter God, 
                grow in their faith, and find a loving community. From humble beginnings, we have seen God's faithfulness guide us, 
                allowing us to impact lives and serve our city with compassion and dedication.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our story is one of answered prayers, transformed lives, and a relentless pursuit of God's purpose. We are excited 
                about what the future holds as we continue to build on this foundation of faith.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  To lead people into a growing relationship with Jesus Christ by creating environments where they are encouraged 
                  and equipped to pursue intimacy with God, community with insiders, and influence with outsiders.
                </p>
                <img src="https://placehold.co/600x400/EBF4FF/3B82F6?text=Our+Mission+Visual" alt="Our Mission" className="rounded-lg shadow-xl mt-6"/>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  To be a beacon of hope and a center for spiritual growth, reaching our city and the world with the life-transforming 
                  message of Jesus. We envision a vibrant, multicultural community of believers actively impacting the world for Christ.
                </p>
                <img src="https://placehold.co/600x400/EBF4FF/3B82F6?text=Our+Vision+Visual" alt="Our Vision" className="rounded-lg shadow-xl mt-6"/>
              </div>
            </div>
          </div>
        </section>

        {/* Core Beliefs Section */}
        <section ref={addToRefs} className="py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-800">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">The Scriptures</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Bible is the inspired Word of God, our infallible guide for faith and life.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">The Trinity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">Salvation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Salvation is a free gift from God, received through faith in Jesus Christ and His atoning sacrifice.
                </p>
              </div>
            </div>
            <a href="/connect" className="mt-12 inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-lg">
              Learn More About Our Beliefs
            </a>
          </div>
        </section>

        {/* Leadership Section (Placeholder) */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our dedicated team of pastors and leaders are committed to serving our congregation and community with integrity and love. 
              We are here to guide, support, and inspire you on your spiritual journey.
            </p>
            {/* Future: Add a link to a dedicated leadership page or a small gallery */}
            <img src="https://placehold.co/800x400/D1E2FF/3B82F6?text=Our+Leadership+Team" alt="Leadership Team" className="rounded-lg shadow-xl mx-auto"/>
          </div>
        </section>

        {/* Call to Action Section */}
        <section ref={addToRefs} className="py-16 md:py-24 bg-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Whether you're new to faith, looking for a church home, or want to get more involved, we're excited to connect with you.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <a href="/visit/plan-your-visit" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Plan Your Visit
              </a>
              <a href="/connect" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg">
                Get Connected
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default AboutPage;
