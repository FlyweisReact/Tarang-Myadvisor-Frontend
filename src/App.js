/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiveSession from "./pages/CounsellingSession/LiveSession";
import LiveSession2 from "./pages/CounsellingSession/LiveSession2";
import FindAdwizor from "./pages/FindAdwizor";
import HomePage from "./pages/HomePage";
import ChooseDestination from "./pages/StudentAbroad/ChooseDestination";
import Degree from "./pages/StudentAbroad/Degree";
import DegreeStatus from "./pages/StudentAbroad/DegreeStatus";
import DegreeStatus3 from "./pages/StudentAbroad/DegreeStatus3";
import PreferredIntake from "./pages/StudentAbroad/PreferredIntake";
import StatusQuery from "./pages/StudentAbroad/StatusQuery";
import StudentLastStep from "./pages/StudentAbroad/StudentLastStep";
import StudyAbroad from "./pages/StudyAbroad";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/choose-destination" element={<ChooseDestination />} />
        <Route
          path="/student-abroad-journery/preffered-intake"
          element={<PreferredIntake />}
        />
        <Route path="/student-abroad-journery/degree" element={<Degree />} />
        <Route
          path="/student-abroad-journery/degree-status"
          element={<StatusQuery />}
        />
        <Route
          path="/student-abroad-journery/degree-status-2"
          element={<DegreeStatus />}
        />
        <Route
          path="/student-abroad-journery/degree-status-3"
          element={<DegreeStatus3 />}
        />
        <Route
          path="/student-abroad-journery/last-step"
          element={<StudentLastStep />}
        />
        <Route path="/counselling-session/live" element={<LiveSession />} />
        <Route path="/counselling-session/live-2" element={<LiveSession2 />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/find-an-adwizor" element={<FindAdwizor />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
