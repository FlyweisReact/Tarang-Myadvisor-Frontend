/** @format */

import React, { useEffect } from "react";
import WithLayout from "../Layout/WithLayout";
import { Banner, GoToTop } from "../components/HelpingComponents";
import {
  BannerInternational,
  counrtyVecotr,
  countryCardImg,
  countryCardImg1,
  countryCardImg2,
  countryCardImg3,
  countryCardImg4,
  countryCardImg5,
  countryCardImg6,
  flightVector,
  pieVector,
  faqVector,
} from "../assest";
import {
  expenseArr,
  exploreDestinationArr,
  faqArr,
  topProgrammsArr,
  workOppurtunityArr,
} from "../constant/constant";
import {
  ExploreDestinationCard,
  MonthlyExpenseCard,
  TopProgramCard,
  TopUniversitiesCard,
  WorkOppurtunityCard,
} from "../components/Cards/AllCards";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

const btns = [
  "FunFacts",
  "Top Universities",
  "Admissions",
  "Visa",
  "Cost Of Living",
  "Work Opportunities",
  "FAQ’s",
];

const cards = [
  {
    img: counrtyVecotr,
    title: "Captial",
    desc: "Canberra",
  },
  {
    img: countryCardImg,
    title: "Population",
    desc: "26 Mn",
  },
  {
    img: countryCardImg1,
    title: "Language",
    desc: "English",
  },
  {
    img: countryCardImg2,
    title: "Students",
    desc: "87,909",
  },
  {
    img: countryCardImg3,
    title: "GDP",
    desc: "$ 1.37 Trillion",
  },
  {
    img: countryCardImg4,
    title: "Dailing Code",
    desc: "+61",
  },
  {
    img: countryCardImg5,
    title: "Currency",
    desc: "Australian Dollar",
  },
  {
    img: countryCardImg6,
    title: "Universities",
    desc: "43",
  },
];

const StudyInternational = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="international-section mb-3">
      <GoToTop />
      <Banner img={BannerInternational} />

      <div className="btn-internation-list mb-3">
        {btns.map((i, index) => (
          <button key={`index${index}`}> {i} </button>
        ))}
      </div>

      <div className="box-shadow-container mb-3">
        <div className="grid-container-for-3">
          {cards.map((i, index) => (
            <div className="country-card" key={`countryCard${index}`}>
              <img src={i.img} alt="" />
              <div className="content">
                <p className="title"> {i.title} </p>
                <p className="title-bold"> {i.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-study-international mt-5 mb-5">
        <h4 className="title">Why Study In Australia ?</h4>
        <p className="description">
          Australia's dedication to providing high-quality education, fostering
          cultural diversity, offering work opportunities, showcasing natural
          beauty, and ensuring a high quality of life with numerous outdoor
          activities makes it a compelling destination for international
          students seeking a comprehensive and enriching educational experience.
        </p>
        <button
          className="read-more"
          onClick={() => navigate("/study-international/features")}
        >
          Read More
        </button>
      </div>

      <div className="mt-5 mb-5 top-universities-container">
        <h4 className="normal-heading">TOP UNIVERSITIES</h4>
        <div className="grid-container-for-3 card-collector">
          <TopUniversitiesCard />
          <TopUniversitiesCard />
          <TopUniversitiesCard />
        </div>

        <button className="dream-university">Find Your Dream University</button>
      </div>

      <div className="why-study-international mt-5 mb-5">
        <h4 className="title">
          Admission Requirements for Australia Study Abroad
        </h4>

        <ul className="count-list">
          <li>Copy of a valid passport</li>
          <li>
            Australian secondary school certificate of education (Year 12) or
            equivalent or Diploma / Advanced Diploma from the Vocational
            Education and Training (VET) sector
          </li>
          <li>ACT/SAT/LSAT for UG programs</li>
          <li>GMAT/GRE scores for PG programs</li>
          <li>English proficiency scores (TOEFL/IELTS)</li>
          <li>Letters of Recommendation</li>
          <li>CV/Resume/Essays</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Evidence of funds</li>
        </ul>

        <button className="read-more">Talk to Expert</button>
      </div>

      <div className="mt-5 mb-5 top-programm-container">
        <h4 className="normal-heading">Top Programs</h4>

        <div className="grid-container-for-3 boxShadow-container mt-4">
          {topProgrammsArr.map((item, index) => (
            <TopProgramCard {...item} key={`programm${index}`} />
          ))}
        </div>
      </div>

      <div className="mt-5 mb-5 visa-banner">
        <img src={flightVector} alt="" className="main-img" />
        <div className="content">
          <h4 className="title">Visa for Australia</h4>
          <p className="desc">Temporary Graduate Visa Subclass 485</p>
          <p className="desc">
            Cost - <span style={{ color: "#FFCF2D" }}>AU$ 1661</span>
          </p>
          <p className="desc">
            Type- <span style={{ color: "#FFCF2D" }}>Work</span>
          </p>
          <p className="desc-2">
            This visa is for international students who have recently graduated
            in Australia. It lets you live, study and work in Australia
            temporarily.
          </p>
        </div>
      </div>

      <div className="monthly-expenses-container boxShadow-container mt-5 mb-5">
        <h4>Cost Of Living in Australia</h4>
        <img src={pieVector} alt="" className="pie-img" />
        <h4>Monthly Living Expenses</h4>

        <div className="grid-container-for-4">
          {expenseArr.map((i, index) => (
            <MonthlyExpenseCard {...i} key={`monthly${index}`} />
          ))}
        </div>
      </div>

      <div className="work-oppurtunity mt-5 mb-5">
        <h4>Work Opportunities in Australia</h4>
        <div className="grid-container-for-2">
          {workOppurtunityArr.map((i, index) => (
            <WorkOppurtunityCard {...i} key={`workOppurtunity${index}`} />
          ))}
        </div>
      </div>

      <div className="univeristy-accordion mt-5 mb-5 boxShadow-container">
        <h4 className="title">FAQ’s</h4>
        <img src={faqVector} alt="" className="main-img" />
        <div className="faq-accordion">
          <Accordion>
            {faqArr.map((i, index) => (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header> {i.title} </Accordion.Header>
                <Accordion.Body>{i.desc}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="explore-destinations mt-5 mb-5">
        <h4 className="main-title">EXPLORE MORE DESTINATIONS</h4>

        <div className="grid-container-for-3">
          {exploreDestinationArr.map((item, index) => (
            <ExploreDestinationCard {...item} key={`destination${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WithLayout(StudyInternational);
