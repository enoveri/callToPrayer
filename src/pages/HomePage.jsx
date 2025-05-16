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
      <ServiceTimes />
      <Welcome />
      <LatestMessages />
      <UpcomingEvents />
      <Connect />
    </Layout>
  );
};

export default HomePage;
