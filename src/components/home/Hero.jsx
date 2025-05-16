import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image with subtle zoom animation - using a higher quality image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out"
          style={{
            backgroundImage:
              "url('https://gidudu.org/wp-content/uploads/2023/10/IMG_0578-scaled.jpg')",
            transform: isLoaded ? "scale(1.05)" : "scale(1)",
            transition: "transform 15s ease-out",
          }}
        >
          {/* Overlay with gradient for better text readability - Lakewood style */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
      </div>

      {/* Content with staggered animations - Lakewood style */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight text-center
                      ${isLoaded ? "fade-in-up" : "opacity-0"}`}
          >
            GIVING HOPE TO THE WORLD
          </h1>
          <p
            className={`text-xl md:text-2xl text-white mb-10 mx-auto font-light text-center
                      ${isLoaded ? "fade-in-up delay-200" : "opacity-0"}`}
          >
            At Call2Prayer, we believe your best days are still out in front of
            you. Whether you are joining us in person or online, we invite you
            to experience our services and be a part of the Call2Prayer family.
            The Bible says when you are planted in the house of the Lord, you
            will flourish. Get ready to step into a new level of your destiny!
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6
                      ${isLoaded ? "fade-in-up delay-400" : "opacity-0"}`}
          >
            <Link
              to="/watch"
              className="bg-blue-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-900 transition-all hover:scale-105 transform flex items-center justify-center"
            >
              Watch Online <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/connect"
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 transform"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator - more subtle, Lakewood style */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer
                   ${isLoaded ? "fade-in-up delay-500" : "opacity-0"}`}
        onClick={() => {
          const servicesSection = document.querySelector("#services-section");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="w-10 h-14 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full animate-bounce mt-1"></div>
        </div>
        <p className="text-white/80 text-sm mt-2 text-center font-light">
          Scroll Down
        </p>
      </div>
    </section>
  );
};

export default Hero;
