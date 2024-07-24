/** @format */

import React, { useEffect, useState } from "react";
import {
  blankAvatar,
  cancelSvg,
  collegeRnd,
  quagAvatar,
  shareSvg,
  trashIcon,
  uploadSvg,
  userCollege,
} from "../../assest";
import {
  AdwizorCards,
  AppointmentFloatingBtn,
} from "../../components/HelpingComponents";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderUniversityCards } from "../../components/Sliders/SwiperComponents";
import { topAdwizorsConfig } from "../../components/Sliders/SwiperConfig";
import {
  allAdwiozordsArr,
  documentTabArr,
  documentTabArr2,
  userProfileTab,
} from "../../constant/constant";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const ProfileTab = ({ data }) => {
  return (
    <>
      <div className="basic-details margin-div">
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
            {/* <div className="detail">
              <p>Visa</p>
              <p>Pending</p>
            </div>
            <div className="detail">
              <p>Plan of Study</p>
              <p>Feb,2025</p>
            </div> */}
          </div>
        </div>
        <div className="Item">
          <h5>Intakes</h5>
          <div className="content">
            <div className="detail">
              <p>Intake</p>
              <p> {data?.preferredIntake} </p>
            </div>
            {/* <div className="detail">
              <p>Status</p>
              <p>No</p>
            </div> */}
            {/* <hr style={{ margin: 0 }} /> */}
            {/* <div className="detail">
              <p>Intake 02</p>
              <p>12-02-23</p>
            </div>
            <div className="detail">
              <p>Status</p>
              <p>Yes</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const ActivitiesTab = () => {
  return (
    <>
      <div className="basic-details margin-div">
        <img src={userCollege} alt="" className="user-img" />
        <div className="content">
          <h4>College Details</h4>
          <div className="item">
            <p>Name</p>
            <p>Harvard University</p>
          </div>
          <div className="item">
            <p>Start Date</p>
            <p>12-02-2025</p>
          </div>
          <div className="item">
            <p>Applictaion Date</p>
            <p>17-05-2024</p>
          </div>
        </div>
        <div className="content"></div>
      </div>
      <div className="basic-details margin-div">
        <img src={userCollege} alt="" className="user-img" />
        <div className="content">
          <h4>College Details</h4>
          <div className="item">
            <p>Name</p>
            <p>Harvard University</p>
          </div>
          <div className="item">
            <p>Start Date</p>
            <p>12-02-2025</p>
          </div>
          <div className="item">
            <p>Applictaion Date</p>
            <p>17-05-2024</p>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
};

const NotesTab = () => {
  return (
    <>
      <div className="notes margin-div">
        <div className="item">
          <img src={collegeRnd} className="college-avatar" alt="" />
          <div className="content">
            <h5>University Of Canada</h5>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
            </ul>
            <p className="faded">March 1, 2023</p>
          </div>
          <div className="icons">
            <img src={shareSvg} alt="share" />
            <img src={trashIcon} alt="trash" />
          </div>
        </div>
        <div className="item">
          <img src={collegeRnd} className="college-avatar" alt="" />
          <div className="content">
            <h5>University Of UK</h5>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris
                aliquet.
              </li>
            </ul>
            <p className="faded">March 1, 2023</p>
          </div>
          <div className="icons">
            <img src={shareSvg} alt="share" />
            <img src={trashIcon} alt="trash" />
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

const HistoryTab = () => {
  return (
    <>
      <div className="history-tab margin-div">
        <h4>History</h4>
        <div className="history-card">
          <div className="item">
            <img src={blankAvatar} alt="" />
            <div>
              <p className="title">University of Uk .</p>
              <p className="faded">Admissions , Exams</p>
              <p className="faded">March 1, 2023</p>
            </div>
          </div>
          <div className="item">
            <img src={blankAvatar} alt="" />
            <div>
              <p className="title">University of Uk .</p>
              <p className="faded">Admissions , Exams</p>
              <p className="faded">March 1, 2023</p>
            </div>
          </div>
          <div className="item">
            <img src={blankAvatar} alt="" />
            <div>
              <p className="title">
                Cleveland Brown has left you a review. Both of your reviews from
                this trip are now public.
              </p>
              <p className="faded">February 26, 2023</p>
            </div>
          </div>
          <div className="item">
            <img src={quagAvatar} alt="" />
            <div>
              <p className="title">
                Glenn accepted your invite to co-host Cheerful 2-bedroom home in
                the heart of Quahog
              </p>
              <p className="faded">April 25, 2022</p>
            </div>
          </div>
          <div className="item">
            <img src={quagAvatar} alt="" />
            <div>
              <p className="title">
                Glenn accepted your invite to co-host Cheerful 2-bedroom home in
                the heart of Quahog
              </p>
              <p className="faded">March 6, 2022</p>
            </div>
          </div>
          <div className="item">
            <img src={blankAvatar} alt="" />
            <div>
              <p className="title">
                Please confirm your email address by clicking on the link we
                just emailed you. If you cannot find the email, you can request
                a new confirmation email or change your email address.
              </p>
              <p className="faded">March 1, 2022</p>
            </div>
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

const DocumentTab = () => {
  return (
    <>
      <div className="document-tab margin-div">
        <h4>Documents</h4>
        <div className="document-tracker">
          {documentTabArr.map((i, index) => (
            <div className="item" key={`documents${index}`}>
              <p> {i.title} </p>
              <button className="upload-btn">
                {" "}
                <img src={uploadSvg} alt="" />
                Upload Document{" "}
              </button>
              <div className="added">
                <p>Added : </p>
                <button>
                  {i.added} <img src={cancelSvg} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <h4>Additional Documents</h4>
        <div className="document-tracker">
          {documentTabArr2.map((i, index) => (
            <div className="item" key={`documents1${index}`}>
              <p> {i.title} </p>
              <button className="upload-btn">
                {" "}
                <img src={uploadSvg} alt="" />
                Upload Document{" "}
              </button>
              <div className="added">
                <p>Added : </p>
                <button>
                  {i.added} <img src={cancelSvg} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="submit-btn">Edit</button>
      </div>
    </>
  );
};

const AdwizorTab = () => {
  return (
    <div className="univeristy-tab margin-div">
      <h4>Adwizor</h4>
      <AdwizorCards
        allAdwizors={allAdwiozordsArr?.slice(0, 1)}
        topAdwizor={false}
      />
    </div>
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
      case "Activities":
        return <ActivitiesTab />;
      case "Notes":
        return <NotesTab />;
      case "Addresses":
        return <AddressTab data={address?.data} />;
      case "History":
        return <HistoryTab />;
      case "My Universities":
        return <UniversityTab data={allUniversities.data.universities} />;
      case "Documents":
        return <DocumentTab />;
      case "Adwizor":
        return <AdwizorTab />;
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
