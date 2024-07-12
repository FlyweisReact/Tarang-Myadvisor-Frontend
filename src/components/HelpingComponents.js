/** @format */

import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { GoToTopImg, touristImg1, touristImg2 } from "../assest";

const CustomeDropdown = ({ items, title, caretIcon, titleIcon, className }) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button className={`${className}`}>
        <span>
          {titleIcon}
          {title}
        </span>
        {caretIcon && <i className="fa-solid fa-caret-down"></i>}
      </button>
    </Dropdown>
  );
};

const AdwizorCards = ({ topAdwizor, topAdwizorData, allAdwizors }) => {
  const navigate = useNavigate();
  if (topAdwizor) {
    return (
      <div className="top-adwizors">
        <h4 className="normal-heading">Find Top Adwizors</h4>
        <div className="cards">
          {topAdwizorData.map((i, index) => (
            <div className="item" key={`topadwizor${index}`}>
              <div className="detail">
                <img src={i.img} alt="" className="mainImg" />
                <div className="content">
                  <p className="title">{i.title} </p>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <p> {i.rating} </p>
                  </div>
                  {i.description.map((item, index) => (
                    <p className="faded" key={`desc${index}`}>
                      {" "}
                      {item}{" "}
                    </p>
                  ))}
                </div>
              </div>
              <div className="btn-container">
                <button onClick={() => navigate("/connect-with-adwizor")}>
                  Book Appointment
                </button>
                <button
                  onClick={() => navigate("/user-dashboard/adwizor-profile")}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="all" onClick={() => navigate("/find-an-adwizor")}>
          See All
        </button>
      </div>
    );
  } else {
    return (
      <div className="verfied-adwizor margin-div">
        {allAdwizors.map((i, index) => (
          <div className="main" key={`allAdwizor${index}`}>
            <img
              src={i.img}
              alt=" "
              onClick={() => navigate("/user-dashboard/adwizor-profile")}
            />
            <div className="content">
              <p
                className="title"
                onClick={() => navigate("/user-dashboard/adwizor-profile")}
              >
                {" "}
                {i.title}{" "}
              </p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <p> {i.rating} </p>
              </div>
              {i.description.map((item, index) => (
                <p className="faded" key={`desc${index}`}>
                  {item}
                </p>
              ))}
              <div className="btn-container">
                <button
                  className="outlined"
                  onClick={() =>
                    navigate("/user-dashboard/my-messages/Marvin%20McKinney")
                  }
                >
                  Chat
                </button>
                <button onClick={() => navigate("/connect-with-adwizor")}>
                  Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

const Banner = ({ img, className }) => {
  return (
    <section className={`general-banner margin-div ${className}`}>
      <img src={img} alt="" />
    </section>
  );
};

const AppointmentFloatingBtn = () => {
  return (
    <Link to={"/connect-with-adwizor"}>
      <button className="book-appointment">Book an Appointment</button>
    </Link>
  );
};

const InfluencerCard = (item) => {
  const { img, title, desc } = item;
  return (
    <div className="adwizor-blogs" style={{ backgroundImage: `url(${img})` }}>
      <p className="title"> {title} </p>
      <p className="desc"> {desc} </p>
    </div>
  );
};

const ProgressBar = ({ width }) => {
  return (
    <div className="custom-progress-bar">
      <div className="progress" style={{ width }}></div>
    </div>
  );
};

const TouristImage = () => {
  return (
    <div className="tourist-img-container">
      <img src={touristImg1} alt="" />
      <img src={touristImg2} alt="" />
    </div>
  );
};

const GoToTop = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="go-to-top" onClick={() => goToTop()}>
      {" "}
      <img src={GoToTopImg} alt="" />{" "}
    </div>
  );
};

const BannerSearchComponent = () => {
  return (
    <div className="banner-search-div">
      <h1>Let’s Start your Career Journey.</h1>
      <div className="search-div">
        <input
          type={"search"}
          placeholder="Search for colleges, exams, Q & A, Articles..."
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <button className="explore-btn">Explore College & Univesity</button>
    </div>
  );
};

const BlinkingHeading = ({ text }) => {
  return (
    <div className="animated-heading">
      <p>{text}</p>
    </div>
  );
};

export {
  InfluencerCard,
  GoToTop,
  CustomeDropdown,
  AdwizorCards,
  Banner,
  AppointmentFloatingBtn,
  ProgressBar,
  BannerSearchComponent,
  TouristImage,
  BlinkingHeading
};
