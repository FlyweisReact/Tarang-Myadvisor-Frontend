/** @format */

import React from "react";
import Footer from "../../../components/Footer/Footer";
import { BannerSearchComponent } from "../../../components/HelpingComponents";
import CollegeNavbar from "../Navbar/CollegeNavbar";

const CollegePageLayout = ({ WrappedComponent }) => {
  return (props) => (
    <section className="homepage pt-0">
      <CollegeNavbar Children={BannerSearchComponent} />
      <WrappedComponent {...props} />
      <Footer />
    </section>
  );
};

export default CollegePageLayout;
