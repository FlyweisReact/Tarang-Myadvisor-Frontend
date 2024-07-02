/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
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
