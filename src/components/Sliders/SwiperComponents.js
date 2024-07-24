/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { degreeImg, dollarIcon, exportImg } from "../../assest";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { CustomeDropdown, RatingComponent } from "../HelpingComponents";
import { ClipLoader } from "react-spinners";

//All Swiper components
const RenderAbroadCollegeItems = (item) => {
  const navigate = useNavigate();
  return (
    <div className="Item">
      <img src={item?.img} alt="" />
      <div className="content">
        <p className="title"> {item?.title} </p>
        <button onClick={() => navigate(`/study-international/${item.title}`)}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

const RenderAdwizorCards = (item) => {
  return (
    <div className="card">
      <div className="detail">
        <Link to={`/user-dashboard/adwizor-profile/${item.id}`}>
          <img src={item.img} alt="" className="mainImg" />
        </Link>
        <div className="content">
            <p className="title"> {item.title} </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <p>{item.rating} </p>
          </div>
          {item.description.map((i, index) => (
            <p className="faded" key={`desc${index}`}>
              {" "}
              {i}{" "}
            </p>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <Link to="/connect-with-adwizor">
          <button>Book Appointment</button>
        </Link>
        <Link to={`/user-dashboard/adwizor-profile/${item.id}`}>
          <button>View Profile</button>
        </Link>
      </div>
    </div>
  );
};

const RenderUniversityCards = (item) => {
  const [loading, setLoading] = useState(false);

  const payload = {
    universityId: item?.id,
  };

  const submitHandler = () => {
    postApi(endPoints.applyOnUniversities, payload, {
      setLoading,
      successMsg: "Applied Successfully",
    });
  };

  return (
    <div className="univeristy-card-carousel-item">
      <div className="head">
        <img src={item.img} alt="" />
        <p className="title">{item.collegeName}</p>
      </div>
      <p className="subject">{item.subject}</p>
      <hr />
      {item.description.map((i, index) => (
        <div className="detail" key={`detail${index}`}>
          <p> {i.title} </p>
          <p> {i.desc} </p>
        </div>
      ))}

      <hr />
      {/* <div className="predection">
        <p className="title">Success prediction</p>
        <div className="flex-div">
          <p>Sep 2024</p>
          <p>Jan 2025</p>
          <p>Sep 2025</p>
        </div>
        <div className="flex-div">
          <button>Very High</button>
          <button>Very High</button>
          <button>Very High</button>
        </div>
      </div> */}
      <button className="view-detail">View Details</button>
      {loading ? (
        <button className="create-application">
          <ClipLoader color="#fff" />
        </button>
      ) : (
        <button className="create-application" onClick={() => submitHandler()}>
          Create application
          <img src={exportImg} alt="" />
        </button>
      )}
    </div>
  );
};

const RenderFeatureItems = (item) => {
  return (
    <div className="slide">
      <img src={item.img} alt="" />
      <h5> {item.title} </h5>
      <p>{item.detail}</p>
    </div>
  );
};

const RenderSypnosisItem = (item) => {
  return (
    <div className="Item">
      <div className="heading">
        <img src={item.flag} alt="" />
        <div className="content">
          <Link to={`/study-international/${item.title}`}>
            <p className="title"> {item.title} </p>
          </Link>
          <p className="desc">Check 170 colleges {">"}</p>
        </div>
      </div>

      <div className="cost">
        <div className="item">
          <img src={degreeImg} alt="" />
          <div className="content">
            <p className="title">1008</p>
            <p className="dash">No.of Colleges</p>
          </div>
        </div>
        <div className="item">
          <img src={dollarIcon} alt="" />
          <div className="content">
            <p className="title">32.68 k USD/Year</p>
            <p className="dash">Avg. Study Cost</p>
          </div>
        </div>
      </div>

      <div className="guides ">
        <p className="fw-bold">Guides</p>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      {item.accordion.map((item, index) => (
        <div
          className="guides"
          style={{ cursor: "pointer" }}
          key={`accordion${index}`}
        >
          <p> {item} </p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      ))}
    </div>
  );
};

const RenderFilterItems = (i) => {
  return (
    <CustomeDropdown
      items={i.items}
      className={"prefilled-filters"}
      title={i.title}
      titleIcon={i.titleIcon}
      caretIcon={i.caretIcon}
    />
  );
};

const RenderCustomerReviewsCard = (i) => {
  const { img, rating, title, description } = i;
  return (
    <div className="customer-review-card">
      <div className="rating">
        <img src={img} alt="" />
        <RatingComponent num={rating} />
      </div>
      <div className="content">
        <p className="title"> {title} </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const RenderStudentTestimonialCard = (i) => {
  return (
    <div className="item">
      <div className="content">
        <div className="img-container">
          <img src={i.image} alt="" />
        </div>
        <p className="title"> {i.name} </p>
        <p className="position"> {i.title} </p>
        <p className="description">{i.desc}</p>
      </div>
    </div>
  );
};

const RenderTopCityCard = ({ item, onClickEvent }) => {
  return (
    <div
      className="Item"
      style={{ cursor: "pointer" }}
      onClick={() => onClickEvent(item.title)}
    >
      <img src={item.img} alt="" />
      <p>{item.title}</p>
    </div>
  );
};

export {
  RenderAbroadCollegeItems,
  RenderCustomerReviewsCard,
  RenderAdwizorCards,
  RenderUniversityCards,
  RenderFeatureItems,
  RenderSypnosisItem,
  RenderFilterItems,
  RenderStudentTestimonialCard,
  RenderTopCityCard,
};
