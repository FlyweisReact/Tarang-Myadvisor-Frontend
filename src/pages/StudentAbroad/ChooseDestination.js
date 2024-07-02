/** @format */

import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { autraliaFlag, canadaFlag, ukFlag, usaFlag } from "../../assest/index";
import TouristImage from "../../components/TouristImg/TouristImage";
import { useNavigate } from "react-router-dom";
import endPoints from "../../Repository/apiConfig";
import { putApi } from "../../Repository/Api";
import { ClipLoader } from "react-spinners";

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

const ButtonContainer = ({ className, title, setValue, value, checkValue }) => {
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

const LayoutMaker = ({ WrappedComponent, width }) => {
  return (
    <section className="choose-destination-page">
      <ProgressBar width={width} />
      {WrappedComponent}
      <TouristImage />
    </section>
  );
};

const StepComponent1 = ({
  backStep,
  nextStep,
  destinationCountry,
  options,
  setDestinationCountry,
}) => {
  return (
    <>
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <h3>
          We would love to know more about your <br /> study abroad path
        </h3>
        <button className="skipBtns" onClick={() => nextStep()}>
          SKIP <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="choose-from-options-page">
        <h4>Choose Your Destination</h4>
        <div className="cards">
          {options?.map((i, index) => (
            <div
              className={`Item ${
                i.title === destinationCountry ? "active" : ""
              }`}
              key={index}
              onClick={() => setDestinationCountry(i.title)}
            >
              <img src={i.img} alt={i.title} />
              <p className="title">{i.title}</p>
            </div>
          ))}
        </div>
        <button className="continue" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </>
  );
};

const StepComponent2 = ({
  backStep,
  nextStep,
  setPrefferedIntake,
  preferredIntake,
  setPreferrefDegree,
  preferredDegree,
}) => {
  return (
    <>
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
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
    </>
  );
};

const StepComponent3 = ({
  backStep,
  nextStep,
  setYourHighestLevelOfEducation,
  yourHighestLevelOfEducation,
  setYourHighestLevelOfEducationYear,
  yourHighestLevelOfEducationYear,
  setGradesORPercentage,
  gradesORpercentage,
  setValidPassport,
  validPassport,
}) => {
  return (
    <>
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
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
          onChange={(e) => setYourHighestLevelOfEducationYear(e.target.value)}
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
            value={"APPLIED"}
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
    </>
  );
};

const StepComponent4 = ({
  backStep,
  nextStep,
  setduolingoStatus,
  duolingoStatus,
  setAlreadyUniversityAdmin,
  alreadyUniversityAdmit,
  lookingFor,
  setLookingFor,
}) => {
  return (
    <>
      {" "}
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
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
          <option value="Already gave the exam">Already gave the exam</option>
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
            value={"I want PR/Job only"}
            setValue={setLookingFor}
            title={"I want PR/Job only"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want to check Admit Eligibility"}
            setValue={setLookingFor}
            title={"I want to check Admit Eligibility"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want Visa Assistance"}
            setValue={setLookingFor}
            title={"I want Visa Assistance"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want IELTS Preparation"}
            setValue={setLookingFor}
            title={"I want IELTS Preparation"}
            checkValue={lookingFor}
          />
        </div>

        <button className="continue" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </>
  );
};

const StepComponent5 = ({
  backStep,
  nextStep,
  setduolingoStatus,
  duolingoStatus,
  setAlreadyUniversityAdmin,
  alreadyUniversityAdmit,
  lookingFor,
  setLookingFor,
  setBookingConfirmation,
  bookingConfirmation,
}) => {
  return (
    <>
      {" "}
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
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
          <option value="Already gave the exam">Already gave the exam</option>
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
        <h4>What are you looking for?</h4>
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
            value={"I want PR/Job only"}
            setValue={setLookingFor}
            title={"I want PR/Job only"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want to check Admit Eligibility"}
            setValue={setLookingFor}
            title={"I want to check Admit Eligibility"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want Visa Assistance"}
            setValue={setLookingFor}
            title={"I want Visa Assistance"}
            checkValue={lookingFor}
          />
          <ButtonContainer
            value={"I want IELTS Preparation"}
            setValue={setLookingFor}
            title={"I want IELTS Preparation"}
            checkValue={lookingFor}
          />
        </div>
        <h4>Do you have an exam booking confirmation?</h4>
        <div className="preferred-btn-container">
          <ButtonContainer
            value={"YES"}
            setValue={setBookingConfirmation}
            title={"YES"}
            checkValue={bookingConfirmation}
          />
          <ButtonContainer
            value={"NO"}
            setValue={setBookingConfirmation}
            title={"NO"}
            checkValue={bookingConfirmation}
          />
        </div>

        <button className="continue" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </>
  );
};

const StepComponent6 = ({ backStep, nextStep, setGivenGRE, givenGRE }) => {
  return (
    <>
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
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
        <h4>How You Given GRE</h4>
        <select onChange={(e) => setGivenGRE(e.target.value)} value={givenGRE}>
          <option value=""> </option>
          <option value="Already Given">Already Given</option>
          <option value="Taken date in next 2 months">
            Taken date in next 2 months
          </option>
          <option value="Plannig to give in next 2 months">
            Plannig to give in next 2 months
          </option>
          <option value="No plan for GRE as of now">
            No plan for GRE as of now
          </option>
        </select>

        <button className="continue" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </>
  );
};

const StepComponent7 = ({
  backStep,
  setFullName,
  fullname,
  setEmail,
  email,
  setPhone,
  phone,
  submitHandler,
  loading,
  navigate,
}) => {
  return (
    <>
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => backStep()}>
          {" "}
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <button className="degree-btn">
          <i className="fa-solid fa-graduation-cap"></i> Masters
        </button>
        <button
          className="skipBtns"
          onClick={() => navigate("/user-dashboard/home")}
        >
          SKIP <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="choose-from-options-page">
        <h4>Just one last step to get an University Shortlist</h4>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullname}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="continue" onClick={submitHandler}>
          {loading ? <ClipLoader color="#fff" /> : "Continue"}
        </button>
      </div>
    </>
  );
};

const ChooseDestination = () => {
  const [step, setStep] = useState(1);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
  const [loading, setLoading] = useState(false);

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

  const fd = new FormData();
  fd.append("fullname", fullname);
  fd.append("email", email);
  fd.append("phone", phone);
  fd.append("destinationCountry", destinationCountry);
  fd.append("preferredIntake", preferredIntake);
  fd.append("preferredDegree", preferredDegree);
  fd.append("yourHighestLevelOfEducation", yourHighestLevelOfEducation);
  fd.append("yourHighestLevelOfEducationYear", yourHighestLevelOfEducationYear);
  fd.append("gradesORpercentage", gradesORpercentage);
  fd.append("validPassport", validPassport);
  fd.append("duolingoStatus", duolingoStatus);
  fd.append("alreadyUniversityAdmit", alreadyUniversityAdmit);
  fd.append("lookingFor", lookingFor);
  fd.append("bookingConfirmation", bookingConfirmation);
  fd.append("givenGRE", givenGRE);

  const submitHandler = () => {
    putApi(endPoints.updateUserProfile, fd, {
      setLoading,
      additionalFunctions: [() => navigate("/")],
    });
  };

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent1
                backStep={backStep}
                nextStep={nextStep}
                destinationCountry={destinationCountry}
                options={options}
                setDestinationCountry={setDestinationCountry}
              />
            }
          />
        );
      case 2:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent2
                backStep={backStep}
                nextStep={nextStep}
                setPrefferedIntake={setPrefferedIntake}
                preferredIntake={preferredIntake}
                setPreferrefDegree={setPreferrefDegree}
                preferredDegree={preferredDegree}
              />
            }
            width={"30%"}
          />
        );
      case 3:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent3
                backStep={backStep}
                nextStep={nextStep}
                setYourHighestLevelOfEducation={setYourHighestLevelOfEducation}
                yourHighestLevelOfEducation={yourHighestLevelOfEducation}
                setYourHighestLevelOfEducationYear={
                  setYourHighestLevelOfEducationYear
                }
                yourHighestLevelOfEducationYear={
                  yourHighestLevelOfEducationYear
                }
                setGradesORPercentage={setGradesORPercentage}
                gradesORpercentage={gradesORpercentage}
                setValidPassport={setValidPassport}
                validPassport={validPassport}
              />
            }
            width={"45%"}
          />
        );
      case 4:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent4
                backStep={backStep}
                nextStep={nextStep}
                setduolingoStatus={setduolingoStatus}
                duolingoStatus={duolingoStatus}
                setAlreadyUniversityAdmin={setAlreadyUniversityAdmin}
                alreadyUniversityAdmit={alreadyUniversityAdmit}
                lookingFor={lookingFor}
                setLookingFor={setLookingFor}
              />
            }
            width={"60%"}
          />
        );
      case 5:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent5
                backStep={backStep}
                nextStep={nextStep}
                setduolingoStatus={setduolingoStatus}
                duolingoStatus={duolingoStatus}
                setAlreadyUniversityAdmin={setAlreadyUniversityAdmin}
                alreadyUniversityAdmit={alreadyUniversityAdmit}
                lookingFor={lookingFor}
                setLookingFor={setLookingFor}
                setBookingConfirmation={setBookingConfirmation}
                bookingConfirmation={bookingConfirmation}
              />
            }
            width={"75%"}
          />
        );
      case 6:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent6
                backStep={backStep}
                nextStep={nextStep}
                setGivenGRE={setGivenGRE}
                givenGRE={givenGRE}
              />
            }
            width={"90%"}
          />
        );
      case 7:
        return (
          <LayoutMaker
            WrappedComponent={
              <StepComponent7
                backStep={backStep}
                setFullName={setFullName}
                fullname={fullname}
                givenGRE={givenGRE}
                setEmail={setEmail}
                email={email}
                setPhone={setPhone}
                phone={phone}
                submitHandler={submitHandler}
                loading={loading}
                navigate={navigate}
              />
            }
            width={"100%"}
          />
        );
    }
  };

  return renderStepComponent();
};

export default ChooseDestination;
