/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderUniversityCards } from "../../components/Sliders/SwiperComponents";
import { topAdwizorsConfig } from "../../components/Sliders/SwiperConfig";
import { userProfileTab } from "../../constant/constant";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const ProfileTab = ({ data }) => {
  return (
    <>
      <div className="basic-details margin-div">
        <div className="edit-icon">
          <Link to="/choose-destination">
            <i class="fa-solid fa-pen-to-square"></i>
          </Link>
        </div>
        <div className="main-container">
          <img src={data?.image} alt="" className="user-img" />
          <div className="content">
            <h4>Basic Details</h4>
            <div className="item">
              <p>Full Name</p>
              <p> {data?.fullname} </p>
            </div>
            <div className="item">
              <p>D.O.B</p>
              <p> {data?.dob} </p>
            </div>
            <div className="item">
              <p>Gender</p>
              <p> {data?.gender} </p>
            </div>
            <div className="item">
              <p>Martial Status</p>
              <p> {data?.martialStatus} </p>
            </div>
          </div>
          <div className="blank" />
          <div className="content">
            <h4>Contact Details</h4>
            <div className="item">
              <p>Mobile</p>
              <p> {data?.phone} </p>
            </div>
            <div className="item">
              <p>Email</p>
              <p> {data?.email} </p>
            </div>
            <div className="item">
              <p>City</p>
              <p>{data?.city}</p>
            </div>
            <div className="item">
              <p>State</p>
              <p>{data?.state}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="Item">
          <h5>Study Preffered</h5>
          <div className="content">
            <div className="detail">
              <p>Study Level</p>
              <p> {data?.preferredDegree} </p>
            </div>
            <div className="detail">
              <p>Course Admmission</p>
              <p> {data?.alreadyUniversityAdmit} </p>
            </div>
          </div>
        </div>
        <div className="Item">
          <h5>Intakes</h5>
          <div className="content">
            <div className="detail">
              <p>Intake</p>
              <p> {data?.preferredIntake} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddressTab = ({ data }) => {
  return (
    <>
      <div className="notes margin-div">
        <div className="item">
          <div className="content">
            <h5>Addresses</h5>
            <ul>
              {data?.map((i, index) => (
                <li key={`address${index}`}>
                  {" "}
                  {i?.destinationCountry} , {i?.city} , {i?.state}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const UniversityTab = ({ data }) => {
  const universityArr =
    data?.length > 0
      ? data?.map((i) => ({
          id: i?._id,
          img: i?.ImageUrl?.[0],
          collegeName: i?.UniversityName,
          subject: i?.CourseTitle,
          description: [
            {
              title: "Location",
              desc: i?.location,
            },
            {
              title: "Campus city",
              desc: i?.campusName,
            },
            {
              title: "Gross tuition fee",
              desc: i?.grossTuition,
            },
            {
              title: "Application fee",
              desc: `$${i?.applicationFee}`,
            },
            {
              title: "Duration",
              desc: i?.programLength,
            },
          ],
        }))
      : [];

  return (
    <>
      <div className="univeristy-tab margin-div">
        <h4>My Universities</h4>
        {universityArr?.length > 0 && (
          <div className="my-slider">
            <Slider
              RenderSlide={RenderUniversityCards}
              data={universityArr}
              swiperConfig={topAdwizorsConfig}
            />
          </div>
        )}
      </div>
    </>
  );
};

const UserProfile = () => {
  const [activeTab, setActveTab] = useState("Profile Overview");
  const [profileData, setProfileData] = useState({});
  const [address, setAddress] = useState({});
  const [allUniversities, setAllUniversities] = useState({
    data: {
      universities: {},
    },
  });

  useEffect(() => {
    getApi(endPoints.getUserProfile, {
      setResponse: setProfileData,
    });
    getApi(endPoints.getUserAddress, {
      setResponse: setAddress,
    });
    getApi(endPoints.getAllUniversities(1, 50), {
      setResponse: setAllUniversities,
    });
  }, []);

  const renderComponent = () => {
    switch (activeTab) {
      case "Profile Overview":
        return <ProfileTab data={profileData?.data} />;

      case "Addresses":
        return <AddressTab data={address?.data} />;

      case "My Universities":
        return <UniversityTab data={allUniversities.data.universities} />;

      default:
        return <ProfileTab />;
    }
  };

  return (
    <section className="user-homePage margin-div with-bg-img">
      <div className="user-dashboard-profile">
        <div className="tab">
          <ul>
            {userProfileTab.map((i, index) => (
              <li
                key={`tab${index}`}
                className={`${activeTab === i ? "active" : ""}`}
                onClick={() => setActveTab(i)}
              >
                {" "}
                {i}{" "}
              </li>
            ))}
          </ul>
        </div>
        {renderComponent()}
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserProfile);
