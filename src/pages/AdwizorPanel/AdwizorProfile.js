/** @format */

import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { uploadSvg } from "../../assest";
import { BlogCard } from "../../components/Cards/AllCards";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderCustomerReviewsCard } from "../../components/Sliders/SwiperComponents";
import { customerReviewConfig } from "../../components/Sliders/SwiperConfig";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import Form from "react-bootstrap/Form";

const mainStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  maxHeight: "100%",
  overflowY: "auto",
  padding: 0,
  paddingTop: "20px",
};

const itemStyle = {
  maxWidth: "100%",
};

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

const AdwizorProfile = () => {
  const [profile, setProfile] = useState({ findReview: [] });
  const [fullname, setFullname] = useState("");
  const [state, setState] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [experiance, setExperiance] = useState("");
  const [helpedStudent, setHelpedStudent] = useState("  ");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [role, setRole] = useState("");
  const [years, setYears] = useState("");
  const [CTC, setCtc] = useState("");
  const [socialCategory, setSocialCategory] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [physicallyChallenged, setPhysicallyChallenged] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [contryExperiance, setCountryExperiance] = useState("");
  const [languageExperties, setLanguageExpertise] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [landMark, setLandmark] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [aboutME, setAboutme] = useState("");
  const [subjectExperties, setSubjectExpertise] = useState("");
  const [documents, setDocument] = useState({
    panCard: "",
    aadharCard: "",
    bankStatement: "",
    cv: "",
    professionalExperiance: "",
    passport: "",
  });
  const [currentLocation, setCurrentLocation] = useState("");
  const [studyDestination, setStudyDestination] = useState("");
  const [waitTime, setWaitTime] = useState("");
  const [blogs, setBlogs] = useState({ data: [] });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocument((prev) => ({ ...prev, [name]: files[0] }));
  };

  const uploadDocument = (name) => {
    const target = document.getElementById(name);
    target.click();
  };

  const fd = new FormData();
  Object.keys(documents).forEach((key) => {
    fd.append(key, documents[key]);
  });
  fd.append("fullname", fullname);
  fd.append("state", state);
  fd.append("destinationCountry", destinationCountry);
  fd.append("experiance", experiance);
  fd.append("helpedStudent", helpedStudent);
  fd.append("companyName", companyName);
  fd.append("subject", subject);
  fd.append("role", role);
  fd.append("years", years);
  fd.append("CTC", CTC);
  fd.append("socialCategory", socialCategory);
  fd.append("dob", dob);
  fd.append("gender", gender);
  fd.append("physicallyChallenged", physicallyChallenged);
  fd.append("martialStatus", martialStatus);
  fd.append("contryExperiance", contryExperiance);
  fd.append("subjectExperties", subjectExperties);
  fd.append("languageExperties", languageExperties);
  fd.append("language", language);
  fd.append("image", image);
  fd.append("city", city);
  fd.append("pincode", pincode);
  fd.append("landMark", landMark);
  fd.append("otherInfo", otherInfo);
  fd.append("aboutMe", aboutME);
  fd.append("currentLocation", currentLocation);
  fd.append("waitTime", waitTime);
  fd.append("studyDestination", studyDestination);

  const fetchHandler = () => {
    getApi(endPoints.getAdwizorProfile, {
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const mandatoryDocuments = [
    {
      key: "professionalExperiance",
      title: "Professional Experience",
      link: profile?.data?.professionalExperiance
        ? profile?.data?.professionalExperiance
        : "#",
    },
    {
      key: "panCard",
      title: "Pancard",
      link: profile?.data?.panCard ? profile?.data?.panCard : "#",
    },
    {
      key: "aadharCard",
      title: "Aadhar Card",
      link: profile?.data?.aadharCard ? profile?.data?.aadharCard : "#",
    },
    {
      key: "bankStatement",
      title: "Bank Statement / Affidavit",
      link: profile?.data?.bankStatement ? profile?.data?.bankStatement : "#",
    },
    {
      key: "passport",
      title: "Passport",
      link: profile?.data?.cv ? profile?.data?.cv : "#",
    },
    {
      key: "cv",
      title: "CV",
      link: profile?.data?.cv ? profile?.data?.cv : "#",
    },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    putApi(endPoints.updateAdwizorProfile, fd, {
      successMsg: "Profile Updated Successfully !",
      setLoading,
      additionalFunctions: [fetchHandler],
    });
  };

  useEffect(() => {
    if (profile) {
      setFullname(profile?.data?.fullname);
      setCtc(profile?.data?.CTC);
      setState(profile?.data?.state);
      setDestinationCountry(profile?.data?.destinationCountry);
      setExperiance(profile?.data?.experiance);
      setHelpedStudent(profile?.data?.helpedStudent);
      setCompanyName(profile?.data?.companyName);
      setSubject(profile?.data?.subject);
      setRole(profile?.data?.role);
      setYears(profile?.data?.years);
      setSocialCategory(profile?.data?.socialCategory);
      setDob(profile?.data?.dob);
      setGender(profile?.data?.gender);
      setPhysicallyChallenged(profile?.data?.physicallyChallenged);
      setMartialStatus(profile?.data?.martialStatus);
      setCountryExperiance(profile?.data?.contryExperiance);
      setLanguageExpertise(profile?.data?.languageExperties);
      setLanguage(profile?.data?.language);
      setCity(profile?.data?.city);
      setPincode(profile?.data?.pincode);
      setLandmark(profile?.data?.landMark);
      setOtherInfo(profile?.data?.otherInfo);
      setAboutme(profile?.data?.aboutMe);
      setSubjectExpertise(profile?.data?.subjectExperties);
      setCurrentLocation(profile?.data?.currentLocation);
      setStudyDestination(profile?.data?.studyDestination);
      setWaitTime(profile?.data?.waitTime);
    }
  }, [profile]);

  useEffect(() => {
    getApi(endPoints.adwizorOwnBlogs, {
      setResponse: setBlogs,
    });
  }, []);

  const blogsList = blogs.data.map((i) => ({
    img: i?.imagePath,
    title: i?.title,
    description: i?.content,
    publishedOn: i?.createdAt?.slice(0, 10),
  }));

  const reviewsList = profile.findReview.map((i) => ({
    img: i?.userId?.image,
    rating: i?.rating,
    title: i?.userId?.fullname,
    description: i?.description,
  }));

  const updateStatus = () => {
    if (profile?.data?.liveStatus === true) {
      putApi(
        endPoints.adwizor.completeMeeting(profile?.data?.currentMeetingRoom),
        {},
        {
          successMsg: "Status Updated !",
          additionalFunctions: [fetchHandler],
        }
      );
    } else {
      postApi(
        endPoints.adwizor.goLive,
        {},
        {
          successMsg: "Status Updated !",
          additionalFunctions: [fetchHandler],
        }
      );
    }
  };

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Adwizor Profile</p>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Status"
          checked={profile?.data?.liveStatus}
          onClick={updateStatus}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="section-sub-heading mt-3">
        <p className="title">Company Details</p>
      </div>

      <form className="update-profile" onSubmit={submitHandler}>
        <div className="grid-container-for-3">
          <div className="item">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Years"
              onChange={(e) => setYears(e.target.value)}
              value={years}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="CTC"
              onChange={(e) => setCtc(e.target.value)}
              value={CTC}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Langauage"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            />
          </div>
        </div>
        <div className="section-sub-heading mt-3">
          <p className="title">Profile</p>
        </div>
        <div className="profile-pic-container mt-2">
          <img src={profile?.data?.image} alt="" />
        </div>

        <input
          type={"file"}
          onChange={(e) => setImage(e.target.files[0])}
          style={{ display: "none" }}
          id="profileIMg"
        />
        <button
          className="upload-document-btn mt-3"
          type="button"
          onClick={() => uploadDocument("profileIMg")}
        >
          <img src={uploadSvg} alt="" />
          <span>Upload profile photo </span>
        </button>

        <div className="section-sub-heading mt-3">
          <p className="title">Basic Details</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item">
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="date"
              placeholder="D.O.B"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Social Category"
              value={socialCategory}
              onChange={(e) => setSocialCategory(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Martial Status"
              value={martialStatus}
              onChange={(e) => setMartialStatus(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Physically Challenged?"
              value={physicallyChallenged}
              onChange={(e) => setPhysicallyChallenged(e.target.value)}
            />
          </div>
        </div>

        <div className="user-dashboard-profile">
          <div className="document-tab " style={mainStyle}>
            <h4>Mandatory Documents</h4>
            <div className="document-tracker">
              {mandatoryDocuments.map((i, index) => (
                <div className="item" style={itemStyle} key={`doc${index}`}>
                  {i.link === "#" ? (
                    <p> {i.title} </p>
                  ) : (
                    <a href={i.link} target="_blank">
                      <p> {i.title} </p>
                    </a>
                  )}
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => uploadDocument(i.key)}
                  >
                    <img src={uploadSvg} alt="" />
                    Upload Document
                  </button>
                  <input
                    type="file"
                    id={i.key}
                    name={i.key}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-sub-heading mt-3">
          <p className="title">About Me</p>
        </div>

        <textarea
          className="mt-2"
          rows={3}
          onChange={(e) => setAboutme(e.target.value)}
          value={aboutME}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Students Placed</p>
        </div>

        <input
          type={"text"}
          className="mt-2"
          onChange={(e) => setHelpedStudent(e.target.value)}
          value={helpedStudent}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Current Location</p>
        </div>

        <input
          type={"text"}
          className="mt-2"
          onChange={(e) => setCurrentLocation(e.target.value)}
          value={currentLocation}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Study Destination</p>
        </div>

        <input
          type={"text"}
          className="mt-2"
          onChange={(e) => setStudyDestination(e.target.value)}
          value={studyDestination}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Wait Time</p>
        </div>

        <input
          type={"text"}
          className="mt-2"
          onChange={(e) => setWaitTime(e.target.value)}
          value={waitTime}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Address</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item">
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Country"
              onChange={(e) => setDestinationCountry(e.target.value)}
              value={destinationCountry}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Pincode"
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Landmark"
              onChange={(e) => setLandmark(e.target.value)}
              value={landMark}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Other info"
              onChange={(e) => setOtherInfo(e.target.value)}
              value={otherInfo}
            />
          </div>
        </div>

        <div className="section-sub-heading mt-3">
          <p className="title">Country Expertise</p>
        </div>
        <textarea
          className="mt-2"
          rows={3}
          onChange={(e) => setCountryExperiance(e.target.value)}
          value={contryExperiance}
        />
        <div className="section-sub-heading mt-3">
          <p className="title">Subject Expertise</p>
        </div>
        <textarea
          className="mt-2"
          rows={3}
          onChange={(e) => setSubjectExpertise(e.target.value)}
          value={subjectExperties}
        />

        <div className="section-sub-heading mt-3">
          <p className="title">Language Expertise</p>
        </div>
        <textarea
          className="mt-2"
          rows={3}
          onChange={(e) => setLanguageExpertise(e.target.value)}
          value={languageExperties}
        />

        <button className="upload-document-btn mt-3" type="submit">
          <span>
            {loading ? <ClipLoader color="#fff" /> : "Update Profile"}
          </span>
        </button>

        <div className="user-homePage">
          <div className="user-dashboard-profile">
            <div className="rating-reviews mt-5">
              <h5 className="title">Rating & Reviews</h5>
              <p className="desc">
                Don’t take our word for it. Trust our customers
              </p>

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

          <div className="user-blogs mt-5">
            <h5 className="blog-heading">Blogs</h5>
            <div className="cards">
              {blogsList.map((i, index) => (
                <BlogCard key={`blogs${index}`} {...i} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AdwizorLayout(AdwizorProfile);
