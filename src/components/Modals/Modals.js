/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OtpInput from "../OtpInput";

export const EnterOtpModal = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    console.log(otp);
  };
  return (
    <Modal {...props} size={"lg"} centered>
      <Modal.Body>
        <div className="verify-otp-modal-xl">
          <p className="faded">OTP has sent to your mobile / Email id</p>
          <h1 className="heading">Enter OTP</h1>
          <OtpInput length={6} onChange={handleOtpChange} />
          <button onClick={() => navigate("/choose-destination")}>
            Submit
          </button>
          <p className="not-recieved">Not received your code? 0:22</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
