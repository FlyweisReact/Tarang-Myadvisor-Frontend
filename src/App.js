/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudyIndia from "./components/StudyIndia";
import LiveSession from "./pages/CounsellingSession/LiveSession";
import LiveSession2 from "./pages/CounsellingSession/LiveSession2";
import FindAdwizor from "./pages/FindAdwizor";
import HomePage from "./pages/HomePage";
import ChooseDestination from "./pages/StudentAbroad/ChooseDestination";
import StudyAbroad from "./pages/StudyAbroad";
import { ReactNotifications } from "react-notifications-component";
import ConnectAdwizor from "./pages/ConnectAdwizor";
import UserHome from "./pages/UserDashboard/UserHome";
import UserProfile from "./pages/UserDashboard/UserProfile";
import UserDocuments from "./pages/UserDashboard/UserDocuments";
import UserProgramms from "./pages/UserDashboard/UserProgramms";
import UserAdwizors from "./pages/UserDashboard/UserAdwizors";
import UserUniversities from "./pages/UserDashboard/UserUniversities";
import UserApplicationStatus from "./pages/UserDashboard/UserApplicationStatus";
import UserChat from "./pages/UserDashboard/UserChat";
import ViewUserChat from "./pages/UserDashboard/ViewUserChat";

const App = () => {
  return (
    <BrowserRouter>
      <ReactNotifications />
      <Routes>
        <Route path="/choose-destination" element={<ChooseDestination />} />
        <Route path="/counselling-session/live" element={<LiveSession />} />
        <Route path="/counselling-session/live-2" element={<LiveSession2 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/find-an-adwizor" element={<FindAdwizor />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/study-india" element={<StudyIndia />} />
        <Route path="/connect-with-adwizor" element={<ConnectAdwizor />} />
        <Route path="/user-dashboard/home" element={<UserHome />} />
        <Route path="/user-dashboard/profile" element={<UserProfile />} />
        <Route path="/user-dashboard/documents" element={<UserDocuments />} />
        {/* new page */}
        <Route path="/user-dashboard/programms" element={<UserProgramms />} />
        <Route path="/user-dashboard/my-adwizors" element={<UserAdwizors />} />
        <Route
          path="/user-dashboard/my-universities"
          element={<UserUniversities />}
        />
        <Route
          path="/user-dashboard/application-status"
          element={<UserApplicationStatus />}
        />
        <Route path="/user-dashboard/my-messages" element={<UserChat />} />
        <Route
          path="/user-dashboard/my-messages/:id"
          element={<ViewUserChat />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
