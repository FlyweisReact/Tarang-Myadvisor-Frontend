/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { verifyOtpImg } from "../../assest";
import OtpInput from "../OtpInput";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";

const VerifyOtpModal = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const payload = {
    appointmentId: props.appointmentId,
    otp: Number(otp),
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.user.confirmAppointment, payload, {
      successMsg: "Session Created !",
      setLoading,
      additionalFunctions: [
        () => props.onHide(),
        () => navigate("/user-dashboard/profile "),
      ],
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Body className="verify-otp-modal">
        <h5 className="heading">Verify your Phone Number</h5>
        <img src={verifyOtpImg} alt="" className="main-img" />
        <form onSubmit={submitHandler}>
          <div className="content">
            <p className="head">OTP Sent to +91 1234567890 / Email Id</p>
            <a href="/">Change</a>
            <p>Enter OTP (0:26)</p>
          </div>
          <OtpInput length={4} onChange={handleOtpChange} />
          <button className="resend-btn">Resend</button>
          <button className="continue" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
          <div className="hashed-line"></div>
          <p className="term">
            By Continuing , you agree to our <span>Terms of Services</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default VerifyOtpModal;
