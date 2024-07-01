/** @format */

import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { autraliaFlag, canadaFlag, ukFlag, usaFlag } from "../../assest/index";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";

const options = [
  {
    img: autraliaFlag,
    title: "Australia",
  },
  {
    img: canadaFlag,
    title: "Canada",
  },
  {
    img: usaFlag,
    title: "USA",
  },
  {
    img: ukFlag,
    title: "UK",
  },
];

const ChooseDestination = () => {
  const [item, setItem] = useState("Australia");
  const [step, setStep] = useState(1);
  const [image, setImage] = useState("");
  const [fullname, setFullName] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [preferredIntake, setPrefferedIntake] = useState("");
  const [preferredDegree, setPreferrefDegree] = useState("");
  const [yourHighestLevelOfEducation, setYourHighestLevelOfEducation] =
    useState("");
  const [yourHighestLevelOfEducationYear, setYourHighestLevelOfEducationYear] =
    useState("");
  const [gradesORpercentage, setGradesORPercentage] = useState("");
  const [validPassport, setValidPassport] = useState("");
  const [duolingoStatus, setduolingoStatus] = useState("");
  const [alreadyUniversityAdmit, setAlreadyUniversityAdmin] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState("");
  const [givenGRE, setGivenGRE] = useState("");

  const navigate = useNavigate();

  const backStep = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const ButtonContainer = ({
    className,
    title,
    setValue,
    value,
    checkValue,
  }) => {
    return (
      <button
        className={`${className} ${value === checkValue ? "active" : ""}  `}
        onClick={() => setValue(value)}
      >
        {" "}
        {title}{" "}
      </button>
    );
  };
  return (
    <>
      {step === 1 && (
        <section className="choose-destination-page">
          <ProgressBar />
          <div className="page-head">
            <button
              className="skipBtns"
              type="button"
              onClick={() => backStep()}
            >
              {" "}
              <i className="fa-solid fa-arrow-left"></i>Back
            </button>
            <h3>
              We would love to know more about your <br /> study abroad path
            </h3>
            <button className="skipBtns" onClick={() => nextStep()}>
              SKIP <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="choose-from-options-page">
            <h4>Chooose Your Destination </h4>
            <div className="cards">
              {options?.map((i, index) => (
                <div
                  className={`Item ${
                    i.title === destinationCountry ? "active" : ""
                  } `}
                  key={index}
                  onClick={() => setDestinationCountry(i.title)}
                >
                  <img src={i.img} alt="" />
                  <p className="title"> {i.title} </p>
                </div>
              ))}
            </div>

            <button className="continue" onClick={() => nextStep()}>
              Continue
            </button>
          </div>
          <TouristImage />
        </section>
      )}

      {step === 2 && (
        <section className="choose-destination-page">
          <ProgressBar width={"30%"} />

          <div className="page-head">
            <button
              className="skipBtns"
              type="button"
              onClick={() => backStep()}
            >
              {" "}
              <i className="fa-solid fa-arrow-left"></i>Back
            </button>
            <h3 className="alert">
              Alert : September Has A Higher Acceptance Rate
            </h3>
            <button className="skipBtns" onClick={() => nextStep()}>
              SKIP <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="choose-from-options-page">
            <h4>What's your preferred Intake?</h4>

            <div className="preferred-btn-container">
              <ButtonContainer
                value={"September 2024"}
                setValue={setPrefferedIntake}
                title={"September 2024"}
                checkValue={preferredIntake}
              />
              <ButtonContainer
                value={"Jan 2025"}
                setValue={setPrefferedIntake}
                title={"Jan 2025"}
                checkValue={preferredIntake}
              />
              <ButtonContainer
                value={"May/Sept 2025"}
                setValue={setPrefferedIntake}
                title={"May/Sept 2025"}
                checkValue={preferredIntake}
              />
            </div>
            <h4>What's your preferred Intake?</h4>

            <div className="preferred-btn-container">
              <ButtonContainer
                value={"PG Diploma"}
                setValue={setPreferrefDegree}
                title={"PG Diploma"}
                checkValue={preferredDegree}
              />

              <ButtonContainer
                value={"Master's"}
                setValue={setPreferrefDegree}
                title={"Master's"}
                checkValue={preferredDegree}
              />

              <ButtonContainer
                value={"Bachelor's"}
                setValue={setPreferrefDegree}
                title={"Bachelor's"}
                checkValue={preferredDegree}
              />

              <ButtonContainer
                value={"MBA"}
                setValue={setPreferrefDegree}
                title={"MBA"}
                checkValue={preferredDegree}
              />
              <ButtonContainer
                value={"PHD"}
                setValue={setPreferrefDegree}
                title={"PHD"}
                checkValue={preferredDegree}
              />
              <ButtonContainer
                value={"Not decided"}
                setValue={setPreferrefDegree}
                title={"Not decided"}
                checkValue={preferredDegree}
              />
            </div>

            <button className="continue" onClick={() => nextStep()}>
              Continue
            </button>
          </div>
          <TouristImage />
        </section>
      )}

      {step === 3 && (
        <section className="choose-destination-page">
          <ProgressBar width={"45%"} />
          <div className="page-head">
            <button
              className="skipBtns"
              type="button"
              onClick={() => backStep()}
            >
              {" "}
              <i className="fa-solid fa-arrow-left"></i>Back
            </button>
            <button className="degree-btn">
              <i className="fa-solid fa-graduation-cap"></i> Masters
            </button>
            <button className="skipBtns" onClick={() => nextStep()}>
              SKIP <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="choose-from-options-page">
            <h4>What's your highest level of education?</h4>

            <div className="preferred-btn-container">
              <ButtonContainer
                value={"10th Standard"}
                setValue={setYourHighestLevelOfEducation}
                title={"10th Standard"}
                checkValue={yourHighestLevelOfEducation}
              />
              <ButtonContainer
                value={"12th Standard"}
                setValue={setYourHighestLevelOfEducation}
                title={"12th Standard"}
                checkValue={yourHighestLevelOfEducation}
              />
              <ButtonContainer
                value={"Bachelor's Degree"}
                setValue={setYourHighestLevelOfEducation}
                title={"Bachelor's Degree"}
                checkValue={yourHighestLevelOfEducation}
              />
              <ButtonContainer
                value={"Master's Degree"}
                setValue={setYourHighestLevelOfEducation}
                title={"Master's Degree"}
                checkValue={yourHighestLevelOfEducation}
              />
              <ButtonContainer
                value={"MBBS/MD"}
                setValue={setYourHighestLevelOfEducation}
                title={"MBBS/MD"}
                checkValue={yourHighestLevelOfEducation}
              />
            </div>
            <h4>What's your highest level of education?</h4>
            <select
              onChange={(e) =>
                setYourHighestLevelOfEducationYear(e.target.value)
              }
              value={yourHighestLevelOfEducationYear}
            >
              <option value=""></option>
              <option value="Year of Graduation">Year of Graduation</option>
              <option value="2025 or later">2025 or later</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <h4>Expected or Gained Percentage</h4>
            <input
              placeholder="Grades / Percentage"
              onChange={(e) => setGradesORPercentage(e.target.value)}
              value={gradesORpercentage}
            />

            <h4>Do you have a valid Passport?</h4>
            <div className="preferred-btn-container">
              <ButtonContainer
                value={"YES"}
                setValue={setValidPassport}
                title={"YES"}
                checkValue={validPassport}
              />
              <ButtonContainer
                value={"Applied"}
                setValue={setValidPassport}
                title={"Applied"}
                checkValue={validPassport}
              />
              <ButtonContainer
                value={"NO"}
                setValue={setValidPassport}
                title={"NO"}
                checkValue={validPassport}
              />
            </div>

            <button className="continue" onClick={() => nextStep()}>
              Continue
            </button>
          </div>

          <TouristImage />
        </section>
      )}

      {step === 4 && (
        <section className="choose-destination-page">
          <ProgressBar width={"60%"} />
          <div className="page-head">
            <button
              className="skipBtns"
              type="button"
              onClick={() => backStep()}
            >
              {" "}
              <i className="fa-solid fa-arrow-left"></i>Back
            </button>
            <button className="degree-btn">
              <i className="fa-solid fa-graduation-cap"></i> Masters
            </button>
            <button className="skipBtns" onClick={() => nextStep()}>
              SKIP <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="choose-from-options-page">
            <h4>IELTS/TOEFL/PTE/Duolingo status</h4>
            <select
              value={duolingoStatus}
              onChange={(e) => setduolingoStatus(e.target.value)}
            >
              <option value=""> </option>
              <option value="Not decided">Not decided</option>
              <option value="Booked my exam">Booked my exam</option>
              <option value="Already gave the exam">
                Already gave the exam
              </option>
              <option value="Planning to give in next 2 months">
                Planning to give in next 2 months
              </option>
            </select>
            <h4>Do you already have a university admit?</h4>
            <div className="preferred-btn-container">
              <ButtonContainer
                value={"YES"}
                setValue={setAlreadyUniversityAdmin}
                title={"YES"}
                checkValue={alreadyUniversityAdmit}
              />
              <ButtonContainer
                value={"NO"}
                setValue={setAlreadyUniversityAdmin}
                title={"NO"}
                checkValue={alreadyUniversityAdmit}
              />
            </div>
            <div>
              <h4>What are you looking for?</h4>
              <p style={{ color: "#0185C3" }}>(Only Minimum 2 can select)</p>
            </div>
            <div className="preferred-btn-container">
            <ButtonContainer
                value={"I want University Shortlist"}
                setValue={setLookingFor}
                title={"I want University Shortlist"}
                checkValue={lookingFor}
              />
            <ButtonContainer
                value={"I want Admission Help"}
                setValue={setLookingFor}
                title={"I want Admission Help"}
                checkValue={lookingFor}
              />
            <ButtonContainer
                value={""}
                setValue={setLookingFor}
                title={""}
                checkValue={lookingFor}
              />
              <button className="active">I want University Shortlist</button>
              <button>I want Admission Help</button>
              <button>I want PR/Job only</button>
              <button>I want to check Admit Eligibility</button>
              <button>I want Visa Assistance</button>
              <button>I want IELTS Preparation</button>
            </div>

            <button
              className="continue"
              onClick={() =>
                navigate("/student-abroad-journery/degree-status-2")
              }
            >
              Continue
            </button>
          </div>

          <TouristImage />
        </section>
      )}
    </>
  );
};

export default ChooseDestination;
