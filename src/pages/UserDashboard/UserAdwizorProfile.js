/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import WithLayout from "../../Layout/WithLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const UserAdwizorProfile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getApi(endPoints.user.getAdwizorProfile(id), {
      setResponse: setProfile,
    });
  }, [id]);

  console.log(profile)

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
      </section>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default WithLayout(UserAdwizorProfile);
