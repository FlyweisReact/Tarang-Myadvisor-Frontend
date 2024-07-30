/** @format */

import React, { useEffect, useState } from "react";
import WithLayout from "../Layout/WithLayout";
import { Banner, GoToTop } from "../components/HelpingComponents";
import {
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
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const btns = [
  "FunFacts",
  "Top Universities",
  "Admissions",
  "Visa",
  "Cost Of Living",
  "Work Opportunities",
  "FAQ’s",
];


//Define interface for the state structure


const StudyInternational = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [data, setData] = useState({
    data: {
      visa: {
        title: "",
        subtitle: "",
        cost: "",
        type: "",
        desc: "",
      },
      costOfLiving: {
        rent: "",
        food: "",
        transport: "",
        miscellaneous: "",
      },
    },
  });

  useEffect(() => {
    getApi(endPoints.user.getCountryStudyDetails(name), {
      setResponse: setData,
    });
  }, [name]);

  const cards = [
    {
      img: counrtyVecotr,
      title: "Captial",
      desc: data?.data?.capital,
    },
    {
      img: countryCardImg,
      title: "Population",
      desc: data?.data?.population,
    },
    {
      img: countryCardImg1,
      title: "Language",
      desc: data?.data?.language,
    },
    {
      img: countryCardImg2,
      title: "Students",
      desc: data?.data?.internationalStudent,
    },
    {
      img: countryCardImg3,
      title: "GDP",
      desc: data?.data?.gdp,
    },
    {
      img: countryCardImg4,
      title: "Dailing Code",
      desc: data?.data?.dialingCode,
    },
    {
      img: countryCardImg5,
      title: "Currency",
      desc: data?.data?.currency,
    },
    {
      img: countryCardImg6,
      title: "Universities",
      desc: data?.data?.totalUniversityAndCollege,
    },
  ];

  return (
    <section className="international-section mb-3">
      <GoToTop />
      <Banner img={data?.data?.bannerImage} />

      <div className="btn-internation-list mb-3">
        {btns.map((i, index) => (
          <a href={`#${i}`}>
            <button key={`index${index}`}> {i} </button>
          </a>
        ))}
      </div>

      <div className="box-shadow-container mb-3" id={"FunFacts"}>
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

      <div
        className="mt-5 mb-5 top-universities-container"
        id={"Top Universities"}
      >
        <h4 className="normal-heading">TOP UNIVERSITIES</h4>
        <div className="grid-container-for-3 card-collector">
          <TopUniversitiesCard />
          <TopUniversitiesCard />
          <TopUniversitiesCard />
        </div>

        <button className="dream-university">Find Your Dream University</button>
      </div>

      <div className="why-study-international mt-5 mb-5" id={"Admissions"}>
        <h4 className="title">
          Admission Requirements for Australia Study Abroad
        </h4>

        <ul className="count-list">
          {/* {data?.data?.AdmissionRequirement?.map((item ,index) => <li> {item} </li>)} */}
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

      <div className="mt-5 mb-5 visa-banner" id={"Visa"}>
        <img src={flightVector} alt="" className="main-img" />
        <div className="content">
          <h4 className="title"> {data.data.visa.title} </h4>
          <p className="desc"> {data.data.visa.subtitle}</p>
          <p className="desc">
            Cost -{" "}
            <span style={{ color: "#FFCF2D" }}>{data.data.visa.cost} </span>
          </p>
          <p className="desc">
            Type-{" "}
            <span style={{ color: "#FFCF2D" }}>{data.data.visa.type}</span>
          </p>
          <p className="desc-2">{data.data.visa.desc}</p>
        </div>
      </div>

      <div
        className="monthly-expenses-container boxShadow-container mt-5 mb-5"
        id={"Cost Of Living"}
      >
        <h4>Cost Of Living in Australia</h4>
        <img src={pieVector} alt="" className="pie-img" />
        <h4>Monthly Living Expenses</h4>

        <div className="grid-container-for-4">
          {expenseArr.map((i, index) => (
            <MonthlyExpenseCard {...i} key={`monthly${index}`} />
          ))}
        </div>
      </div>

      <div className="work-oppurtunity mt-5 mb-5" id={"Work Opportunities"}>
        <h4>Work Opportunities in Australia</h4>
        <div className="grid-container-for-2">
          {workOppurtunityArr.map((i, index) => (
            <WorkOppurtunityCard {...i} key={`workOppurtunity${index}`} />
          ))}
        </div>
      </div>

      <div
        className="univeristy-accordion mt-5 mb-5 boxShadow-container"
        id={"FAQ’s"}
      >
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
