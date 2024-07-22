/** @format */

import React from "react";
import Footer from "../../components/Footer/Footer";
import AdwizorNav from "./Navbar/AdwizorNav";
import Sidebar from "./Sidebar/Sidebar";

const AdwizorLayout = (WrappedComponent) => {
  return (props) => (
    <section className="homepage user-dashboard">
      <AdwizorNav />
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

export default AdwizorLayout;
