/** @format */

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Img10 } from "../assest";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const backStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };
  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  return (
    <section className="payment-page ">
      <ul className="tabs margin-div">
        <li>
          <button className={`${step === 1 ? "active" : ""}`}>
            {" "}
            <i className="fa-solid fa-user"></i>
          </button>
          <p>Basic Detalis</p>
        </li>
        <li>
          <button className={`${step === 2 ? "active" : ""}`}>
            {" "}
            <i className="fa-solid fa-paperclip"></i>
          </button>
          <p>Academic Details & Document Upload</p>
        </li>
        <li>
          <button className={`${step === 3 ? "active" : ""}`}>
            {" "}
            <i className="fa-regular fa-circle-check"></i>
          </button>
          <p>Declaration</p>
        </li>
        <li>
          <button className={`${step === 4 ? "active" : ""}`}>
            {" "}
            <i className="fa-solid fa-credit-card"></i>
          </button>
          <p>Payment Receipt</p>
        </li>
        <li>
          <button className={`${step === 5 ? "active" : ""}`}>
            {" "}
            <i className="fa-regular fa-circle-check"></i>
          </button>
          <p>Application Acknowledgement</p>
        </li>
      </ul>

      {step === 1 && (
        <>
          <h4 className="heading mt-5">Personal Details</h4>
          <div className="details boxShadow-container mt-2">
            <form>
              <div className="grid-container-for-4">
                <div className="input-div">
                  <p>TITLE</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>FIRST NAME</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>MIDDLE NAME</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>LAST NAME</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>GENDER</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>CATEGORY</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>NATIONALITY</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>Date of Birth</p>
                  <input type="date" />
                </div>
                <div className="input-div">
                  <p>MOBILE NUMBER</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>ALTERNATE MOBILE NUMBER</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>EMAIL ADDRESS</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>ALTERNATE EMAIL ADDRESS</p>
                  <input type="text" />
                </div>
              </div>
            </form>
            <div className="btn-container">
              <button onClick={backStep}> Save & Exit</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h4 className="heading mt-5">Academic Details</h4>
          <div className="details boxShadow-container mt-2">
            <form>
              <h6 className="heading">10th Details</h6>
              <table className="mt-2 mb-2">
                <thead>
                  <tr>
                    <th></th>
                    <th>10th School/institute Name</th>
                    <th>10th Board</th>
                    <th>10th year of passing</th>
                    <th>10th Marking Scheme</th>
                    <th>10th Obtained Percentage CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="date" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h6 className="heading mt-5">After 10TH QUALIFICATION</h6>
              <div className="radio-container mt-2">
                <div className="item">
                  <input type="radio" />
                  <label>12th</label>
                </div>
                <div className="item">
                  <input type="radio" />
                  <label>Diploma</label>
                </div>
                <div className="item">
                  <input type="radio" />
                  <label>Both</label>
                </div>
              </div>

              <h6 className="heading mt-5">12th Details</h6>
              <table className="mt-2 mb-2">
                <thead>
                  <tr>
                    <th></th>
                    <th>12th School/institute Name</th>
                    <th>12th Board</th>
                    <th>12th Stream</th>
                    <th>12th year of passing</th>
                    <th>Result status</th>
                    <th>12th Marking Scheme</th>
                    <th>12th Obtained Percentage CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="date" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <h6 className="heading mt-5">Graduation Details</h6>
              <table className="mt-2 mb-2">
                <thead>
                  <tr>
                    <th></th>
                    <th>Graduation institute Name</th>
                    <th>Graduation Stream </th>
                    <th>Graduation Percentile </th>
                    <th>Graduation Year of Passing </th>
                    <th>Graduation Result status </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UG</td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="date" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid-container-for-4">
                <div className="input-div">
                  <p>Graduation State</p>
                  <input type="text" />
                </div>
                <div className="input-div">
                  <p>Graduation Degree</p>
                  <input type="text" />
                </div>
                <div className="input-div"></div>
                <div className="input-div"></div>
              </div>

              <h6 className="heading mt-5">
                Do you have any other qualifiaction
              </h6>
              <div className="radio-container mt-2">
                <div className="item">
                  <input type="radio" />
                  <label>Yes</label>
                </div>
                <div className="item">
                  <input type="radio" />
                  <label>No</label>
                </div>
              </div>

              <h6 className="heading mt-5">Document Uploads</h6>
              <table className="mt-2 mb-5">
                <thead>
                  <tr>
                    <th></th>
                    <th>10th class Marksheet</th>
                    <th>12th class Marksheet</th>
                    <th>Graduation final year Marksheet</th>
                    <th>Rank Acheived</th>
                    <th>Aadhar Card Upload</th>
                    <th>Photo Upload</th>
                    <th>12th Obtained Percentage CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UG</td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="date" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                    <td>
                      <div className="input-div">
                        <input type="text" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div className="btn-container">
              <div className="main">
                <button onClick={backStep}>Back</button>
                <button>Save & Exit</button>
              </div>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h4 className="heading mt-5">Declaration</h4>
          <div className="details boxShadow-container mt-2">
            <h6 className="heading">Declaration</h6>
            <hr />
            <p className="description mt-4">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="description mt-4">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="description mt-4">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="btn-container">
              <div className="main">
                <button onClick={backStep}>Back</button>
                <button>Save & Exit</button>
              </div>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h4 className="heading mt-5">Payment Receipt</h4>
          <div className="details boxShadow-container mt-2 payment-reciept">
            <h6 className="heading">Electronic Reciept</h6>
            <h6 className="heading mt-3">
              Application Number : BU22BAN30128512
            </h6>
            <h6 className="description mt-4">To : Aman Anmol </h6>
            <h6 className="description mt-3">
              Online Form submission successful{" "}
            </h6>
            <h6 className="description mt-3">
              Towards the Application Fee BBA - Bachelor of Business
              Adminstration <br />( 7 Specialization) 2023{" "}
            </h6>
            <h6 className="description mt-3">Date of Receipt : 09 May 2022</h6>
            <h6 className="description mt-3">
              Online Transaction Mode : qr-pg,qr,upiqr{" "}
            </h6>
            <h6 className="description mt-3">Transaction ID: 15142251526 </h6>
            <h6 className="description mt-3">Amount Received : 750 </h6>
            <h6 className="heading">
              I accept that fees paid is non refundable
            </h6>
            <h6 className="heading mt-4">
              This is system generated reciept and does not requrie signature
            </h6>

            <div className="btn-container">
              <div className="main">
                <button onClick={backStep}>Back</button>
                <button>Print</button>
              </div>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <div className="details boxShadow-container mt-5 acknowledgement-application">
            <div className="head">
              <div className="content">
                <p className="university-title">XYZ UNIVERSITY</p>
                <p className="field">
                  BBA-BACHELOR OF BUSINESS ADMINISTRATION (7
                  SPECIALIZATIONS)2023{" "}
                </p>
                <p className="application-num">
                  APPICATION NO: X0001254845754564
                </p>
              </div>
              <img src={Img10} alt="" />
            </div>

            <h6 className="heading">Personal Details</h6>

            <Row>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Ashish sharma" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Email ID" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Date of Birth" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Gender" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Mobile No." />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Nationality" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Category" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Additional Category" />
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="NR/International Applicant Category"
                  />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Specialization" />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Referral Details</h6>

            <Row>
              <Col xs={12} md={5}>
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="Name of the person who refers you"
                  />
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="Enrolment Number  of the student who referred you"
                  />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Education Details</h6>
            <h6 className="heading mt-5">Class X</h6>
            <Row>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Board" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="School" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Passing Year" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Mark type" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Percentage / CGPA" />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Class XII</h6>
            <Row>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Board" />
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Passing Year" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Stream" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Mark type" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Percentage / CGPA" />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Preferences</h6>
            <Row>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Stream" />
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Level" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Specialization" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Location" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="College type" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Fee Range" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="College" />
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="No PreferencesInterested in studying abroad?"
                  />
                </div>
              </Col>
              <Col xs={12} md={4}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Need Loan ?" />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Payment Details</h6>
            <Row>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Transaction ID" />
                </div>
              </Col>

              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Payment Date" />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Mode of Payment" />
                </div>
              </Col>
              <Col xs={12} md={3}></Col>
              <Col xs={12} md={3}>
                <div className="input-div">
                  <input type="text" placeholder="Colleges Applied" />
                </div>
              </Col>
            </Row>

            <h6 className="heading mt-5">Declaration</h6>
            <p className="description mt-4" style={{ maxWidth: "100%" }}>
              I, declare that all statements made in this application for
              admission are correct and complete. I also understand that
              plagiarism, submission of false information, or omission of
              relevant information or credentials may result in my application
              being withdrawn, my admission being denied, or my admission being
              revoked. <br />
              I, also understand that I have read the admission procedure
              document and the submission of application does not automatically
              qualify me for interview/further selection process. The
              Application Fee is non-refundable under any circumstances Further,
              I understand that Ragging is banned in the University. If I am
              found indulging in ragging, at any stage of my study period, I
              shall be liable for disciplinary action; including expulsion from
              the University.
            </p>

            <h6 className="heading mt-5">Application Name:</h6>
            <h6 className="heading mt-2">Parent Name:</h6>
            <h6 className="heading mt-2">Date:</h6>

            <div
              className="btn-container"
              style={{ justifyContent: "flex-end" }}
            >
              <button onClick={backStep}>Back</button>
              <button>Print</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default WrappedComponent({ WrappedComponent: PaymentPage });
