/** @format */

import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const WrappedComponent = ({ WrappedComponent }) => {
  return (props) => (
    <section className="homepage pt-0">
      <Navbar  />
      <WrappedComponent {...props} />
      <Footer />
    </section>
  );
};

export default WrappedComponent;
