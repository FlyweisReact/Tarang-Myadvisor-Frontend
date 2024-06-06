/** @format */
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";

const PreferredIntake = () => {
  const navigate = useNavigate();

  return (
    <section className="choose-destination-page">
      <ProgressBar width={"30%"} />
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => navigate(-1)}>
          {" "}
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <h3 className="alert">
          Alert : September Has A Higher Acceptance Rate
        </h3>
        <button className="skipBtns">
          SKIP <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="choose-from-options-page">
        <h4>What's your preferred Intake?</h4>

        <div className="preferred-btn-container">
          <button className="active">September 2024</button>
          <button>Jan 2025</button>
          <button>May/Sept 2025</button>
        </div>
        <h4>What's your preferred Intake?</h4>

        <div className="preferred-btn-container">
          <button>PG Diploma</button>
          <button className="active"> Master's </button>
          <button> Bachelor's </button>
          <button> MBA </button>
          <button> PhD </button>
          <button> Not decided </button>
        </div>

        <button
          className="continue"
          onClick={() => navigate("/student-abroad-journery/degree")}
        >
          Continue
        </button>
      </div>
      <TouristImage />
    </section>
  );
};

export default PreferredIntake;
