/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { LoginImg } from "../../assest";

const LoginModal = (props) => {
  const [type, setType] = useState("Student");
  return (
    <Modal {...props} size="xl" centered>
      <Modal.Body className="login-modal">
        <div className="Login-div">
          <div className="left-div">
            <img src={LoginImg} alt="" />
          </div>
          <div className="right-div">
            <form>
              <h5 className="heading">LOGIN</h5>
              <div className="select-btn">
                <button
                  type="button"
                  onClick={() => setType("Student")}
                  className={type === "Student" ? "active" : ""}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setType("Adwizor")}
                  className={type === "Adwizor" ? "active" : ""}
                >
                  Adwizor
                </button>
              </div>

              <div>
                <input type={"text"} placeholder="Full Name" />
              </div>
              <div>
                <input type={"text"} placeholder="Email Id" />
              </div>
              <div>
                <input type={"text"} placeholder="Enter your mobile number" />
              </div>

              <button className="submitBtn">Request OTP</button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
