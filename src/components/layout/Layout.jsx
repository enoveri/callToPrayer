import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow bg-sky-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
