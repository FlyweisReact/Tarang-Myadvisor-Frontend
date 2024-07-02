/** @format */

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = (WrappedComponent) => {
  return (props) => (
    <section className="homepage user-dashboard">
      <Navbar />
      <div className="margin-div layout">
        <Sidebar />
        <div className="remains">
          <WrappedComponent {...props} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DashboardLayout;
