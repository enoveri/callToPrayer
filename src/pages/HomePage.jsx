import React from "react";
import Hero from "../components/home/Hero";
import ServiceTimes from "../components/home/ServiceTimes";
import Welcome from "../components/home/Welcome";
import LatestMessages from "../components/home/LatestMessages";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Connect from "../components/home/Connect";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      {/* <ServiceTimes /> */}
      <Welcome />
      {/* Container for LatestMessages and UpcomingEvents */}
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/2">
            <LatestMessages />
          </div>
          <div className="lg:w-1/2">
            <UpcomingEvents />
          </div>
        </div>
      </div>
      <Connect />
    </Layout>
  );
};

export default HomePage;
