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
    getApi(endPoints.getUniversityDetails(id), {
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
      setGalleryBanner(detail?.data?.ImageUrl?.[0]);
    }
  }, [detail]);

  const ArticleComponent = () => {
    return (
      <div className="right">
        <div className="placement-report boxShadow-container margin-div">
          <RenderIfPresent value={detail?.data?.Fees}>
            <div className="content-flex">
              <p className="bold">Fees : </p>
              <p> {detail?.data?.Fees} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.data?.applicationFee}>
            <div className="content-flex">
              <p className="bold"> Application Fees : </p>
              <p> {detail?.data?.applicationFee} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.data?.BTechFees}>
            <div className="content-flex">
              <p className="bold"> BTECH Fees : </p>
              <p> {detail?.data?.BTechFees} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.data?.costOfLiving}>
            <div className="content-flex">
              <p className="bold">Cost of living : </p>
              <p> {detail?.data?.costOfLiving} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.data?.grossTuition}>
            <div className="content-flex">
              <p className="bold">Gross Tuition : </p>
              <p> {detail?.data?.grossTuition} </p>
            </div>
          </RenderIfPresent>
          <RenderIfPresent value={detail?.data?.otherFees}>
            <div className="content-flex">
              <p className="bold"> {detail?.data?.otherFees} </p>
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
                  {detail?.data?.UniversityName} ({detail?.data?.CourseTitle})
                </h4>
                <RenderIfPresent value={detail?.data?.AboutUniversity}>
                  <p className="description">
                    {detail?.data?.AboutUniversity}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.data?.programDescription}>
                  <p className="description">
                    {detail?.data?.programDescription}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.data?.ApplicationDate}>
                  <div className="last-date">
                    <p className="date"> {detail?.data?.ApplicationDate} </p>
                    <p className="desc">Application Date</p>
                  </div>
                </RenderIfPresent>

                <h4 className="heading margin-div">
                  {detail?.data?.UniversityName} Quick facts
                </h4>

                <ul className="key-points">
                  <RenderIfPresent value={detail?.data?.HighestPackageOffered}>
                    <li>
                      Highest package offered :{" "}
                      {detail?.data?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.AveragePackageOffered}>
                    <li>
                      Average package offered :{" "}
                      {detail?.data?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Ranked}>
                    <li>{detail?.data?.Ranked}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.ApprovedBy}>
                    <li>Approved By : {detail?.data?.ApprovedBy}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.Review}>
                    <li> {detail?.data?.Review} Reviews</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.TotalNoOfCourses}>
                    <li>{detail?.data?.TotalNoOfCourses}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.AcceptedEntranceExams}>
                    <li>
                      {" "}
                      Accepted Exams : {
                        detail?.data?.AcceptedEntranceExams
                      }{" "}
                    </li>
                  </RenderIfPresent>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.data?.UniversityName} Highlights
                </h4>
                <div className="highlights">
                  <RenderIfPresent value={detail?.data?.InstituteType}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight1} alt="" />
                        <p> Institution Type </p>
                      </div>
                      <p> {detail?.data?.InstituteType} </p>
                    </div>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.TotalFaculty}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight2} alt="" />
                        <p> Total Faculty </p>
                      </div>
                      <p> {detail?.data?.TotalFaculty} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Estd}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight3} alt="" />
                        <p> Year of Establishment </p>
                      </div>
                      <p> {detail?.data?.Estd} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.CampusArea}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight6} alt="" />
                        <p> Campus Area </p>
                      </div>
                      <p> {detail?.data?.CampusArea} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.data?.TotalNoOfStudentsRegistered}
                  >
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight5} alt="" />
                        <p> Student Enrollment </p>
                      </div>
                      <p> {detail?.data?.TotalNoOfStudentsRegistered} </p>
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
                  {detail?.data?.UniversityName} Latest Update:{" "}
                </h4>

                <ul className="key-points">
                  <RenderIfPresent value={detail?.data?.HighestPackageOffered}>
                    <li>
                      Highest package offered :{" "}
                      {detail?.data?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.AveragePackageOffered}>
                    <li>
                      Average package offered :{" "}
                      {detail?.data?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Ranked}>
                    <li>{detail?.data?.Ranked}</li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Recruiters}>
                    <li> Recruiters : {detail?.data?.Recruiters}</li>
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
                  Jamia Miliya Islamia, Delhi Course & Fees 2023{" "}
                </h4>

                <table className="college-ranking-table margin-div">
                  <thead>
                    <tr>
                      <th>
                        <button>Ranking</button>
                      </th>
                      <th>
                        <button>Publisher</button>
                      </th>
                      <th>
                        <button>Stream</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B. Tech </td>
                      <td>₹ 113,00 </td>
                      <td>4 Years </td>
                    </tr>
                    <tr>
                      <td>MBA </td>
                      <td>₹ 113,00 </td>
                      <td>2 Years </td>
                    </tr>
                    <tr>
                      <td>M. Tech </td>
                      <td>₹ 113,00 </td>
                      <td>4 Years </td>
                    </tr>
                    <tr>
                      <td>PGD </td>
                      <td>₹ 113,00 </td>
                      <td>2 Years </td>
                    </tr>
                    <tr>
                      <td>BSC </td>
                      <td>₹ 113,00 </td>
                      <td>4 Years </td>
                    </tr>
                    <tr>
                      <td>MSW </td>
                      <td>₹ 113,00 </td>
                      <td>2 Years </td>
                    </tr>
                    <tr>
                      <td>BA </td>
                      <td>₹ 113,00 </td>
                      <td>4 Years </td>
                    </tr>
                    <tr>
                      <td>MA </td>
                      <td>₹ 113,00 </td>
                      <td>2 Years </td>
                    </tr>
                    <tr>
                      <td>Msc </td>
                      <td>₹ 113,00 </td>
                      <td>4 Years </td>
                    </tr>
                  </tbody>
                </table>

                <button className="show-more">More Courses </button>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <p className="description mt-3">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementu
                </p>
                <h4
                  className="heading mb-2 border-heading p-0 mt-3"
                  style={{ border: "none" }}
                >
                  Jamia Miliya Islamia, Course & Fees Structure{" "}
                </h4>
                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>

                <table className="college-ranking-table margin-div">
                  <thead>
                    <tr>
                      <th>
                        <button>Courses</button>
                      </th>
                      <th>
                        <button>Total Tuition Fees</button>
                      </th>
                      <th>
                        <button>Eligibility</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        B.Sc Anaesthesia <br /> Technology (AT){" "}
                      </td>
                      <td>2,346,45 </td>
                      <td>Graduation </td>
                    </tr>
                    <tr>
                      <td>
                        B.Sc Anaesthesia <br /> Technology (AT){" "}
                      </td>
                      <td>2,346,45 </td>
                      <td>Graduation </td>
                    </tr>
                    <tr>
                      <td>
                        B.Sc Anaesthesia <br /> Technology (AT){" "}
                      </td>
                      <td>2,346,45 </td>
                      <td>Graduation </td>
                    </tr>
                  </tbody>
                </table>

                <h4
                  className="heading mb-2 border-heading p-0 mt-3"
                  style={{ border: "none" }}
                >
                  Entrance Exams Accepted by Jamia Miliya Islamia{" "}
                </h4>
                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4
                  className="heading mb-2 border-heading p-0 mt-3"
                  style={{ border: "none" }}
                >
                  {" "}
                  Jamia Miliya Islamia Fee Payment Guidelines{" "}
                </h4>
                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <button className="show-more mt-5" style={{ border: "none" }}>
                  Show More
                </button>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <div className="course-flex">
                  <p>
                    B.Tech [Bachelor of Technology] <br />
                    Full Time • On Campus
                  </p>
                  <p>
                    ₹ 11,70,000 (4 Years) <br />
                  </p>
                </div>
                <div className="last-btns">
                  <button className="outline">Intrested</button>
                  <button>
                    Brochure <i className="fa-solid fa-download" />{" "}
                  </button>
                </div>

                <h4
                  className="heading mb-2 border-heading p-0 mt-3"
                  style={{ border: "none" }}
                >
                  All Branches of technology{" "}
                </h4>
                <div className="course-flex mt-3">
                  <p>
                    <span style={{ color: "#000" }}>
                      {" "}
                      Bachelor of Technology [B.Tech] <br /> (Aerospace
                      Engineering)
                    </span>
                    <br />
                    Check Eligibility
                  </p>
                  <p>
                    <span style={{ color: "#FF4141" }}> ₹ 1,00,000</span>
                    <br />
                    View Detail Fees
                  </p>
                  <button>Apply Now</button>
                </div>

                <div className="course-flex mt-3">
                  <p>
                    <span style={{ color: "#000" }}>
                      {" "}
                      Bachelor of Technology [B.Tech] <br /> (Aerospace
                      Engineering)
                    </span>
                    <br />
                    Check Eligibility
                  </p>
                  <p>
                    <span style={{ color: "#FF4141" }}> ₹ 1,00,000</span>
                    <br />
                    View Detail Fees
                  </p>
                  <button>Apply Now</button>
                </div>
                <div className="course-flex mt-3">
                  <p>
                    <span style={{ color: "#000" }}>
                      {" "}
                      Bachelor of Technology [B.Tech] <br /> (Aerospace
                      Engineering)
                    </span>
                    <br />
                    Check Eligibility
                  </p>
                  <p>
                    <span style={{ color: "#FF4141" }}> ₹ 1,00,000</span>
                    <br />
                    View Detail Fees
                  </p>
                  <button>Apply Now</button>
                </div>
                <div className="course-flex mt-3">
                  <p>
                    <span style={{ color: "#000" }}>
                      {" "}
                      Bachelor of Technology [B.Tech] <br /> (Aerospace
                      Engineering)
                    </span>
                    <br />
                    Check Eligibility
                  </p>
                  <p>
                    <span style={{ color: "#FF4141" }}> ₹ 1,00,000</span>
                    <br />
                    View Detail Fees
                  </p>
                  <button>Apply Now</button>
                </div>
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
                  {detail?.data?.UniversityName} Latest Updates{" "}
                </h4>

                <RenderIfPresent value={detail?.data?.Eligibility}>
                  <p className="description mt-3">
                    Eligibility : {detail?.data?.Eligibility}
                  </p>
                </RenderIfPresent>

                <RenderIfPresent value={detail?.data?.minEducationLevel}>
                  <p className="description mt-3">
                    Minimum Education Level : {detail?.data?.minEducationLevel}
                  </p>
                </RenderIfPresent>

                <RenderIfPresent value={detail?.data?.minGPA}>
                  <p className="description mt-3">
                    Minimum GPA : {detail?.data?.minGPA}
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
                  {detail?.data?.UniversityName} Cut off
                </h4>
                <p className="description mt-3">{detail?.data?.Cutoff}</p>
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
                    {detail?.data?.ImageUrl?.map((i, index) => (
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
                  {detail?.data?.UniversityName} ({detail?.data?.CourseTitle})
                </h4>
                <RenderIfPresent value={detail?.data?.AboutUniversity}>
                  <p className="description">
                    {detail?.data?.AboutUniversity}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.data?.programDescription}>
                  <p className="description">
                    {detail?.data?.programDescription}{" "}
                  </p>
                </RenderIfPresent>
                <RenderIfPresent value={detail?.data?.ApplicationDate}>
                  <div className="last-date">
                    <p className="date"> {detail?.data?.ApplicationDate} </p>
                    <p className="desc">Application Date</p>
                  </div>
                </RenderIfPresent>

                <h4 className="heading margin-div">
                  {detail?.data?.UniversityName} Quick facts
                </h4>

                <ul className="key-points">
                  <RenderIfPresent value={detail?.data?.HighestPackageOffered}>
                    <li>
                      Highest package offered :{" "}
                      {detail?.data?.HighestPackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.AveragePackageOffered}>
                    <li>
                      Average package offered :{" "}
                      {detail?.data?.AveragePackageOffered}
                    </li>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Ranked}>
                    <li>{detail?.data?.Ranked}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.ApprovedBy}>
                    <li>Approved By : {detail?.data?.ApprovedBy}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.Review}>
                    <li> {detail?.data?.Review} Reviews</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.TotalNoOfCourses}>
                    <li>{detail?.data?.TotalNoOfCourses}</li>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.AcceptedEntranceExams}>
                    <li>
                      {" "}
                      Accepted Exams : {
                        detail?.data?.AcceptedEntranceExams
                      }{" "}
                    </li>
                  </RenderIfPresent>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  {detail?.data?.UniversityName} Highlights
                </h4>
                <div className="highlights">
                  <RenderIfPresent value={detail?.data?.InstituteType}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight1} alt="" />
                        <p> Institution Type </p>
                      </div>
                      <p> {detail?.data?.InstituteType} </p>
                    </div>
                  </RenderIfPresent>

                  <RenderIfPresent value={detail?.data?.TotalFaculty}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight2} alt="" />
                        <p> Total Faculty </p>
                      </div>
                      <p> {detail?.data?.TotalFaculty} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.Estd}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight3} alt="" />
                        <p> Year of Establishment </p>
                      </div>
                      <p> {detail?.data?.Estd} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent value={detail?.data?.CampusArea}>
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight6} alt="" />
                        <p> Campus Area </p>
                      </div>
                      <p> {detail?.data?.CampusArea} </p>
                    </div>
                  </RenderIfPresent>
                  <RenderIfPresent
                    value={detail?.data?.TotalNoOfStudentsRegistered}
                  >
                    <div className="item">
                      <div className="img-container">
                        <img src={collegeHighlight5} alt="" />
                        <p> Student Enrollment </p>
                      </div>
                      <p> {detail?.data?.TotalNoOfStudentsRegistered} </p>
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
        <Banner img={detail?.data?.ImageUrl?.[0]} className="m-0" />

        <div className="download-broacher boxShadow-container margin-div ">
          <p className="text">{detail?.data?.ApprovedBy}</p>
          <div>
            <button onClick={() => setOpenCanvas(true)}>
              Shortlist For Common Application
            </button>
          </div>
        </div>

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

export default WrappedComponent({ WrappedComponent: CollegeMicroInfo });
