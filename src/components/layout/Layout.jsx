import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {/* Added pt-[104px] to account for fixed header height (HeaderTop ~40px + HeaderNav ~64px) */}
      <main className="flex-grow bg-sky-100 pt-[104px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
