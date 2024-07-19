/** @format */

import { useState } from "react";
import { Modal, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { logoImg } from "../../assest";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import OtpInput from "../OtpInput";

export const EnterOtpModal = (props) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const payload = {
    email: localStorage.getItem("otpEmail"),
    otp: parseFloat(otp),
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const tokenSaver = (res) => {
    localStorage.setItem("user-token", res.token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi(endPoints.verifyOtp, payload, {
      setLoading,
      additionalFunctions: [
        (res) => tokenSaver(res),
        () => navigate("/choose-destination"),
      ],
    });
  };

  return (
    <Modal {...props} size={"lg"} centered>
      <Modal.Body>
        <div className="verify-otp-modal-xl">
          <p className="faded">OTP has sent to your mobile / Email id</p>
          <h1 className="heading">Enter OTP</h1>
          <form onSubmit={handleSubmit}>
            <OtpInput length={4} onChange={handleOtpChange} />
            <button type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
          <p className="not-recieved">Not received your code? 0:22</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const AlertModal = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="get-alert-modal">
          <div className="mod-header">
            <img src={logoImg} alt="" />

            <h4>{props?.title ? props?.title : "Register Now To Apply"}</h4>
          </div>
          <form>
            <div className="input-div">
              <i className="fa-regular fa-user"></i>
              <input type={"text"} placeholder="Full Name" />
            </div>
            <div className="input-div mt-3">
              <i className="fa-solid fa-envelope"></i>
              <input type={"email"} placeholder="Email" />
            </div>
            <div className="flex-div mt-3">
              <div className="input-div">
                <input type={"tel"} placeholder="Mobile Number" />
              </div>
              <button className="send-otp">SEND OTP</button>
            </div>
            <div className="input-div mt-3">
              <i className="fa-solid fa-location-dot"></i>
              <input type={"text"} placeholder="City you live in" />
            </div>
            <div className="input-div mt-3">
              <i className="fa-solid fa-graduation-cap"></i>
              <input type={"text"} placeholder="Course" />
            </div>

            <p className="term-of-use mt-3">
              By Submitting this form you accept <br /> and agree to our{" "}
              <span style={{ color: "#349DCF" }}>Terms Of Use.</span>
            </p>
            <p className="term-of-use mt-3">Enter OTP</p>
            <OtpInput length={4} />

            <button className="submit-btn mt-3">Submit</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const CollegeShortlistedCanvas = ({ show, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Offcanvas show={show} onHide={handleClose} placement="bottom">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <div className="college-shortlisted-canvas">
          <h5 className="title">College Selected (1)</h5>
          <hr />
          <button
            className="next-btn"
            onClick={() => navigate("/shortlisted-college")}
          >
            Next
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
