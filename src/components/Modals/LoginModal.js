/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { LoginImg } from "../../assest";
import { postApi } from "../../Repository/Api";
import { EnterOtpModal } from "./Modals";
import ClipLoader from "react-spinners/ClipLoader";

const LoginModal = (props) => {
  const [isOtpModal, setIsOtpModal] = useState(false);
  const [userType, setUserType] = useState("user");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    userType,
    fullname,
    email,
    phone,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi({
      url: "user/signup",
      payload,
      setLoading,
      additionalFunctions: [() => props.onHide(), () => setIsOtpModal(true)],
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("otpEmail", e.target.value);
  };

  return (
    <>
      <EnterOtpModal show={isOtpModal} onHide={() => setIsOtpModal(false)} />

      <Modal {...props} size="xl" centered>
        <Modal.Body className="login-modal">
          <div className="Login-div">
            <div className="left-div">
              <img src={LoginImg} alt="" />
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
                    onClick={() => setUserType("Adwizor")}
                    className={userType === "Adwizor" ? "active" : ""}
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
