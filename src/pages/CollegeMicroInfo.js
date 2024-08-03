/** @format */

import React, { useEffect, useState } from "react";
import { Banner } from "../components/HelpingComponents";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";
import {
  collegeHighlight1,
  collegeHighlight2,
  collegeHighlight3,
  collegeHighlight5,
  collegeHighlight6,
} from "../assest";
import {
  AlertModal,
  CollegeShortlistedCanvas,
} from "../components/Modals/Modals";
import { useParams } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import WithLayout from "../Layout/WithLayout";

const tabs = [
  "About Us",
  "Placements",
  "Course & Fees",
  "Admission",
  "Cut Off",
  "Gallery",
];

const RenderIfPresent = ({ value, children }) => {
  if (value) {
    return children;
  }
  return null;
};

const CollegeMicroInfo = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);
  const [activeTab, setActiveTab] = useState("About Us");
  const { id } = useParams();
  const [detail, setDetail] = useState({ data: {} });
  const [galleryBanner, setGalleryBanner] = useState("");
  const [allNews, setAllNews] = useState({ data: [] });
  const [newsType, setNewsType] = useState("Featured");

  useEffect(() => {
    getApi(endPoints.user.getUniversitiesCourse(id), {
      setResponse: setDetail,
    });
  }, [id]);

  useEffect(() => {
    getApi(endPoints.getNews(newsType), {
      setResponse: setAllNews,
    });
  }, [newsType]);

  useEffect(() => {
    if (detail) {
      setGalleryBanner(detail?.university?.ImageUrl?.[0]);
    }
  }, [detail]);

  const ArticleComponent = () => {
    return (
      <div className="right">
        <div className="placement-report boxShadow-container margin-div">
          <RenderIfPresent value={detail?.university?.Fees}>
            <div className="content-flex">
              <p className="bold">Fees : </p>
              <p> {detail?.university?.Fees} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.university?.applicationFee}>
            <div className="content-flex">
              <p className="bold"> Application Fees : </p>
              <p> {detail?.university?.applicationFee} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.university?.BTechFees}>
            <div className="content-flex">
              <p className="bold"> BTECH Fees : </p>
              <p> {detail?.university?.BTechFees} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.university?.costOfLiving}>
            <div className="content-flex">
              <p className="bold">Cost of living : </p>
              <p> {detail?.university?.costOfLiving} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.university?.grossTuition}>
            <div className="content-flex">
              <p className="bold">Gross Tuition : </p>
              <p> {detail?.university?.grossTuition} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.university?.otherFees}>
            <div className="content-flex">
              <p className="bold"> {detail?.university?.otherFees} </p>
            </div>
          </RenderIfPresent>
        </div>

        <div className="featured-news boxShadow-container margin-div">
          <ul>
            <li
              className={`${newsType === "Featured" ? "active" : ""}`}
              onClick={() => setNewsType("Featured")}
            >
              Featured News
            </li>
            <li
              className={`${newsType === "Recent" ? "active" : ""}`}
              onClick={() => setNewsType("Recent")}
            >
              Recent News
            </li>
          </ul>

          <div className="news-container">
            {allNews.data?.map((i, index) => (
              <div className="Item" key={`news${index}`}>
                <img src={i.image} alt="" />
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "About Us":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.university?.UniversityName} (
                  {detail?.university?.CourseTitle})
                </h4>
                <RenderIfPresent value={detail?.university?.AboutUniversity}>
                  <p className="description">
                    {detail?.university?.AboutUniversity}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.university?.programDescription}>
                  <p className="description">
                    {detail?.university?.programDescription}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.university?.ApplicationDate}>
                  <div className="last-date">
                    <p className="date">
                      {" "}
                      {detail?.university?.ApplicationDate}{" "}
                    </p>
                    <p className="desc">Application Date</p>
                  </div>
                </RenderIfPresent>

                <h4 className="heading margin-div">
                  {detail?.university?.UniversityName} Quick facts
                </h4>

                <ul className="key-points">
                  <RenderIfPresent
                    value={detail?.university?.HighestPackageOffered}
                  >
                    <li>
                      Highest package offered :{" "}
                      {detail?.university?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.university?.AveragePackageOffered}
                  >
                    <li>
                      Average package offered :{" "}
                      {detail?.university?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Ranked}>
                    <li>{detail?.university?.Ranked}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.ApprovedBy}>
                    <li>Approved By : {detail?.university?.ApprovedBy}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.Review}>
                    <li> {detail?.university?.Review} Reviews</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.TotalNoOfCourses}>
                    <li>{detail?.university?.TotalNoOfCourses}</li>
                  </RenderIfPresent>

                  <RenderIfPresent
                    value={detail?.university?.AcceptedEntranceExams}
                  >
                    <li>
                      {" "}
                      Accepted Exams :{" "}
                      {detail?.university?.AcceptedEntranceExams}{" "}
                    </li>
                  </RenderIfPresent>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.university?.UniversityName} Highlights
                </h4>
                <div className="highlights">
                  <RenderIfPresent value={detail?.university?.InstituteType}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight1} alt="" />
                        <p> Institution Type </p>
                      </div>
                      <p> {detail?.university?.InstituteType} </p>
                    </div>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.TotalFaculty}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight2} alt="" />
                        <p> Total Faculty </p>
                      </div>
                      <p> {detail?.university?.TotalFaculty} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Estd}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight3} alt="" />
                        <p> Year of Establishment </p>
                      </div>
                      <p> {detail?.university?.Estd} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.CampusArea}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight6} alt="" />
                        <p> Campus Area </p>
                      </div>
                      <p> {detail?.university?.CampusArea} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.university?.TotalNoOfStudentsRegistered}
                  >
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight5} alt="" />
                        <p> Student Enrollment </p>
                      </div>
                      <p> {detail?.university?.TotalNoOfStudentsRegistered} </p>
                    </div>
                  </RenderIfPresent>
                </div>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      case "Placements":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2" style={{ textAlign: "left" }}>
                  {detail?.university?.UniversityName} Latest Update:{" "}
                </h4>

                <ul className="key-points">
                  <RenderIfPresent
                    value={detail?.university?.HighestPackageOffered}
                  >
                    <li>
                      Highest package offered :{" "}
                      {detail?.university?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.university?.AveragePackageOffered}
                  >
                    <li>
                      Average package offered :{" "}
                      {detail?.university?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Ranked}>
                    <li>{detail?.university?.Ranked}</li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Recruiters}>
                    <li> Recruiters : {detail?.university?.Recruiters}</li>
                  </RenderIfPresent>
                </ul>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      case "Course & Fees":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.university?.UniversityName} Course & Fees{" "}
                </h4>

                <table className="college-ranking-table margin-div">
                  <thead>
                    <tr>
                      <th>
                        <button>Course</button>
                      </th>

                      <th>
                        <button>Duration</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail?.university?.courses?.map((i, index) => (
                      <tr key={`course${index}`}>
                        <td> {i.courseTitle} </td>

                        <td> {i?.programLevel} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      case "Admission":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mb-2">
                  {" "}
                  {detail?.university?.UniversityName} Latest Updates{" "}
                </h4>

                <RenderIfPresent value={detail?.university?.Eligibility}>
                  <p className="description mt-3">
                    Eligibility : {detail?.university?.Eligibility}
                  </p>
                </RenderIfPresent>

                <RenderIfPresent value={detail?.university?.minEducationLevel}>
                  <p className="description mt-3">
                    Minimum Education Level :{" "}
                    {detail?.university?.minEducationLevel}
                  </p>
                </RenderIfPresent>

                <RenderIfPresent value={detail?.university?.minGPA}>
                  <p className="description mt-3">
                    Minimum GPA : {detail?.university?.minGPA}
                  </p>
                </RenderIfPresent>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      case "Cut Off":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mt-5">
                  {detail?.university?.UniversityName} Cut off
                </h4>
                <p className="description mt-3">{detail?.university?.Cutoff}</p>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia Management Cut off 2022{" "}
                </h4>

                <table className="college-ranking-table margin-div">
                  <thead>
                    <tr>
                      <th>
                        <button>Courses</button>
                      </th>
                      <th>
                        <button>Cut Off Percentile</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum </td>
                      <td>40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      case "Gallery":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mb-2">Infrastructure Image </h4>
                <div className="gallery-container">
                  <img src={galleryBanner} alt="" className="whole-img" />
                  <div className="flexbox-container">
                    {detail?.university?.ImageUrl?.map((i, index) => (
                      <img
                        src={i}
                        alt=""
                        key={`gallery${index}`}
                        onClick={() => setGalleryBanner(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
      default:
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.university?.UniversityName} (
                  {detail?.university?.CourseTitle})
                </h4>
                <RenderIfPresent value={detail?.university?.AboutUniversity}>
                  <p className="description">
                    {detail?.university?.AboutUniversity}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.university?.programDescription}>
                  <p className="description">
                    {detail?.university?.programDescription}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.university?.ApplicationDate}>
                  <div className="last-date">
                    <p className="date">
                      {" "}
                      {detail?.university?.ApplicationDate}{" "}
                    </p>
                    <p className="desc">Application Date</p>
                  </div>
                </RenderIfPresent>

                <h4 className="heading margin-div">
                  {detail?.university?.UniversityName} Quick facts
                </h4>

                <ul className="key-points">
                  <RenderIfPresent
                    value={detail?.university?.HighestPackageOffered}
                  >
                    <li>
                      Highest package offered :{" "}
                      {detail?.university?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.university?.AveragePackageOffered}
                  >
                    <li>
                      Average package offered :{" "}
                      {detail?.university?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Ranked}>
                    <li>{detail?.university?.Ranked}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.ApprovedBy}>
                    <li>Approved By : {detail?.university?.ApprovedBy}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.Review}>
                    <li> {detail?.university?.Review} Reviews</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.TotalNoOfCourses}>
                    <li>{detail?.university?.TotalNoOfCourses}</li>
                  </RenderIfPresent>

                  <RenderIfPresent
                    value={detail?.university?.AcceptedEntranceExams}
                  >
                    <li>
                      {" "}
                      Accepted Exams :{" "}
                      {detail?.university?.AcceptedEntranceExams}{" "}
                    </li>
                  </RenderIfPresent>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.university?.UniversityName} Highlights
                </h4>
                <div className="highlights">
                  <RenderIfPresent value={detail?.university?.InstituteType}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight1} alt="" />
                        <p> Institution Type </p>
                      </div>
                      <p> {detail?.university?.InstituteType} </p>
                    </div>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.university?.TotalFaculty}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight2} alt="" />
                        <p> Total Faculty </p>
                      </div>
                      <p> {detail?.university?.TotalFaculty} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.Estd}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight3} alt="" />
                        <p> Year of Establishment </p>
                      </div>
                      <p> {detail?.university?.Estd} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.university?.CampusArea}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight6} alt="" />
                        <p> Campus Area </p>
                      </div>
                      <p> {detail?.university?.CampusArea} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.university?.TotalNoOfStudentsRegistered}
                  >
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight5} alt="" />
                        <p> Student Enrollment </p>
                      </div>
                      <p> {detail?.university?.TotalNoOfStudentsRegistered} </p>
                    </div>
                  </RenderIfPresent>
                </div>
              </div>
            </div>
            <ArticleComponent />
          </div>
        );
    }
  };

  return (
    <>
      <AlertModal
        show={open}
        onHide={() => setOpen(false)}
        title={"Register Now To Download Placement Report"}
      />
      <CollegeShortlistedCanvas
        show={openCanvas}
        handleClose={() => setOpenCanvas(false)}
      />
      <AlertModal show={open1} onHide={() => setOpen1(false)} />
      <section className="college-micro-info-page">
        <Banner img={detail?.university?.ImageUrl?.[0]} />

        {detail?.university?.ApprovedBy && (
          <div className="download-broacher boxShadow-container margin-div ">
            <p className="text">{detail?.university?.ApprovedBy}</p>
            {/* <div>
            <button onClick={() => setOpenCanvas(true)}>
              Shortlist For Common Application
            </button>
          </div> */}
          </div>
        )}

        <ul className="college-tabs margin-div boxShadow-container ">
          {tabs.map((i, index) => (
            <li
              key={index}
              className={`${i === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {" "}
              {i}{" "}
            </li>
          ))}
        </ul>
        {renderComponent()}
      </section>
    </>
  );
};

// export default WrappedComponent({ WrappedComponent: CollegeMicroInfo });
export default WithLayout(CollegeMicroInfo);
