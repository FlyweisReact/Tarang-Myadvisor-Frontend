/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogCard } from "../../components/Cards/AllCards";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderCustomerReviewsCard } from "../../components/Sliders/SwiperComponents";
import { customerReviewConfig } from "../../components/Sliders/SwiperConfig";
import WithLayout from "../../Layout/WithLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

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
  const [profile, setProfile] = useState({ reviews: [], blogs: [] });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getApi(endPoints.user.getAdwizorProfile(id), {
      setResponse: setProfile,
    });
  }, [id]);

  const reviewsList = profile.reviews.map((i) => ({
    img: i?.userId?.image,
    rating: i?.rating,
    title: i?.userId?.fullname,
    description: i?.description,
  }));

  const blogsList = profile.blogs.map((i) => ({
    img: i?.imagePath,
    title: i?.title,
    description: i?.content,
    publishedOn: i?.createdAt?.slice(0, 10),
  }));

  return (
    <section className="user-homePage mt-3">
      <section className="adwizor-profile-section boxShadow-container margin-div">
        <div className="info">
          <img src={profile?.data?.image} alt="" className="profile-img" />
          <div className="content">
            <h4> {profile?.data?.fullname} </h4>
            <p> {profile?.data?.language} </p>
            <p>Experience : {profile?.data?.years} Years </p>
            <p> {profile?.data?.helpedStudent} </p>
            <div className="btn-container mt-3">
              <button
                className="outline"
                onClick={() =>
                  navigate(`/counselling-session/live-2/${profile?.data?._id}`)
                }
              >
                Chat
              </button>
              <button
                onClick={() =>
                  navigate(`/counselling-session/live-2/${profile?.data?._id}`)
                }
              >
                Call
              </button>
            </div>
          </div>
        </div>
        <div className="about-sec">
          <h4>About Me</h4>
          <p className="description"> {profile?.data?.aboutMe} </p>
        </div>

        {reviewsList?.length > 0 && (
          <div className="user-dashboard-profile">
            <div className="rating-reviews mt-5">
              <h5 className="title">Rating & Reviews</h5>

              <div className="slider-container">
                <Slider
                  data={reviewsList}
                  swiperConfig={customerReviewConfig}
                  RenderSlide={RenderCustomerReviewsCard}
                  ExtraComponent={ExtraComponent}
                />
              </div>
            </div>
          </div>
        )}

        {blogsList?.length > 0 && (
          <div className="user-blogs mt-5">
            <h5 className="blog-heading">Blogs</h5>
            <div className="cards">
              {blogsList.map((i, index) => (
                <BlogCard key={`blogs${index}`} {...i} />
              ))}
            </div>
          </div>
        )}
      </section>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default WithLayout(UserAdwizorProfile);
