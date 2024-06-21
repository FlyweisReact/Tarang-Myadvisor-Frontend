/** @format */

import React from "react";
import {
  adwizorImg1,
  adwizorImg2,
  adwizorImg3,
  adwizorImg4,
  adwizorImg5,
  adwizorImg6,
  collegeIcon,
  rankingIcon,
} from "../assest";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonial";
import AdwizorBanner from "../components/Home/AdwizorBanner";
import HowItWorks from "../components/Home/HowItWorks";
import TableLayout from "../components/TableLayout";
import SynopsisSlider from "../components/Home/SynopsisSlider";
import StudentTestimonial from "../components/Home/StudentTestimonial";
import AdwizorBlogs from "../components/Home/AdwizorBlogs";
import OurSuccess from "../components/Home/OurSuccess";
import WithLayout from "../Layout/WithLayout";
import { AdwizorCards } from "../components/HelpingComponents";

const topAdvizors = [
  {
    img: adwizorImg1,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg2,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "5+ Years (Civils).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg3,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg4,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg5,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg6,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
];
const thead = [
  "CH Rank",
  "College",
  "Ranking",
  "Application Date",
  "Fees",
  "Cutoff",
];
const tbody = [
  [
    "#1",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#2",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#3",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#4",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#5",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
];
const HomePage = () => {
  return (
    <>
      <AdwizorBanner />
      <AdwizorCards topAdwizor={true} topAdwizorData={topAdvizors} />
      <HowItWorks />
      <Features />
      <Testimonial />
      <section className="college-table">
        <div className="head">
          <h4 className="normal-heading">Top 10 Featured Colleges</h4>
          <a href="/">View All</a>
        </div>
        <div className="destination">
          <ul>
            <li className="active">
              <i className="fa-solid fa-bars-staggered"></i>Destinations
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>India</li>
            <li>Australia</li>
            <li>Uk</li>
            <li>Australia</li>
          </ul>
        </div>
        <TableLayout thead={thead} tbody={tbody} className="college-table" />
      </section>

      <section className="margin-div">
        <h4 className="normal-heading"> Destination Synopsis / Summary</h4>
        <SynopsisSlider />
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">What Students say about us? </h4>
        <StudentTestimonial />
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">Our Adwizors blogs </h4>
        <AdwizorBlogs />
        <button className="view-more-btn mt-4">View More</button>
      </section>

      <section className="margin-div">
        <OurSuccess />
      </section>
    </>
  );
};

export default WithLayout(HomePage);
