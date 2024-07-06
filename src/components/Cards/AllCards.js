/** @format */

import {
  fileSvg,
  heartImg,
  locationSvg,
  rangkingSvg,
  ukSquare,
} from "../../assest";

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

const TopUniversitiesCard = () => {
  return (
    <div className="top-universities-card">
      <div className="head">
        <div className="title">
          <img src={ukSquare} alt="" />
          <p>Stanford University , UK</p>
        </div>
        <img src={heartImg} alt="" className="heart-img" />
      </div>
      <hr />
      <div className="content">
        <div className="description">
          <img src={fileSvg} alt="" />
          <div>
            <p className="faded">5.5</p>
            <p className="title">Minimum IELTS Required</p>
          </div>
        </div>
        <div className="description">
          <img src={rangkingSvg} alt="" />
          <div>
            <p className="faded">701 - 750</p>
            <p className="title">Ranking</p>
          </div>
        </div>
        <div className="description">
          <img src={locationSvg} alt="" />
          <div>
            <p className="title">Footscary , Australia</p>
          </div>
        </div>
        <button className="apply">Apply Now</button>
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
      <i className="fa-solid fa-angle-right"></i>
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

export {
  WorkOppurtunityCard,
  ExploreDestinationCard,
  TopUniversitiesCard,
  TopProgramCard,
  MonthlyExpenseCard,
};
