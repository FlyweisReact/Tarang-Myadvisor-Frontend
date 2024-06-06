/** @format */

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";

const DegreeStatus = () => {
  const navigate = useNavigate();

  return (
    <section className="choose-destination-page">
      <ProgressBar width={"75%"} />
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
        <h4>IELTS/TOEFL/PTE/Duolingo status</h4>
        <select>
          <option>Not decided</option>
          <option>Booked my exam</option>
          <option>Already gave the exam</option>
          <option>Planning to give in next 2 months</option>
        </select>
        <h4>Do you already have a university admit?</h4>
        <div className="preferred-btn-container">
          <button className="active">YES</button>
          <button>NO</button>
        </div>
        <h4>What are you looking for?</h4>
        <div className="preferred-btn-container">
          <button className="active">I want Admission Help</button>
          <button>I want PR/Job only</button>
          <button>I want to check Admit Eligibility</button>
          <button>I want Visa Assistance</button>
          <button>I want IELTS Preparation</button>
        </div>
        <h4>Do you have an exam booking confirmation?</h4>
        <div className="preferred-btn-container">
          <button className="active">YES</button>
          <button>NO</button>
        </div>

        <button
          className="continue"
          onClick={() => navigate("/student-abroad-journery/degree-status-3")}
        >
          Continue
        </button>
      </div>

      <TouristImage />
    </section>
  );
};

export default DegreeStatus;
