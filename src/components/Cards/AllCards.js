/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  badgeImg,
  bookmarkImg,
  cancelSvg,
  coin,
  combineUser,
  customerReview1,
  donorImg,
  examImg,
  fileSvg,
  fillBookmark,
  fillHeart,
  flag,
  heartImg,
  locationHollow,
  locationSvg,
  NearlyCollege1,
  progressSvg,
  rangkingSvg,
  ukSquare,
  verifiedSvg,
} from "../../assest";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { stringCutter } from "../../utils/utils";

const WorkOppurtunityCard = (item) => {
  const { img, title } = item;
  return (
    <div className="work-oppurtunity-card">
      <img src={img} alt="" />
      <p> {title} </p>
    </div>
  );
};

const ExploreDestinationCard = (item) => {
  const { img, title } = item;
  return (
    <div className="explore-destination-card">
      <img src={img} alt="" />
      <button> {title}</button>
    </div>
  );
};

const TopUniversitiesCard = (item) => {
  const { img, universityTitle, ranking, location, courseName, id } = item;
  const [isLoading, setIsLoading] = useState(false);
  const payload = {
    universityId: id,
  };
  const shortlistHandler = () => {
    postApi(endPoints.shortlistUniversity, payload, {
      successMsg: "Shortlisted",
    });
  };

  const applyHandler = () => {
    postApi(endPoints.applyOnUniversities, payload, {
      successMsg: "Applied Successfully",
      setLoading: setIsLoading,
    });
  };

  return (
    <div className="top-universities-card">
      <div className="head">
        <div className="title">
          <img src={img} alt="" />
          <p> {universityTitle} </p>
        </div>
        <img
          src={heartImg}
          onClick={shortlistHandler}
          alt=""
          className="heart-img"
        />
      </div>
      <hr />
      <div className="content">
        <div className="description">
          <img src={fileSvg} alt="" />
          <div>
            <p className="title"> {courseName} </p>
          </div>
        </div>
        <div className="description">
          <img src={rangkingSvg} alt="" />
          <div>
            <p className="title">{ranking} </p>
          </div>
        </div>
        <div className="description">
          <img src={locationSvg} alt="" />
          <div>
            <p className="title"> {location} </p>
          </div>
        </div>
        <button className="apply" onClick={applyHandler}>
          {isLoading ? <ClipLoader color="#fff" /> : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

const TopProgramCard = (item) => {
  const { img, title, desc } = item;
  return (
    <div className="top-program-card">
      <img src={img} alt="" className="main-img" />
      <div className="content">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      {/* <i className="fa-solid fa-angle-right"></i> */}
    </div>
  );
};

const MonthlyExpenseCard = (item) => {
  const { img, title, desc } = item;
  return (
    <div className="monthly-expense-card">
      <img src={img} alt="" />
      <p className="title"> {title} </p>
      <p className="desc"> {desc} </p>
    </div>
  );
};

const NearCollegeCard = (item) => {
  const navigate = useNavigate();
  const { img, collegeName } = item;

  return (
    <div className="near-college-card">
      <div className="img-container">
        <img
          src={img}
          alt=""
          className="college-img"
          onClick={() => navigate("/college-micro-info")}
          style={{ cursor: "pointer" }}
        />
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <p>9.5/10</p>
        </div>
      </div>

      <div className="description">
        <div className="college-title">
          <p className="name">{collegeName} </p>
          <div className="reviews">
            <p className="rev"> 5000 yearly</p>
            <p className="count">20.5k Reviews</p>
          </div>
        </div>

        <div className="desc-point">
          <p>View all courses and fees</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="desc-point">
          <p>Download Brochures</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="desc-point">
          <p>Compare</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="desc-point">
          <p>Speak to Expert</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <button className="outlined-btn">Add to Common Application Form</button>
        <button className="apply-btn">Apply Now </button>
      </div>
    </div>
  );
};

const ShortlistedUniversities = (item) => {
  const btnStatusCheker = (status) => {
    if (status === "APPLIED") {
      return (
        <button className="filled">
          <img src={progressSvg} alt="" />
          Applied
        </button>
      );
    } else if (status === "OFFER") {
      return (
        <button className="filled">
          <img src={progressSvg} alt="" />
          Offer
        </button>
      );
    } else if (status === "ENROLLMENT") {
      return (
        <button className="verified">
          <img src={verifiedSvg} alt="" />
          Enrollment
        </button>
      );
    } else if (status === "ACCEPTANCE") {
      return (
        <button className="verified">
          <img src={verifiedSvg} alt="" />
          Acceptance
        </button>
      );
    } else if (status === "SHORTLIST") {
      return (
        <button className="pending">
          <img src={progressSvg} alt="" />
          Shortlist
        </button>
      );
    } else if (status === "Apply Now") {
      return (
        <button className="filled" onClick={applyHandler}>
          {isLoading ? <ClipLoader color="#fff" /> : "Apply Now"}
        </button>
      );
    } else {
      return <button> {status} </button>;
    }
  };

  const {
    collegeImg,
    flagImg,
    title,
    isFav,
    location,
    status,
    btn2,
    id,
    reviews,
    fees,
    star,
    avgPackage,
    elegibility,
    approvedBy,
    courseTitle,
    shortlistedCount,
    institueType,
    btnAvailable
  } = item;

  const payload = {
    universityId: id,
  };

  const [isLoading, setIsLoading] = useState(false);

  const shortlistHandler = () => {
    postApi(endPoints.shortlistUniversity, payload, {
      successMsg: "Shortlisted",
    });
  };

  const applyHandler = () => {
    postApi(endPoints.applyOnUniversities, payload, {
      successMsg: "Applied Successfully",
      setLoading: setIsLoading,
    });
  };

  return (
    <div className="main">
      <div className="head">
        <div className="title">
          <img src={flagImg} alt="flag" />
          <div>
            <Link to={`/college-micro-info/${title}`}>
              <p> {title} </p>
            </Link>
            <p className="course-title"> {courseTitle} </p>
          </div>
        </div>
        {!btnAvailable && (
          <div className="actions">
            {isFav ? (
              <img src={fillHeart} alt="" />
            ) : (
              <img
                src={heartImg}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={shortlistHandler}
              />
            )}
            <div className="blank"></div>
            {isFav ? (
              <img src={fillBookmark} alt="" />
            ) : (
              <img
                src={bookmarkImg}
                style={{ cursor: "pointer" }}
                alt=""
                onClick={shortlistHandler}
              />
            )}
          </div>
        )}
      </div>
      <div className="details">
        <img src={collegeImg} alt="" className="college-img" />
        <div className="content">
          <div className="tags">
            {star && (
              <div className="rating">
                <p>{star} </p> <i className="fa-solid fa-star"></i>
              </div>
            )}
            {reviews && <p className="review"> ( {reviews} Reviews)</p>}

            {location && (
              <div className="location">
                <img src={locationHollow} alt="" />
                <p> {location} </p>
              </div>
            )}

            {institueType && (
              <div className="location">
                <img src={flag} alt="" />
                <p>Private</p>
              </div>
            )}
          </div>

          <div className="package">
            {fees && (
              <div className="item">
                <div className="upper">
                  <img src={coin} alt="" />
                  <p> {fees} </p>
                </div>
                <p className="faded">Fees</p>
              </div>
            )}
            {avgPackage && (
              <div className="item">
                <div className="upper">
                  <img src={donorImg} alt="" />
                  <p> {avgPackage} </p>
                </div>
                <p className="faded">Avg Package</p>
              </div>
            )}
            {elegibility && (
              <div className="item">
                <div className="upper">
                  <img src={examImg} alt="" />
                  <p> {stringCutter(elegibility, 20)} </p>
                </div>
                <p className="faded">Exams</p>
              </div>
            )}

            {approvedBy && (
              <div className="item">
                <div className="upper">
                  <img src={badgeImg} alt="" />
                  <p> {stringCutter(approvedBy, 20)} </p>
                </div>
                <p className="faded">Accredition</p>
              </div>
            )}
          </div>

          {shortlistedCount && (
            <div className="shortlisted-container">
              <div className="user-images">
                <img src={combineUser} alt="" className="user-image" />
                <div className="skewDiv"></div>
              </div>
              <p className="shortlisted-text">
                Shortlisted by {shortlistedCount}+ students
              </p>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="brochure">
        <ul>
          <li>
            <i className="fa-solid fa-circle"></i>Fees and Courses (10)
          </li>
          <li>
            <i className="fa-solid fa-circle"></i>Admission
          </li>
          <li>
            <i className="fa-solid fa-circle"></i>Placement
          </li>
        </ul>

        <div>
          {btnStatusCheker(status)}
          {btn2 && <button> {btn2} </button>}
        </div>
      </div>
    </div>
  );
};

const BlogCard = (item) => {
  const { img, title, description, publishedOn } = item;
  return (
    <div className="main">
      <div className="head">
        <img src={img} alt="" />
        <div className="detail">
          <p className="title"> {title} </p>
          <p className="published-on"> {publishedOn} </p>
        </div>
      </div>
      <div className="content">
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

const ReviewCard = () => {
  return (
    <div className="main">
      <div className="head">
        <img src={customerReview1} alt="" />
        <div className="detail">
          <p className="title">Get Placed In Good Colleges In UK</p>
          <p className="published-on">Published on : 12-04-2024</p>
        </div>
      </div>
      <div className="content">
        <p className="desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
    </div>
  );
};

const HowItWorkCard = (item) => {
  const { img, title, description } = item;
  return (
    <div className="step-card">
      <img src={img} alt="" />
      <h3> {title} </h3>
      <p>{description}</p>
    </div>
  );
};

const NearCollegecard = ({ item, isUser, userId }) => {
  const { id, img, collegeName, location, rating, description } = item;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const payload = {
    universityId: id,
  };

  const adwizorPayload = {
    universityId: id,
    userId,
  };

  const submitHandler = () => {
    isUser
      ? postApi(endPoints.applyOnUniversities, payload, {
          setLoading,
          successMsg: "Applied Successfully",
        })
      : postApi(endPoints.adwizor.applyforStudent, adwizorPayload, {
          setLoading,
          successMsg: "Applied Successfully",
        });
  };

  return (
    <div className="near-college-card">
      <div className="img-container">
        <img
          src={img}
          alt=""
          className="college-img"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/college-micro-info/${collegeName}`)}
        />
        {rating && (
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <p>{rating}/10</p>
          </div>
        )}
      </div>

      <div className="description">
        <div className="college-title">
          <p className="name">{collegeName} </p>
          <span className="location">
            <i class="fa-solid fa-location-dot"></i>
            {location}
          </span>
        </div>
        <ul className="points">
          {description.map(
            (i, index) =>
              i.desc && (
                <li key={`detail${index}`}>
                  {" "}
                  {i.title} : {i.desc}
                </li>
              )
          )}
        </ul>

        <div className="btn-container">
          <button className="apply-btn" onClick={() => submitHandler()}>
            {" "}
            {loading ? <ClipLoader color="#fff" /> : "Apply Now"}{" "}
          </button>
          <button
            className="outlined-btn"
            onClick={() => navigate(`/college-micro-info/${collegeName}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export {
  ReviewCard,
  WorkOppurtunityCard,
  ExploreDestinationCard,
  TopUniversitiesCard,
  TopProgramCard,
  MonthlyExpenseCard,
  NearCollegeCard,
  ShortlistedUniversities,
  BlogCard,
  HowItWorkCard,
  NearCollegecard,
};
