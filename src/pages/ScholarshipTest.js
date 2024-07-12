/** @format */

import React from "react";
import { whiteDoc, whiteCap, whiteMsg, whiteUser } from "../assest";
import { BlinkingHeading } from "../components/HelpingComponents";
import CollegePageLayout from "../Layout/CollegeLayout/Layout/CollegePageLayout";

const data = [
  {
    img: whiteDoc,
    count: "1,00,000",
    title: "Students taken test",
  },
  {
    img: whiteUser,
    count: "4,00,000",
    title: "Students Counselled",
  },
  {
    img: whiteMsg,
    count: "1500+",
    title: "Expert Counsellor",
  },
  {
    img: whiteCap,
    count: "10,00+",
    title: "Admission Taken",
  },
  {
    img: whiteCap,
    count: "10,00+",
    title: "Admission Taken",
  },
];

const ScholarshipTest = () => {
  return (
    <section>
      <BlinkingHeading
        text={
          "Admissions Open for O P Jindal Global University. Click to Apply Now!"
        }
      />

      <div className="test-stats margin-div">
        {data.map((i, index) => (
          <div className="Item" key={index}>
            <img src={i.img} alt="" />
            <div className="content">
              <p> {i.count} </p>
              <p> {i.title} </p>
            </div>
          </div>
        ))}
      </div>

      <div className="start-test">
        <div className="box-container">
          <div className="box">
            <h4>Select the language for the test.</h4>
            <select>
              <option>English</option>
            </select>
          </div>
          <div className="box disable">
            <h4>Select the course for test</h4>
            <select>
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>B.Design </option>
              <option>M.Design </option>
              <option>BBA</option>
              <option>MBA</option>
            </select>
          </div>
        </div>

        <button className="start-btn">Start Now</button>

        <h5 className="higlight-text">B.Tech Program Scholarship Test</h5>

        <form className="boxShadow-container margin-div">
          <p className="title">This Could prove to be start of something BIG</p>

          <div className="input-group">
            <p className="legend">
              Q1 Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate ?
            </p>
            <div className="groups">
              <div>
                <input type="radio" id="never" name="never" />
                <label for="never">Never</label>
              </div>
              <div>
                <input type="radio" id="Sometimes" name="Sometimes" />
                <label for="Sometimes">Sometimes</label>
              </div>
              <div>
                <input type="radio" id="Always" name="Always" />
                <label for="Always">Always</label>
              </div>
            </div>
          </div>
          <div className="input-group mt-5">
            <p className="legend">
              Q2 Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate ?
            </p>
            <div className="groups">
              <div>
                <input type="radio" id="never" name="never" />
                <label for="never">Never</label>
              </div>
              <div>
                <input type="radio" id="Sometimes" name="Sometimes" />
                <label for="Sometimes">Sometimes</label>
              </div>
              <div>
                <input type="radio" id="Always" name="Always" />
                <label for="Always">Always</label>
              </div>
            </div>
          </div>
          <div className="input-group mt-5">
            <p className="legend">
              Q3 Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate ?
            </p>
            <div className="groups">
              <div>
                <input type="radio" id="never" name="never" />
                <label for="never">Never</label>
              </div>
              <div>
                <input type="radio" id="Sometimes" name="Sometimes" />
                <label for="Sometimes">Sometimes</label>
              </div>
              <div>
                <input type="radio" id="Always" name="Always" />
                <label for="Always">Always</label>
              </div>
            </div>
          </div>
          <div className="input-group mt-5">
            <p className="legend">
              Q4 Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate ?
            </p>
            <div className="groups">
              <div>
                <input type="radio" id="never" name="never" />
                <label for="never">Never</label>
              </div>
              <div>
                <input type="radio" id="Sometimes" name="Sometimes" />
                <label for="Sometimes">Sometimes</label>
              </div>
              <div>
                <input type="radio" id="Always" name="Always" />
                <label for="Always">Always</label>
              </div>
            </div>
          </div>
          <div className="input-group mt-5">
            <p className="legend">
              Q5 Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate ?
            </p>
            <div className="groups">
              <div>
                <input type="radio" id="never" name="never" />
                <label for="never">Never</label>
              </div>
              <div>
                <input type="radio" id="Sometimes" name="Sometimes" />
                <label for="Sometimes">Sometimes</label>
              </div>
              <div>
                <input type="radio" id="Always" name="Always" />
                <label for="Always">Always</label>
              </div>
            </div>
          </div>

          <div className="btn-container">
            <button>Next</button>
            <p>Page 1 to 10 {"<>"} </p>
          </div>
        </form>
        <button className="start-btn">Restart Now</button>
      </div>

      <div className="blank-div margin-div boxShadow-container"></div>
    </section>
  );
};

export default CollegePageLayout({ WrappedComponent: ScholarshipTest });
