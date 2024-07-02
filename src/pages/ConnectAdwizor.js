/** @format */

import React, { useState, useEffect } from "react";
import WithLayout from "../Layout/WithLayout";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import OtpInput from "../components/OtpInput";
import { useNavigate } from "react-router-dom";
import { Slider } from "../components/Sliders/Sliders";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const ConnectAdwizor = () => {
  const [banner, setBanner] = useState({});
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const swiperConfig = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    modules: [Autoplay, EffectFade, Pagination],
  };

  const fetchBanner = () => {
    getApi(endPoints.connectWithAdwizorBanner, {
      setResponse: setBanner,
    });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const images =
    banner?.data?.length > 0 ? banner?.data?.map((i) => i.image) : [];
  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    console.log(otp);
  };

  const renderSlide = (item) => {
    return <img src={item} alt="" />;
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
              data={images}
              swiperConfig={swiperConfig}
              renderSlide={renderSlide}
            />
          </div>
        </div>

        <div className="form-div">
          {step === 1 && (
            <>
              <div className="main-div">
                <p>Degree you’re planning to study</p>
                <div className="btn-container">
                  <button>Bachelor's</button>
                  <button>Master's</button>
                </div>
              </div>

              <div className="main-div">
                <p>Choose Your Preferred Destination ?</p>
                <select>
                  <option>Select</option>
                </select>
              </div>

              <div className="main-div">
                <p>When are you going to study abroad?</p>
                <div className="btn-container">
                  <button>2024</button>
                  <button>2025</button>
                  <button>2026</button>
                </div>
              </div>

              <div className="main-div">
                <label for="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
                />
                <span className="faded-text">
                  You will recieve a verification code on this number
                </span>
              </div>

              <button className="submit-btn" onClick={() => setStep(step + 1)}>
                Book an Appoitment
              </button>
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

              <button className="submit-btn" onClick={() => setStep(step + 1)}>
                Next & Proceed
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <div className="main-div">
                <i
                  className="fa-solid fa-arrow-left"
                  onClick={() => setStep(step - 1)}
                ></i>
              </div>

              <div className="main-div">
                <p>Mobile Verification</p>
                <span>
                  We’ve Sent a code to +91 1234567890 & abcd@gmail.com{" "}
                </span>
              </div>
              <div className="main-div ">
                <label for="time">Mobile Verification</label>
                <OtpInput length={6} onChange={handleOtpChange} />
                <span>Resend OTP in 36 Sec</span>
              </div>

              <button className="submit-btn" onClick={() => navigate("/")}>
                Finish Booking
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WithLayout(ConnectAdwizor);
