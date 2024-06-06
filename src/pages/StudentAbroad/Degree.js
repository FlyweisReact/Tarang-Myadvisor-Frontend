/** @format */

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";

const Degree = () => {
  const navigate = useNavigate();

  return (
    <section className="choose-destination-page">
      <ProgressBar width={"45%"} />
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => navigate(-1)}>
          {" "}
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <button className="degree-btn">
          <i className="fa-solid fa-graduation-cap"></i> Masters
        </button>
        <button className="skipBtns">
          SKIP <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="choose-from-options-page">
        <h4>What's your highest level of education?</h4>

        <div className="preferred-btn-container">
          <button>10th Standard</button>
          <button>12th Standard</button>
          <button>Bachelor's Degree</button>
          <button  className="active">Master's Degree</button>
          <button>MBBS / MD</button>
        </div>
        <h4>What's your highest level of education?</h4>
        <select>
          <option>Year of Graduation</option>
          <option>2025 or later</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
        <h4>Expected or Gained Percentage</h4>
        <input placeholder="Grades / Percentage" />

        <h4>Do you have a valid Passport?</h4>
        <div className="preferred-btn-container">
          <button className="active">YES</button>
          <button>Applied</button>
          <button>NO</button>
        </div>

        <button
          className="continue"
          onClick={() => navigate("/student-abroad-journery/degree-status")}
        >
          Continue
        </button>
      </div>

      <TouristImage />
    </section>
  );
};

export default Degree;
