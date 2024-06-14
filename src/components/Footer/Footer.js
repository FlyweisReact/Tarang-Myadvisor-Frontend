/** @format */

import React from "react";
import {
  footerLogo,
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  instaIcon,
  FooterBg,
} from "../../assest/index";
import { Link } from "react-router-dom";
import "../../css/footer.css";

const data = [
  {
    heading: "Top Colleges",
    links: ["M.B.A", "B.Tech/ B.E", "MCA", "BCA", "M.tech", "MA", "BA"],
  },
  {
    heading: "Top University",
    links: [
      "Engineering",
      "Management",
      "Medical",
      "LAW",
      "Commerce",
      "Science",
      "Arts",
    ],
  },
  {
    heading: "Top Exams",
    links: ["CAT", "GATE", "JEE- MAIN", "NEET", "XAT", "CLAT", "MAT"],
  },
  {
    heading: "Top Cities",
    links: ["Bangalore", "Lucknow", "Indore", "Delhi", "Mumbai", "Kolkata"],
  },
  {
    heading: "Top States",
    links: [
      "Uttar Pradesh",
      "Tamil Nadu",
      "Karnataka",
      "West Bengal",
      "Kerala",
      "Maharashtra",
    ],
  },
];

const Footer = () => {
  return (
    <section className="Footer">
      <div className="upper-sec">
        <div className="left">
          <img src={footerLogo} alt="" />
        </div>
        <div className="web-links">
          {data.map((i, index) => (
            <ul key={`footer${index}`}>
              <li className="heading">{i.heading} </li>
              {i.links.map((item, index) => (
                <li key={`Links${index}${item}`}>
                  {" "}
                  <Link href={"/home"}> {item}</Link>{" "}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="social-link">
        <div className="icons">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={instaIcon} alt="" />
        </div>
      </div>

      <div className="t-c">
        <p className="border-l">Terms & Condition</p>
        <p className="border-l">Privacy & Policy</p>
        <p>© 2023 Brand Name </p>
      </div>
      <img src={FooterBg} alt="" className="curve-img" />
    </section>
  );
};

export default Footer;
