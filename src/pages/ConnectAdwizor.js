/** @format */

import React, { useState, useEffect } from "react";
import WithLayout from "../Layout/WithLayout";
import OtpInput from "../components/OtpInput";
import { useLocation, useNavigate } from "react-router-dom";
import { Slider } from "../components/Sliders/Sliders";
import { getApi, postApi, showMsg } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { callExpertConfig } from "../components/Sliders/SwiperConfig";
import { ButtonComponent } from "../components/HelpingComponents";
import { ClipLoader } from "react-spinners";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ConnectAdwizor = () => {
  const [banner, setBanner] = useState({ data: [] });
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const [degreePlanningStudy, setDegreePlanningStudy] = useState("");
  const [preferredDestination, setPreferredDestination] = useState("");
  const [goingToStudyDate, setGoingToStudyDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  const showOtp = (res) => {
    const otp = res?.data?.otp;
    showMsg("", otp, "info");
    setAppointmentId(res?.data?._id);
  };

  const createAppointmentHandler = (e) => {
    e.preventDefault();
    const payload = {
      userId: "6682a0d033b34d6644a45ef6",
      advisorId: id,
      degreePlanningStudy,
      preferredDestination,
      goingToStudyDate,
      email,
      phone,
    };

    postApi(endPoints.createAppointmentWithAdwizor, payload, {
      additionalFunctions: [(res) => showOtp(res), () => setStep(3)],
      setLoading,
    });
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    const payload = {
      otp: Number(otp),
      appointmentId,
    };
    postApi(endPoints.confirmBooking, payload, {
      successMsg: "Confirmed",
    });
  };

  const fetchBanner = () => {
    getApi(endPoints.connectWithAdwizorBanner, {
      setResponse: setBanner,
    });
  };

  useEffect(() => {
    fetchBanner();
    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
  }, []);

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const RenderSlide = (item) => {
    return <img src={item?.image} alt="" />;
  };

  return (
    <>
      <div className="book-adwizor margin-div">
        <div className="left">
          <h2>Book your 1-1 call with Experts</h2>
          <p className="desc">
            "Elevate Your Education Journey: Find Your Perfect Fit with
            MyAdwizor”
          </p>
          <div className="swiper-container">
            <Slider
              data={banner?.data}
              swiperConfig={callExpertConfig}
              RenderSlide={RenderSlide}
            />
          </div>
        </div>

        <div className="form-div">
          {step === 1 && (
            <>
              <form onSubmit={createAppointmentHandler}>
                <div className="main-div">
                  <p>Degree you’re planning to study</p>
                  <div className="btn-container">
                    <ButtonComponent
                      label={"Bachelor's"}
                      value={"Bachelor's"}
                      className={
                        degreePlanningStudy === "Bachelor's" ? "active" : ""
                      }
                      setValue={setDegreePlanningStudy}
                    />

                    <ButtonComponent
                      label={"Master's"}
                      value={"Master's"}
                      className={
                        degreePlanningStudy === "Master's" ? "active" : ""
                      }
                      setValue={setDegreePlanningStudy}
                    />
                  </div>
                </div>

                <div className="main-div">
                  <p>Choose Your Preferred Destination ?</p>
                  <select
                    onChange={(e) => setPreferredDestination(e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    {allCountries?.data.map((i, index) => (
                      <option value={i.ContryName} key={`countries${index}`}>
                        {" "}
                        {i.ContryName}{" "}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="main-div">
                  <p>When are you going to study abroad?</p>
                  <div className="btn-container">
                    <ButtonComponent
                      label={"2024"}
                      value={"2024"}
                      className={goingToStudyDate === "2024" ? "active" : ""}
                      setValue={setGoingToStudyDate}
                    />
                    <ButtonComponent
                      label={"2025"}
                      value={"2025"}
                      className={goingToStudyDate === "2025" ? "active" : ""}
                      setValue={setGoingToStudyDate}
                    />
                    <ButtonComponent
                      label={"2026"}
                      value={"2026"}
                      className={goingToStudyDate === "2026" ? "active" : ""}
                      setValue={setGoingToStudyDate}
                    />
                  </div>
                </div>

                <div className="main-div">
                  <label for="email">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eg: example@gmail.com"
                  />
                </div>
                <div className="main-div">
                  <label for="phone">Mobile number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{10}"
                    placeholder="eg. 12345 78901"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="faded-text">
                    You will recieve a verification code on this number
                  </span>
                </div>

                <button className="submit-btn" type="submit">
                  {loading ? (
                    <ClipLoader color="#fff" />
                  ) : (
                    "  Book an Appoitment"
                  )}
                </button>
              </form>
            </>
          )}
          {step === 2 && (
            <>
              <div className="main-div">
                <i
                  className="fa-solid fa-arrow-left"
                  onClick={() => setStep(step - 1)}
                ></i>
              </div>
              <div className="flex-div">
                <div className="main-div">
                  <label for="date">Select Date</label>
                  <input type={"date"} name="date" id="date" />
                </div>
                <div className="main-div ">
                  <label for="time">Select Time</label>
                  <input type={"time"} name="time" id="time" />
                </div>
              </div>

              <div className="flex-div">
                <div className="main-div">
                  <label for="firstName">First Name</label>
                  <input
                    type={"text"}
                    name="firstName"
                    id="firstName"
                    placeholder="Name"
                  />
                </div>
                <div className="main-div ">
                  <label for="lastName">Last Name</label>
                  <input
                    type={"text"}
                    name="lastName"
                    id="lastName"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="main-div">
                <label for="interested">Course you’re interested in</label>
                <input type="text" name="interested" id="interested" />
              </div>
              <div className="main-div">
                <p>Where are you in your study abroad journey?</p>
                <select>
                  <option>Select</option>
                </select>
              </div>

              <button
                className="submit-btn"
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Next & Proceed
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <form onSubmit={confirmHandler}>
                <div className="main-div">
                  <i
                    className="fa-solid fa-arrow-left"
                    onClick={() => setStep(step - 1)}
                  ></i>
                </div>

                <div className="main-div">
                  <p>Mobile Verification</p>
                  <span>
                    We’ve Sent a code to +91 {phone} & {email}{" "}
                  </span>
                </div>
                <div className="main-div ">
                  <label for="time">Mobile Verification</label>
                  <OtpInput length={4} onChange={handleOtpChange} />
                  <span>Resend OTP in 36 Sec</span>
                </div>

                <button type="submit" className="submit-btn">
                  Finish Booking
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WithLayout(ConnectAdwizor);
