/** @format */

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { getApi, postApi, showMsg } from "../../Repository/Api";
import { EnterOtpModal } from "./Modals";
import ClipLoader from "react-spinners/ClipLoader";
import endPoints from "../../Repository/apiConfig";

const LoginModal = (props) => {
  const [isOtpModal, setIsOtpModal] = useState(false);
  const [userType, setUserType] = useState("user");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    data: {
      image: "",
    },
  });

  const fetchBanner = () => {
    getApi(endPoints.getLoginBanner, {
      setResponse,
    });
  };

  useEffect(() => {
    if (props.show) {
      fetchBanner();
    }
  }, [props]);

  const payload = {
    userType,
    fullname,
    email,
    phone,
  };

  const showOtp = (res) => {
    const otp = res.data.otp;
    showMsg("", otp, "success");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.userSignup, payload, {
      setLoading,
      additionalFunctions: [
        props.onHide,
        () => setIsOtpModal(true),
        (res) => showOtp(res),
      ],
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("otpEmail", e.target.value);
  };

  return (
    <>
      <EnterOtpModal
        show={isOtpModal}
        onHide={() => setIsOtpModal(false)}
        userType={userType}
      />

      <Modal {...props} size="xl" centered>
        <Modal.Body className="login-modal">
          <div className="Login-div">
            <div className="left-div">
              <img src={response.data.image} alt="" />
            </div>
            <div className="right-div">
              <form onSubmit={submitHandler}>
                <h5 className="heading">LOGIN</h5>
                <div className="select-btn">
                  <button
                    type="button"
                    onClick={() => setUserType("user")}
                    className={userType === "user" ? "active" : ""}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("advisor")}
                    className={userType === "advisor" ? "active" : ""}
                  >
                    Adwizor
                  </button>
                </div>

                <div>
                  <input
                    type={"text"}
                    placeholder="Full Name"
                    value={fullname}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type={"text"}
                    placeholder="Email Id"
                    value={email}
                    required
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
                <div>
                  <input
                    type={"text"}
                    placeholder="Enter your mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button className="submitBtn" type="submit">
                  {loading ? <ClipLoader color="#fff" /> : "Request OTP"}
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
