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
  houseVector,
  foodVector,
  busVector,
  musicVector,
} from "../assest";
import {
  MonthlyExpenseCard,
  TopProgramCard,
  TopUniversitiesCard,
  WorkOppurtunityCard,
} from "../components/Cards/AllCards";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { Slider } from "../components/Sliders/Sliders";
import { RenderAbroadCollegeItems } from "../components/Sliders/SwiperComponents";
import {
  abroadCollegeConfig,
  sypnosisConfig,
} from "../components/Sliders/SwiperConfig";

const btns = [
  "FunFacts",
  "Top Universities",
  "Admissions",
  "Visa",
  "Cost Of Living",
  "Work Opportunities",
  "FAQ’s",
];

const StudyInternational = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [topColleges, setTopColleges] = useState({ data: [] });
  const [data, setData] = useState({
    data: {
      capital: "",
      population: "",
      language: "",
      internationalStudent: "",
      gdp: "",
      dialingCode: "",
      currency: "",
      totalUniversityAndCollege: "",
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
      aboutUs: [],
      AdmissionRequirement: [],
      popularProgram: [],
      workOppurtunityArr: [],
    },
  });

  useEffect(() => {
    getApi(endPoints.user.getCountryStudyDetails(name), {
      setResponse: setData,
    });
    getApi(endPoints.getTopTenColleges(name, 1, 10), {
      setResponse: setTopColleges,
    });
  }, [name]);

  useEffect(() => {
    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
  }, []);

  const cards = [
    {
      img: counrtyVecotr,
      title: "Captial",
      desc: data.data.capital,
    },
    {
      img: countryCardImg,
      title: "Population",
      desc: data.data.population,
    },
    {
      img: countryCardImg1,
      title: "Language",
      desc: data.data.language,
    },
    {
      img: countryCardImg2,
      title: "Students",
      desc: data.data.internationalStudent,
    },
    {
      img: countryCardImg3,
      title: "GDP",
      desc: data.data.gdp,
    },
    {
      img: countryCardImg4,
      title: "Dailing Code",
      desc: data.data.dialingCode,
    },
    {
      img: countryCardImg5,
      title: "Currency",
      desc: data.data.currency,
    },
    {
      img: countryCardImg6,
      title: "Universities",
      desc: data.data.totalUniversityAndCollege,
    },
  ];

  const programmList = data.data.popularProgram.map((i) => ({
    img: i.image,
    title: i.title,
  }));

  const expenseArr = [
    {
      img: houseVector,
      title: "Rent",
      desc: data?.data?.costOfLiving?.rent,
    },
    {
      img: foodVector,
      title: "Food",
      desc: data?.data?.costOfLiving?.food,
    },
    {
      img: busVector,
      title: "Transport",
      desc: data?.data?.costOfLiving?.transport,
    },
    {
      img: musicVector,
      title: "Miscellaneous",
      desc: data?.data?.costOfLiving?.Miscellaneous,
    },
  ];

  const workOppurtunityArr = data?.data?.workOpportunity?.map((i) => ({
    img: i?.image1,
    title: i?.title1,
  }));

  const faqArr = data?.data?.faqs?.map((i) => ({
    title: i?.question,
    desc: i?.answer,
  }));

  const countriesArr = allCountries.data.map((i) => ({
    img: i?.image,
    title: i?.ContryName,
  }));

  console.log(topColleges.data);

  const collegesList = topColleges.data.map((i) => ({
    img: i?.ImageUrl?.[0],
    universityTitle: i?.UniversityName,
    ranking: i?.Ranked,
    location: i?.location,
    courseName: i?.CourseName,
    id: i?._id,
  }));

  return (
    <section className="international-section mb-3">
      <GoToTop />
      <Banner img={data?.data?.bannerImage} />

      {btns?.length > 0 && (
        <div className="btn-internation-list mb-3">
          {btns.map((i, index) => (
            <a href={`#${i}`}>
              <button key={`index${index}`}> {i} </button>
            </a>
          ))}
        </div>
      )}

      {cards?.length > 0 && (
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
      )}

      {data.data.aboutUs?.length > 0 && (
        <div className="why-study-international mt-5 mb-5">
          <h4 className="title">Why Study In {name} ?</h4>
          {showMore
            ? data.data.aboutUs.map((i, index) => (
                <p className="description" key={`desc${index}`}>
                  {" "}
                  {i}{" "}
                </p>
              ))
            : data.data.aboutUs.slice(0, 1).map((i, index) => (
                <p className="description" key={`desc${index}`}>
                  {" "}
                  {i}{" "}
                </p>
              ))}

          {!showMore ? (
            <button className="read-more" onClick={() => setShowMore(true)}>
              Read More
            </button>
          ) : (
            <button className="read-more" onClick={() => setShowMore(false)}>
              Read Less
            </button>
          )}
        </div>
      )}

      {collegesList?.length > 0 && (
        <div
          className="mt-5 mb-5 top-universities-container"
          id={"Top Universities"}
        >
          <h4 className="normal-heading">TOP UNIVERSITIES</h4>
          <div className="card-collector">
            <Slider
              data={collegesList}
              swiperConfig={sypnosisConfig}
              RenderSlide={TopUniversitiesCard}
            />
          </div>

          <button
            className="dream-university"
            onClick={() => navigate("/study-abroad")}
          >
            Find Your Dream University
          </button>
        </div>
      )}

      {data.data.AdmissionRequirement?.length > 0 && (
        <div className="why-study-international mt-5 mb-5" id={"Admissions"}>
          <h4 className="title">
            Admission Requirements for {name} Study Abroad
          </h4>

          <ul className="count-list">
            {data.data.AdmissionRequirement.map((i, index) => (
              <li key={`admission${index}`}> {i} </li>
            ))}
          </ul>
        </div>
      )}

      {programmList?.length > 0 && (
        <div className="mt-5 mb-5 top-programm-container">
          <h4 className="normal-heading">Top Programs</h4>

          <div className="grid-container-for-3 boxShadow-container mt-4">
            {programmList.map((item, index) => (
              <TopProgramCard {...item} key={`programm${index}`} />
            ))}
          </div>
        </div>
      )}

      {data.data.visa.title && (
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
      )}

      {expenseArr?.length > 0 && (
        <div
          className="monthly-expenses-container boxShadow-container mt-5 mb-5"
          id={"Cost Of Living"}
        >
          <h4>Cost Of Living in {name} </h4>
          <img src={pieVector} alt="" className="pie-img" />
          <h4>Monthly Living Expenses</h4>

          <div className="grid-container-for-4">
            {expenseArr.map((i, index) => (
              <MonthlyExpenseCard {...i} key={`monthly${index}`} />
            ))}
          </div>
        </div>
      )}

      {workOppurtunityArr?.length > 0 && (
        <div className="work-oppurtunity mt-5 mb-5" id={"Work Opportunities"}>
          <h4>Work Opportunities in Australia</h4>
          <div className="grid-container-for-2">
            {workOppurtunityArr?.map((i, index) => (
              <WorkOppurtunityCard {...i} key={`workOppurtunity${index}`} />
            ))}
          </div>
        </div>
      )}

      {faqArr?.length > 0 && (
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
      )}

      {countriesArr?.length > 0 && (
        <div className="explore-destinations mt-5 mb-5">
          <h4 className="main-title">EXPLORE MORE DESTINATIONS</h4>

          <section className="explore-country-slider">
            <Slider
              data={countriesArr}
              swiperConfig={abroadCollegeConfig}
              RenderSlide={RenderAbroadCollegeItems}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default WithLayout(StudyInternational);
