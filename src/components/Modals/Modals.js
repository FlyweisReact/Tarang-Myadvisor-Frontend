/** @format */

import { useEffect, useState } from "react";
import { Modal, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { logoImg, userRounded } from "../../assest";
import {
  getApi,
  postApi,
  postApiWithRedux,
  putApi,
  showMsg,
} from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import OtpInput from "../OtpInput";
import LoginModal from "./LoginModal";
import { LOGIN } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const EnterOtpModal = (props) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [countDownTime, setCountDownTime] = useState(0);
  const navigate = useNavigate();

  const startCountdown = () => {
    setCountDownTime(20);
    const countdownInterval = setInterval(() => {
      setCountDownTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (props.show === true) {
      startCountdown();
    }
  }, [props]);

  const payload = {
    email: localStorage.getItem("otpEmail"),
    otp: parseFloat(otp),
  };

  const showOtp = (res) => {
    const otp = res.data.otp;
    showMsg("", otp, "success");
  };

  //resend otp
  const resendOtpHandler = () => {
    const payload = {
      email: localStorage.getItem("otpEmail"),
    };
    const url =
      props.userType === "advisor"
        ? endPoints.adwizor.resendOtp
        : endPoints.user.resendOtp;
    postApi(url, payload, {
      additionalFunctions: [(res) => showOtp(res), () => startCountdown()],
    });
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
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

  const LOGINMODULE = (res) => {
    const payload = {
      data: {
        res,
      },
      userType: props.userType,
    };
    return LOGIN(payload);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postApiWithRedux(url, payload, {
        setLoading,
        dispatchFunc: [(res) => LOGINMODULE(res)],
        additionalFunctions: [props.onHide(), navigationHandler],
      })
    );
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

          {countDownTime === 0 ? (
            <p
              className="resend-otp"
              style={{ cursor: "pointer" }}
              onClick={() => resendOtpHandler()}
            >
              Resent OTP
            </p>
          ) : (
            <p className="not-recieved">
              Not received your code? 0:
              {countDownTime > 9 ? countDownTime : `0${countDownTime}`}{" "}
            </p>
          )}
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
  const [myStudents, setMyStudents] = useState({
    data: {
      AddedUser: [],
      assign: [],
    },
  });
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
              {myStudents.data.assign.map((i, index) => (
                <option key={`assign${index}`} value={i?.userId?._id}>
                  {" "}
                  {i?.userId?.fullname}{" "}
                </option>
              ))}
              {myStudents.data.AddedUser.map((i, index) => (
                <option key={`AddedUser${index}`} value={i?._id}>
                  {" "}
                  {i?.fullname}{" "}
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
  const [phone, setPhone] = useState("");
  const [preferredDestination, setPrefferedDestination] = useState("");
  const [preferredIntake, setPreferredIntake] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [sources, setSources] = useState({ data: [] });
  const [loading, setLoading] = useState(false);

  const payload = {
    userType: "user",
    fullname,
    email,
    phone,
    preferredDestination,
    preferredIntake,
    sourceType,
  };

  useEffect(() => {
    if (props?.show === true) {
      getApi(endPoints.adwizor.getSources, {
        setResponse: setSources,
      });
    }
  }, [props]);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.adwizor.createStudent, payload, {
      setLoading,
      successMsg: "New User Created !",
      additionalFunctions: [() => props.onHide(), props?.fetchHandler],
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
            <input
              type={"tel"}
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Mobile Number"
              className="mb-3"
            />
            <input
              type={"text"}
              required
              onChange={(e) => setPrefferedDestination(e.target.value)}
              value={preferredDestination}
              placeholder="Preferred Destination"
              className="mb-3"
            />
            <select
              onChange={(e) => setPreferredIntake(e.target.value)}
              value={preferredIntake}
              className="mb-3"
            >
              <option value="">Choose Your preferred Intake</option>
              <option value="September 2024">September 2024</option>
              <option value="Jan 2025">Jan 2025</option>
              <option value="May/Sept 2025">May/Sept 2025</option>
            </select>
            <select
              onChange={(e) => setSourceType(e.target.value)}
              value={sourceType}
              className="mb-3"
            >
              <option value="">Choose source</option>
              {sources.data.map((i) => (
                <option key={i?._id} value={i?._id}>
                  {" "}
                  {i?.name}{" "}
                </option>
              ))}
            </select>
            <button className="submit-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Create"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const SlotUpdater = (props) => {
  const [isAvailable, setIsAvailable] = useState("false");
  const [loading, setLoading] = useState(false);

  const payload = {
    slotUpdates: [
      {
        date: props?.data?.date,
        slotInString: [props?.data?.slotInString],
        isAvailable: isAvailable === "false" ? false : true,
      },
    ],
  };

  const submitHandler = (e) => {
    e.preventDefault();
    putApi(endPoints.adwizor.updateSlot, payload, {
      setLoading,
      additionalFunctions: [() => props.onHide(), props.fetchData],
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal">
          <div className="heading mb-3">
            <p>Update slot availability </p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form onSubmit={submitHandler}>
            <select required onChange={(e) => setIsAvailable(e.target.value)}>
              <option value="">Select your prefrence</option>
              <option value="true"> Available </option>
              <option value="false"> Not Available </option>
            </select>
            <button className="submit-btn mt-3" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const CreateBlog = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fd = new FormData();
  fd.append("image", image);
  fd.append("title", title);
  fd.append("content", content);
  fd.append("author", props?.author);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.adwizor.createBlog, fd, {
      successMsg: "Created !",
      setLoading,
      additionalFunctions: [() => props.onHide(), props.fetchHandler],
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    putApi(endPoints.adwizor.updateBlog(props.prevData.id), fd, {
      successMsg: "Updated !",
      setLoading,
      additionalFunctions: [() => props.onHide(), props.fetchHandler],
    });
  };

  useEffect(() => {
    if (props.show === true && props.type === "edit") {
      setTitle(props.prevData.title);
      setContent(props.prevData.description);
    } else {
      setTitle("");
      setContent("");
    }
  }, [props]);

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal">
          <div className="heading mb-3">
            <p>{props.type === "edit" ? "Update Blog" : "Add New Blog"}</p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form
            onSubmit={props.type === "edit" ? updateHandler : submitHandler}
          >
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-3"
              required
              value={title}
            />
            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => setContent(e.target.value)}
              required
              className="mt-3"
              value={content}
            />
            <button className="submit-btn mt-3" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const UpdateApplication = (props) => {
  const [loading, setLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("");

  const payload = {
    applicationStatus,
    applicationId: props.applicationId,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    putApi(endPoints.adwizor.updateApplicationStatus(props.id), payload, {
      setLoading,
      additionalFunctions: [props.fetchData, () => props.onHide()],
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal">
          <div className="heading mb-3">
            <p>Update application status </p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form onSubmit={submitHandler}>
            <select
              required
              onChange={(e) => setApplicationStatus(e.target.value)}
            >
              <option value="">Select your prefrence</option>
              <option value="OFFER"> Offer </option>
              <option value="ENROLLMENT">Enrollment </option>
            </select>
            <button className="submit-btn mt-3" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const MobileBar = ({ show, handleClose }) => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("user-token") ? true : false;
  const userType = localStorage.getItem("user-type");

  const openModal = () => {
    handleClose();
    setOpen(true);
  };

  return (
    <>
      <LoginModal show={open} onHide={() => setOpen(false)} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="mobile-bar">
          <ul>
            <li>
              <Link to={"/find-an-adwizor"}> FInd an Adwizor</Link>
            </li>
            <li>
              <Link to="/study-abroad">Study Abroad</Link>
            </li>
            <li>
              <Link to="/study-india">Study India</Link>
            </li>
            <li>
              <Link to="/connect-with-adwizor">
                Connect with Adwizor ({" "}
                <span style={{ color: "#F50000" }}>Live*</span> )
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            userType === "advisor" ? (
              <Link to="/adwizor-panel/my-profile">
                <img src={userRounded} alt="" className="user-img" />
              </Link>
            ) : (
              <Link to="/user-dashboard/home">
                <img src={userRounded} alt="" className="user-img" />
              </Link>
            )
          ) : (
            <button className="login-btn" onClick={() => openModal()}>
              Log In
            </button>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const CreateReview = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");

  const fd = new FormData();
  fd.append("image", image);
  fd.append("title", title);
  fd.append("rating", rating);
  fd.append("description", description);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.adwizor.createReview, fd, {
      successMsg: "Created !",
      setLoading,
      additionalFunctions: [() => props.onHide(), props.fetchHandler],
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    putApi(endPoints.adwizor.updateReview(props.prevData.id), fd, {
      successMsg: "Updated !",
      setLoading,
      additionalFunctions: [() => props.onHide(), props.fetchHandler],
    });
  };

  useEffect(() => {
    if (props.show === true && props.type === "edit") {
      setTitle(props.prevData.title);
      setDescription(props.prevData.description);
      setRating(props.prevData.rating);
    } else {
      setTitle("");
      setRating("");
      setDescription("");
    }
  }, [props]);

  return (
    <Modal {...props} centered>
      <Modal.Body>
        <div className="student-elegibility-modal create-review-modal ">
          <div className="heading mb-3">
            <p>{props.type === "edit" ? "Update Blog" : "Add New Review"}</p>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => props.onHide()}
            ></i>
          </div>

          <form
            onSubmit={props.type === "edit" ? updateHandler : submitHandler}
          >
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <div className="stars mt-3">
              <p>Select Rating</p>
              <div className="main">
                {[1, 2, 3, 4, 5].map((value) => (
                  <i
                    key={value}
                    className={`fa-solid fa-star ${
                      rating >= value ? "selected" : ""
                    }`}
                    onClick={() => setRating(value)}
                  ></i>
                ))}
              </div>
            </div>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-3"
              required
              value={title}
            />
            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-3"
              value={description}
            />
            <button className="submit-btn mt-3" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
