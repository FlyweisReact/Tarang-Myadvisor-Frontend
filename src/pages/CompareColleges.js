/** @format */

import React, { useState } from "react";
import {
  collegeHighlight1,
  collegeHighlight2,
  collegeHighlight3,
  collegeHighlight4,
  collegeHighlight5,
  collegeHighlight6,
  collegeHighlight7,
  img1,
  Img2,
  JamiaBanner,
} from "../assest";
import { Banner } from "../components/HelpingComponents";
import {
  AlertModal,
  CollegeShortlistedCanvas,
} from "../components/Modals/Modals";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";

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

const CompareColleges = () => {
  const [open, setOpen] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);
  return (
    <section className="college-micro-info-page">
      <AlertModal
        show={open}
        onHide={() => setOpen(false)}
        title={"Register Now To Download Placement Report"}
      />
      <CollegeShortlistedCanvas
        show={openCanvas}
        handleClose={() => setOpenCanvas(false)}
      />
      <Banner img={JamiaBanner} className="m-0" />
      <div className="download-broacher boxShadow-container margin-div ">
        <p className="text">
          The National Institutional Ranking Framework (NIRF) has been accepted
          by the MoE and launched by Hono
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

      <div className="college-info">
        <div className="left" style={{ width: "50%" }}>
          <div className="detail-box boxShadow-container margin-div">
            <h4 className="heading mb-2">
              Jamia Millia Islamia University Quick facts{" "}
            </h4>

            <ul className="key-points mt-5">
              <li>
                JMI placement 2023 records the highest CTC of INR 25 LPA.{" "}
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
                JMI and the Taiwan Economic Culture Center team up to improve
                academic cooperation.
              </li>
              <li>
                Jamia Millia Islamia conducted Entrepreneurship Development
                Program.
              </li>
              <li>
                In the upcoming session, Jamia intends to offer dual degrees,
                online education, and FYUP.
              </li>
              <li>
                The University was recognised as a central university on
                December 26, 1988.
              </li>
              <li>
                In 1962, Jamia Millia Islamia University was declared a “deemed
                to be university” by the University Grants Commission.
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

        <div className="left" style={{ width: "50%" }}>
          <div className="detail-box boxShadow-container margin-div">
            <h4 className="heading mb-2">
              Asia Pacific Institute of Management...{" "}
            </h4>

            <ul className="key-points mt-5">
              <li>
                JMI placement 2023 records the highest CTC of INR 25 LPA.{" "}
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
                JMI and the Taiwan Economic Culture Center team up to improve
                academic cooperation.
              </li>
              <li>
                Jamia Millia Islamia conducted Entrepreneurship Development
                Program.
              </li>
              <li>
                In the upcoming session, Jamia intends to offer dual degrees,
                online education, and FYUP.
              </li>
              <li>
                The University was recognised as a central university on
                December 26, 1988.
              </li>
              <li>
                In 1962, Jamia Millia Islamia University was declared a “deemed
                to be university” by the University Grants Commission.
              </li>
            </ul>
          </div>

          <div className="detail-box boxShadow-container margin-div">
            <h4 className="heading mb-2">
              Asia Pacific Institute of Management...{" "}
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
      </div>
    </section>
  );
};

export default WrappedComponent({ WrappedComponent: CompareColleges });
