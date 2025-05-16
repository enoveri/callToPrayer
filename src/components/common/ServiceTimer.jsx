import React, { useState, useEffect } from "react";
import "../../styles/serviceTimer.css";

const ServiceTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set next service time - for example, next Sunday at 9:00 AM
    const calculateNextService = () => {
      const now = new Date();
      const nextService = new Date();

      // Set to next Sunday
      nextService.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      // Set time to 9:00 AM
      nextService.setHours(9, 0, 0, 0);

      // If it's already past 9:00 AM on Sunday, set to next Sunday
      if (now.getDay() === 0 && now.getHours() >= 9) {
        nextService.setDate(nextService.getDate() + 7);
      }

      return nextService;
    };

    const nextService = calculateNextService();

    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextService - now;

      if (difference <= 0) {
        // If we've reached the service time, recalculate for next service
        clearInterval(timer);
        const newNextService = calculateNextService();
        setTimeLeft(calculateTimeLeft(newNextService));
      } else {
        setTimeLeft(calculateTimeLeft(nextService));
      }
    }, 1000);

    // Clean up interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-blue-800 text-white py-3 shadow-lg border-t-2 border-blue-500 slide-up">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
          <span className="font-semibold mr-2">
            NEXT LIVE SERVICE BEGINS IN:
          </span>
          <div className="bg-blue-900 px-2 py-1 rounded">
            {String(timeLeft.days).padStart(2, "0")}
            <span className="text-xs ml-1">DAY</span>
          </div>
          <span className="font-bold pulse-animation">:</span>
          <div className="bg-blue-900 px-2 py-1 rounded">
            {String(timeLeft.hours).padStart(2, "0")}
            <span className="text-xs ml-1">HRS</span>
          </div>
          <span className="font-bold pulse-animation">:</span>
          <div className="bg-blue-900 px-2 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, "0")}
            <span className="text-xs ml-1">MIN</span>
          </div>
          <span className="font-bold pulse-animation">:</span>
          <div className="bg-blue-900 px-2 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, "0")}
            <span className="text-xs ml-1">SEC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTimer;
