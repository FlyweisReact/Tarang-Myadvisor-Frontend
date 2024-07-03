/** @format */

import { degreeImg, dollarIcon, exportImg } from "../../assest";

//All Swiper components
const renderAbroadCollegeItems = (item) => {
  return (
    <div className="Item">
      <img src={item?.img} alt="" />
      <div className="content">
        <p className="title"> {item?.title} </p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

const renderAdwizorCards = (item) => {
  return (
    <div className="card">
      <div className="detail">
        <img src={item.img} alt="" className="mainImg" />
        <div className="content">
          <p className="title"> {item.name} </p>
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
        <button>Book Appointment</button>
        <button>View Profile</button>
      </div>
    </div>
  );
};

const renderUniversityCards = (item) => {
  return (
    <div className="univeristy-card">
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
      <div className="predection">
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
      </div>
      <button className="view-detail">View Details</button>
      <button className="create-application">
        Create application
        <img src={exportImg} alt="" />
      </button>
    </div>
  );
};

const renderFeatureItems = (item) => {
  return (
    <div className="slide">
      <img src={item.img} alt="" />
      <h5> {item.title} </h5>
      <p>{item.detail}</p>
    </div>
  );
};

const renderSypnosisItem = (item) => {
  return (
    <div className="Item">
      <div className="heading">
        <img src={item.flag} alt="" />
        <div className="content">
          <p className="title"> {item.title} </p>
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

export {
  renderAbroadCollegeItems,
  renderAdwizorCards,
  renderUniversityCards,
  renderFeatureItems,
  renderSypnosisItem,
};
