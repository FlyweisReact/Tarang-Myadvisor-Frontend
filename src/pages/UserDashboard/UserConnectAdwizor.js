/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "../../components/OtpInput";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const FirstStep = ({ setStep, step }) => {
  return (
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
  );
};

const SecondStep = ({ setStep, step }) => {
  return (
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
  );
};

const ThirdStep = ({ setStep, step, navigate, handleOtpChange }) => {
  return (
    <>
      <div className="main-div">
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => setStep(step - 1)}
        ></i>
      </div>

      <div className="main-div">
        <p>Mobile Verification</p>
        <span>We’ve Sent a code to +91 1234567890 & abcd@gmail.com </span>
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
  );
};

const UserConnectAdwizor = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    console.log(otp);
  };
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Connect WIth Adwizor</p>
      </div>
      <div className="application-status mt-3 mb-3">
        <div className="book-adwizor">
          <div className="form-div">
            {step === 1 && <FirstStep setStep={setStep} step={step} />}
            {step === 2 && <SecondStep setStep={setStep} step={step} />}
            {step === 3 && (
              <ThirdStep
                setStep={setStep}
                step={step}
                navigate={navigate}
                handleOtpChange={handleOtpChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout(UserConnectAdwizor);
