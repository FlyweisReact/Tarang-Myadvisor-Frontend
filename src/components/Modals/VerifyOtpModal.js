/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { verifyOtpImg } from "../../assest";
import OtpInput from "../OtpInput";
import { useNavigate } from "react-router-dom";

const VerifyOtpModal = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    console.log(otp);
  };

  return (
    <Modal {...props} centered>
      <Modal.Body className="verify-otp-modal">
        <h5 className="heading">Verify your Phone Number</h5>
        <img src={verifyOtpImg} alt="" className="main-img" />

        <div className="content">
          <p className="head">OTP Sent to +91 1234567890 / Email Id</p>
          <a href="/">Change</a>
          <p>Enter OTP (0:26)</p>
        </div>
        <OtpInput length={6} onChange={handleOtpChange} />
        <button className="resend-btn">Resend</button>
        <button
          className="continue"
          onClick={() => navigate(props.link)}
        >
          Proceed
        </button>
        <div className="hashed-line"></div>
        <p className="term">
          By Continuing , you agree to our <span>Terms of Services</span> and{" "}
          <span>Privacy Policy</span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default VerifyOtpModal;
