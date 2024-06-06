/** @format */

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";

const DegreeStatus3 = () => {
  const navigate = useNavigate();

  return (
    <section className="choose-destination-page">
      <ProgressBar width={"90%"} />
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
        <h4>How You Given GRE</h4>
        <select>
          <option>Already Given</option>
          <option>Taken date in next 2 months</option>
          <option>Plannig to give in next 2 months</option>
          <option>No plan for GRE as of now</option>
        </select>

        <button
          className="continue"
          onClick={() => navigate("/student-abroad-journery/last-step")}
        >
          Continue
        </button>
      </div>

      <TouristImage />
    </section>
  );
};

export default DegreeStatus3;
