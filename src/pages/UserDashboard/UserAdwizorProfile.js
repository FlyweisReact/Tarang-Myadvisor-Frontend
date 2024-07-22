/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  cancelSvg,
  customerReview1,
  customerReview2,
  userImg,
} from "../../assest";
import { BlogCard } from "../../components/Cards/AllCards";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderCustomerReviewsCard } from "../../components/Sliders/SwiperComponents";
import { customerReviewConfig } from "../../components/Sliders/SwiperConfig";
import { documentTabArr } from "../../constant/constant";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const companyDetails = [
  ["Name", "Vajra Institute"],
  ["Subject", "MBA, Arts"],
  ["Course Admmission", "Yes"],
  ["Role", "Manager"],
  ["Experience", "2 Years"],
  ["CTC", "8LPA"],
  ["Language", "English , Hindi"],
];

const basicDetails = {
  first: [
    ["Full Name", "Vandana"],
    ["D.O.B", "12-09-2000"],
    ["Gender", "Female"],
    ["Marital Status", "No"],
  ],
  second: [
    ["Mobile", "+911234567890"],
    ["Email", "Darshini@gmail.com"],
    ["City", "Banglore"],
    ["State", "Karnataka"],
  ],
};

const mainStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  maxHeight: "100%",
  overflowY: "auto",
  padding: 0,
  borderRadius: 0,
};

const data = [
  {
    img: customerReview1,
    title: "Floyd Miles",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
  },
  {
    img: customerReview2,
    title: "Ronald Richards",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
  },
  {
    img: customerReview1,
    title: "Floyd Miles",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
  },
  {
    img: customerReview2,
    title: "Ronald Richards",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
  },
];

const ExtraComponent = () => {
  return (
    <div className="navigation-container">
      <div className="prev-btn">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="next-btn">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

const UserAdwizorProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="user-homePage mt-3">
      <div className="heading">
        <p>Adwizor Profile</p>
        <button
          className="outlined"
          onClick={() => navigate(-1)}
          style={{ border: "1px solid #0185C3", color: "#0185C3" }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="user-dashboard-profile mt-3 mb-3 p-2">
        <div className="basic-details mt-3 mb-3">
          <img src={userImg} alt="" className="user-img" />
          <div className="content">
            <h4>Basic Details</h4>
            {basicDetails?.first.map((i, index) => (
              <div className="item" key={`basicDetail${index}`}>
                <p> {i[0]} </p>
                <p> {i[1]} </p>
              </div>
            ))}
          </div>
          <div className="blank" />
          <div className="content">
            <h4>Contact Details</h4>
            {basicDetails?.second.map((i, index) => (
              <div className="item" key={`basicDetail${index}`}>
                <p> {i[0]} </p>
                <p> {i[1]} </p>
              </div>
            ))}
          </div>
        </div>

        <div className="cards">
          <div className="Item">
            <h5>Company Details</h5>
            <div className="content">
              {companyDetails.map((i, index) => (
                <div className="detail" key={`companyDetails${index}`}>
                  <p>{i[0]} </p>
                  <p>{i[1]} </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="document-tab mt-5" style={mainStyle}>
          <h4>Mandatory Documents</h4>
          <div className="document-tracker">
            {documentTabArr.map((i, index) => (
              <div className="item" key={`documents${index}`}>
                <p> {i.title} </p>

                <div className="added">
                  <p>Added : </p>
                  <button>
                    {i.added} <img src={cancelSvg} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rating-reviews mt-5">
          <h5 className="title">Rating & Reviews</h5>
          <p className="desc">
            Don’t take our word for it. Trust our customers
          </p>

          <div className="slider-container">
            <Slider
              data={data}
              swiperConfig={customerReviewConfig}
              RenderSlide={RenderCustomerReviewsCard}
              ExtraComponent={ExtraComponent}
            />
          </div>
        </div>

        <div className="user-blogs mt-5">
          <h5 className="blog-heading">Blogs</h5>
          <p className="blog-desc">
            {" "}
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            o
          </p>

          <div className="cards">
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserAdwizorProfile);
