/** @format */

import React, { useState } from "react";
import { Banner } from "../components/HelpingComponents";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";
import {
  JamiaBanner,
  collegeHighlight1,
  collegeHighlight2,
  collegeHighlight3,
  collegeHighlight4,
  collegeHighlight5,
  collegeHighlight6,
  collegeHighlight7,
  img1,
  Img2,
  studentEllipse1,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  CollegeImg38,
} from "../assest";
import {
  AlertModal,
  CollegeShortlistedCanvas,
} from "../components/Modals/Modals";

const tabs = [
  "Info",
  "Placements",
  "Course & Fees",
  "Admission",
  "Cut Off",
  "Review",
  "Infrastructure",
  "Gallery",
  "Scholarship",
];

const highlight = [
  {
    img: collegeHighlight1,
    title: "Institution Type",
    sub: "Private",
  },
  {
    img: collegeHighlight2,
    title: "Total Faculty",
    sub: "500",
  },
  {
    img: collegeHighlight3,
    title: "Year of Establishment",
    sub: "2003",
  },
  {
    img: collegeHighlight4,
    title: "Gender Accepted",
    sub: "CO- Ed",
  },
  {
    img: collegeHighlight5,
    title: "Student Enrollment",
    sub: "21306",
  },
  {
    img: collegeHighlight6,
    title: "Campus Area",
    sub: "1000 Acres",
  },
];

const ranking = [
  {
    img: collegeHighlight7,
    title: "19",
    sub: "Engineering",
  },
  {
    img: collegeHighlight7,
    title: "27",
    sub: "MBA",
  },
  {
    img: collegeHighlight7,
    title: "48",
    sub: "Pharmacy",
  },
];

const CollegeMicroInfo = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);
  const [activeTab, setActiveTab] = useState("Info");

  const renderComponent = () => {
    switch (activeTab) {
      case "Info":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Last Update for Jamia MIliya Islamia
                </h4>
                <div className="last-date">
                  <p className="date">25 May 2023</p>
                  <p className="desc">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="last-date">
                  <p className="date">25 May 2023</p>
                  <p className="desc">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>

                <h4 className="heading margin-div">
                  Jamia Millia Islamia University Quick facts
                </h4>

                <ul className="key-points">
                  <li>
                    JMI placement 2023 records the highest CTC of INR 25 LPA.
                  </li>
                  <li>
                    JMI Welcomes a Team from Applied Science University for the
                    German student exchange program.
                  </li>
                  <li>
                    A Global Webinar on "E-Literature Explorations of Literary
                    Creativity" is Hosted by JMI.
                  </li>
                  <li>
                    UGC notifies AMU and JMI in writing that CUET scores are
                    required for undergraduate admission in all central
                    universities.
                  </li>
                  <li>
                    JMI and the Taiwan Economic Culture Center team up to
                    improve academic cooperation.
                  </li>
                  <li>
                    Jamia Millia Islamia conducted Entrepreneurship Development
                    Program.
                  </li>
                  <li>
                    In the upcoming session, Jamia intends to offer dual
                    degrees, online education, and FYUP.
                  </li>
                  <li>
                    The University was recognised as a central university on
                    December 26, 1988.
                  </li>
                  <li>
                    In 1962, Jamia Millia Islamia University was declared a
                    “deemed to be university” by the University Grants
                    Commission.
                  </li>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia, New Delhi Highlights
                </h4>
                <div className="highlights ">
                  {highlight.map((i, index) => (
                    <div className="item" key={`higlight${index}`}>
                      <div className="img-container">
                        <img src={i.img} alt="" />
                        <p> {i.title} </p>
                      </div>
                      <p> {i.sub} </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia, New Delhi Ranking{" "}
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
                    {ranking.map((i, index) => (
                      <tr key={`ranking${index}`}>
                        <td>
                          {" "}
                          <img src={i.img} alt="" />
                        </td>
                        <td>{i.title} </td>
                        <td>{i.sub} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="show-more" style={{ border: "none" }}>
                  Show More
                </button>
              </div>

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
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Placements":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2" style={{ textAlign: "left" }}>
                  JMI Latest Update:{" "}
                </h4>

                <ul className="key-points">
                  <li>
                    JMI will not follow the 10% EWS quota reservation said HC.{" "}
                  </li>
                  <li>
                    JMI has decided to conduct an Entrance exam under CUET for
                    20 courses.{" "}
                  </li>
                  <li>
                    JMI UG, PG, and Diploma Admission 2023 has begun. The
                    admission deadline is extended to April 20, 2023.
                  </li>
                  <li>
                    JMI Admission 2023 is open for Phd under AICTE Scheme. The
                    last date to apply is March 25, 2023.
                  </li>
                  <li>
                    JMI is launching an employment-oriented course. The last
                    date to apply is March 20, 2023. Apply HereJMI is launching
                    an employment-oriented course. The last date to apply is
                    March 20, 2023. Apply Here
                  </li>
                  <li>
                    JMI Release Dates for the session 2023-24. The admissions
                    will begin on April 12, 2023.
                  </li>
                </ul>

                <p className="description">
                  Jamia Millia Islamia University offers various undergraduate,
                  postgraduate, diploma, and PhD courses in a wide range of
                  disciplines including Arts, Science, Commerce, Hospitality,
                  Technology, Management, Architecture, Education, Polytechnic
                  and many others. Besides its Nine faculties, the Jamia has a
                  number of centres of learning and research, like AJK-Mass
                  Communication Research Centre (MCRC), Academy of International
                  Studies etc.
                </p>
                <p className="description">
                  From the academic year 2022, the university will offer
                  admission on the basis of the Common University Entrance Test
                  (CUET) to 10 undergraduate courses. Admission to B.Tech and
                  B.Arch courses are offered through JEE Mains score. For all
                  other courses, JMI conducts its own entrance test, along with
                  an interview (for some courses).
                </p>
                <p className="description">
                  JMI is Highly Ranked and well-known for its 100% placement
                  rate in all programs and courses. Jamia Millia Islamia
                  University will offer several new courses from the academic
                  session 2022.
                </p>
              </div>

              <div className="detail-box boxShadow-container margin-div detail-box-2">
                <h4 className="heading mb-2 border-heading">
                  Table Of Content
                </h4>

                <div className="content">
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>

              <div className="detail-box boxShadow-container margin-div detail-box-2">
                <h4
                  className="heading mb-2 border-heading"
                  style={{ border: "none" }}
                >
                  Jamia Miliya Islamia, New Del hi Highlights
                </h4>

                <div className="content">
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>

              <div className="detail-box boxShadow-container margin-div detail-box-2">
                <h4
                  className="heading mb-2 border-heading"
                  style={{ border: "none" }}
                >
                  Jamia Miliya Islamia, Placement Cell{" "}
                </h4>

                <div className="content">
                  <p className="description mt-3">
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Torem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis.Torem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.Torem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis.Torem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.Torem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis.Torem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.Torem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis.Torem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.Torem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis.
                  </p>
                </div>
              </div>

              <div className="detail-box boxShadow-container margin-div detail-box-2">
                <h4
                  className="heading mb-2 border-heading"
                  style={{ border: "none" }}
                >
                  Jamia Miliya Islamia, Placement Process{" "}
                </h4>

                <div className="content">
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="description mt-3">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Admission":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <p className="description mb-3">
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
                <h4 className="sub-heading mb-2">JMI Latest Updates </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mb-2">
                  Highlights for Jamia Miliya Isalamia University,{" "}
                </h4>
                <div className="highlights ">
                  {highlight.map((i, index) => (
                    <div className="item" key={`higlight${index}`}>
                      <div className="img-container">
                        <img src={i.img} alt="" />
                        <p> {i.title} </p>
                      </div>
                      <p> {i.sub} </p>
                    </div>
                  ))}
                </div>
                <h4 className="sub-heading mt-3">
                  Jamia Miliya Isalamia University, Coimbatore BCA Admission
                  2023{" "}
                </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">BCA Eligibility Criteria </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">BCA Selection Process</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">MCA Eligibility Criteria </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">MCA Selection Process </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">BSc Eligibility Criteria</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">BSc Selection Process</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">MSc Eligibility Criteria</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">MSc Selection Process</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-3">BA Eligibility Criteria</h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Cut Off":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <p className="description mb-3">
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
                <h4 className="sub-heading mb-2">JMI Latest Updates </h4>

                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <h4 className="sub-heading mt-5">Table Of Content </h4>
                <ul className="key-points">
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum </li>
                </ul>
                <h4 className="sub-heading mt-5">
                  Jamia Miliya Islamia Cut off 2022
                </h4>
                <p className="description mt-3">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
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
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Review":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Infrastructure":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <div className="grid-container-for-3">
                  <div className="infa-box">
                    <img src={Img3} alt="" />
                    <p>Computer</p>
                  </div>
                  <div className="infa-box">
                    <img src={Img4} alt="" />
                    <p>Sports</p>
                  </div>
                  <div className="infa-box">
                    <img src={Img5} alt="" />
                    <p>Hospital</p>
                  </div>
                  <div className="infa-box">
                    <img src={Img6} alt="" />
                    <p>Library</p>
                  </div>
                  <div className="infa-box">
                    <img src={Img7} alt="" />
                    <p>GYM</p>
                  </div>
                  <div className="infa-box">
                    <img src={Img8} alt="" />
                    <p>Auditorium</p>
                  </div>
                </div>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mb-2">Library </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Digital Library </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Network Facilities </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">CISCO Networking Academy </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Hostels </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Sports Facilities </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Guest House </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <h4 className="sub-heading mt-3">Canteen </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>

                <h4 className="sub-heading mt-3">Amenities Complex </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>

                <h4 className="sub-heading mt-3">Banks & ATM </h4>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <div className="review-box">
                  <img src={studentEllipse1} alt="" className="user-img" />
                  <div className="title">
                    <p>Neha Sharma</p>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>Batch 2019
                  </p>
                  <p className="point">
                    <i className="fa-solid fa-circle"></i>B.Tech Mechanical
                    Engineering
                  </p>
                </div>
                <p className="description mt-3">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Gallery":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="sub-heading mb-2">Infrastructure Image </h4>
                <div className="gallery-container">
                  <img src={Img9} alt="" className="whole-img" />
                  <div className="flexbox-container">
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <button className="see-more">See 20 more</button>
                  </div>
                </div>

                <h4 className="sub-heading mt-5">Uploaded Images </h4>
                <div className="gallery-container">
                  <img src={Img9} alt="" className="whole-img" />
                  <div className="flexbox-container">
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <button className="see-more">See 20 more</button>
                  </div>
                </div>

                <h4 className="sub-heading mt-5">Campus Uploaded Images</h4>
                <div className="gallery-container">
                  <img src={Img9} alt="" className="whole-img" />
                  <div className="flexbox-container">
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <img src={Img9} alt="" />
                    <button className="see-more">See 20 more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Scholarship":
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <p className="description mt-3">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla ac
                </p>
                <h4 className="sub-heading mt-3">B.Tech Scholarship </h4>
                <ul className="key-points mt-4">
                  <li>
                    {" "}
                    JMI placement 2023 records the highest CTC of INR 25 LPA.{" "}
                  </li>
                  <li>
                    JMI Welcomes a Team from Applied Science University for the
                    German student exchange program.{" "}
                  </li>
                  <li>
                    A Global Webinar on "E-Literature Explorations of Literary
                    Creativity" is Hosted by JMI.{" "}
                  </li>
                  <li>
                    UGC notifies AMU and JMI in writing that CUET scores are
                    required for undergraduate admission in all central
                    universities.{" "}
                  </li>
                  <li>
                    {" "}
                    JMI and the Taiwan Economic Culture Center team up to
                    improve academic cooperation.{" "}
                  </li>
                  <li>
                    Jamia Millia Islamia conducted Entrepreneurship Development
                    Program.{" "}
                  </li>
                  <li>
                    In the upcoming session, Jamia intends to offer dual
                    degrees, online education, and FYUP.{" "}
                  </li>
                  <li>
                    {" "}
                    The University was recognised as a central university on
                    December 26, 1988.{" "}
                  </li>
                  <li>
                    In 1962, Jamia Millia Islamia University was declared a
                    “deemed to be university” by the University Grants
                    Commission.
                  </li>
                </ul>
                <h4 className="sub-heading mt-3">B.Tech Scholarship </h4>
                <ul className="key-points mt-4">
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                </ul>
                <h4 className="sub-heading mt-3">M.Tech Scholarship </h4>
                <ul className="key-points mt-4">
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                  <li>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </li>
                </ul>
              </div>
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia, Fees Details
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

              <div className="about-us-doubt margin-div boxShadow-container p-0">
                <img src={CollegeImg38} alt="" />
                <div className="detail">
                  <h1>
                    Upto 100% Scholarships
                    <br />
                    Available
                  </h1>
                  <button>Explore Now</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="college-info">
            <div className="left">
              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Last Update for Jamia MIliya Islamia
                </h4>
                <div className="last-date">
                  <p className="date">25 May 2023</p>
                  <p className="desc">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="last-date">
                  <p className="date">25 May 2023</p>
                  <p className="desc">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>

                <h4 className="heading margin-div">
                  Jamia Millia Islamia University Quick facts
                </h4>

                <ul className="key-points">
                  <li>
                    JMI placement 2023 records the highest CTC of INR 25 LPA.
                  </li>
                  <li>
                    JMI Welcomes a Team from Applied Science University for the
                    German student exchange program.
                  </li>
                  <li>
                    A Global Webinar on "E-Literature Explorations of Literary
                    Creativity" is Hosted by JMI.
                  </li>
                  <li>
                    UGC notifies AMU and JMI in writing that CUET scores are
                    required for undergraduate admission in all central
                    universities.
                  </li>
                  <li>
                    JMI and the Taiwan Economic Culture Center team up to
                    improve academic cooperation.
                  </li>
                  <li>
                    Jamia Millia Islamia conducted Entrepreneurship Development
                    Program.
                  </li>
                  <li>
                    In the upcoming session, Jamia intends to offer dual
                    degrees, online education, and FYUP.
                  </li>
                  <li>
                    The University was recognised as a central university on
                    December 26, 1988.
                  </li>
                  <li>
                    In 1962, Jamia Millia Islamia University was declared a
                    “deemed to be university” by the University Grants
                    Commission.
                  </li>
                </ul>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia, New Delhi Highlights
                </h4>
                <div className="highlights ">
                  {highlight.map((i, index) => (
                    <div className="item" key={`higlight${index}`}>
                      <div className="img-container">
                        <img src={i.img} alt="" />
                        <p> {i.title} </p>
                      </div>
                      <p> {i.sub} </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-box boxShadow-container margin-div">
                <h4 className="heading mb-2">
                  Jamia Miliya Islamia, New Delhi Ranking{" "}
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
                    {ranking.map((i, index) => (
                      <tr key={`ranking${index}`}>
                        <td>
                          {" "}
                          <img src={i.img} alt="" />
                        </td>
                        <td>{i.title} </td>
                        <td>{i.sub} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="show-more" style={{ border: "none" }}>
                  Show More
                </button>
              </div>

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
            </div>
            <div className="right">
              <div className="placement-report boxShadow-container margin-div">
                <div className="upper">
                  <img src={img1} alt="" />
                  <p>Are you Interested in this College ? </p>
                </div>
                <div className="btn-container">
                  <button className="dark" onClick={() => setOpen(true)}>
                    Placement Report
                  </button>
                  <button onClick={() => setOpen1(true)}>Apply Now</button>
                </div>
              </div>

              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Featured News</li>
                  <li>Recent News</li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-news boxShadow-container margin-div">
                <ul>
                  <li className="active">Trending Article</li>
                  <li>Recent Articles </li>
                </ul>

                <div className="news-container">
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                  <div className="Item">
                    <img src={Img2} alt="" />
                    <p>
                      Borem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
        <Banner img={JamiaBanner} className="m-0" />

        <div className="download-broacher boxShadow-container margin-div ">
          <p className="text">
            The National Institutional Ranking Framework (NIRF) has been
            accepted by the MoE and launched by Hono
          </p>
          <div>
            <button onClick={() => setOpenCanvas(true)}>
              Shortlist For Common Application
            </button>
            <button onClick={() => setOpen(true)}>
              Brochure <i className="fa-solid fa-download" />{" "}
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
