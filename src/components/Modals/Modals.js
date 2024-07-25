/** @format */

import { useEffect, useState } from "react";
import { Fade, Modal, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { logoImg } from "../../assest";
import { getApi, postApi } from "../../Repository/Api";
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

  let url;
  if (props.userType === "advisor") {
    url = endPoints.verifyAdwizorOtp;
  } else {
    url = endPoints.verifyOtp;
  }

  const navigationHandler = () => {
    if (props.userType === "advisor") {
      navigate("/adwizor-panel/my-profile");
    } else {
      navigate("/choose-destination");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi(url, payload, {
      setLoading,
      additionalFunctions: [
        (res) => tokenSaver(res),
        props.onHide(),
        navigationHandler,
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

export const StudentElegibility = (props) => {
  const [myStudents, setMyStudents] = useState({ data: [] });
  const [id, setId] = useState("");

  useEffect(() => {
    if (props.show === true) {
      getApi(endPoints.adwizor.assignedStudents, {
        setResponse: setMyStudents,
      });
    }
  }, [props]);

  const clearHandler = () => {
    setId("");
    props.onHide();
  };

  const saveHandler = () => {
    props.setUserId(id);
    props.onHide();
  };

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal">
          <div className="heading mb-3">
            <p>Student Eligibility</p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>
          <p className="desc mb-3">
            Select a student below, and we will provide a list of qualified
            programs based on their profile.
          </p>
          <form>
            <p className="heading mb-2">Student a Student</p>
            <select onChange={(e) => setId(e.target.value)} value={id}>
              <option value="">Select a student below</option>
              {myStudents.data.map((i, index) => (
                <option key={`student${index}`} value={i?.userId?._id}>
                  {" "}
                  {i?.userId?.fullname}{" "}
                </option>
              ))}
            </select>

            <div className="btn-container mt-3">
              <button type="button" className="cancel" onClick={clearHandler}>
                Cancel
              </button>
              <button
                type="button"
                className="save"
                onClick={() => saveHandler()}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const CreateStudent = (props) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    userType: "user",
    fullname,
    email,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.adwizor.createStudent, payload, {
      setLoading,
      successMsg: "New User Created !",
      additionalFunctions: [() => props.onHide()],
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal">
          <div className="heading mb-3">
            <p>Add New Student </p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form onSubmit={submitHandler}>
            <input
              type={"text"}
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
              placeholder="Full name"
              className="mb-3"
            />
            <input
              type={"email"}
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="mb-3"
            />
            <button className="submit-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Create"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
