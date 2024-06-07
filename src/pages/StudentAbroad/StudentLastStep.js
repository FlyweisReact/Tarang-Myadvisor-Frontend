/** @format */

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VerifyOtpModal from "../../components/Modals/VerifyOtpModal";

const StudentLastStep = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <VerifyOtpModal
        show={open}
        onHide={() => setOpen(false)}
        link={"/counselling-session/live"}
      />
      <section className="choose-destination-page">
        <ProgressBar width={"100%"} />
        <div className="page-head">
          <button
            className="skipBtns"
            type="button"
            onClick={() => navigate(-1)}
          >
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
          <h4>Just one last step to get an University Shortlist</h4>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone*" />

          <button className="continue" onClick={() => setOpen(true)}>
            Continue
          </button>
        </div>

        <TouristImage />
      </section>
    </>
  );
};
export default StudentLastStep;
