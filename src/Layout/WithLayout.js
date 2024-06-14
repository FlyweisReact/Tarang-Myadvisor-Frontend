/** @format */

import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const WithLayout = (WrappedComponent) => {
  return (props) => (
    <section className="homepage">
      <Navbar />
      <WrappedComponent {...props} />
      <Footer />
    </section>
  );
};

export default WithLayout;
