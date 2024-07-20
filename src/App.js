/** @format */

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import StudyIndia from "./pages/StudyIndia";
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
import UserEvents from "./pages/UserDashboard/UserEvents";
import UserRefer from "./pages/UserDashboard/UserRefer";
import UserConnectAdwizor from "./pages/UserDashboard/UserConnectAdwizor";
import UserHowItWorks from "./pages/UserDashboard/UserHowItWorks";
import UserAdwizorProfile from "./pages/UserDashboard/UserAdwizorProfile";
import StudyInternational from "./pages/StudyInternational";
import StudyInternationalFeature from "./pages/StudyInternationalFeature";
import UserWriteReview from "./pages/UserDashboard/UserWriteReview";
import CollegeHomepage from "./pages/Colleges/CollegeHomepage";
import ScholarshipTest from "./pages/Colleges/ScholarshipTest";
import Scholarship from "./pages/Colleges/Scholarship";
import CollegeDetails from "./pages/Colleges/CollegeDetails";
import ExploreColleges from "./pages/ExploreColleges";
import CollegeMicroInfo from "./pages/CollegeMicroInfo";
import ShortlistedCollege from "./pages/ShortlistedCollege";
import PaymentPage from "./pages/PaymentPage";
import CollegeLists from "./pages/CollegeLists";
import CompareColleges from "./pages/CompareColleges";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/user-dashboard/user-events" element={<UserEvents />} />
        <Route path="/user-dashboard/refer-earn" element={<UserRefer />} />
        <Route
          path="/user-dashboard/connect-with-adwizor"
          element={<UserConnectAdwizor />}
        />
        <Route
          path="/user-dashboard/how-it-works"
          element={<UserHowItWorks />}
        />
        <Route
          path="/user-dashboard/adwizor-profile"
          element={<UserAdwizorProfile />}
        />

        <Route
          path="/user-dashboard/write-a-review"
          element={<UserWriteReview />}
        />
        <Route
          path="/study-international/:name"
          element={<StudyInternational />}
        />
        <Route
          path="/study-international/features"
          element={<StudyInternationalFeature />}
        />

        <Route path="/college/homepage" element={<CollegeHomepage />} />
        <Route path="/college/scholarship-test" element={<ScholarshipTest />} />
        <Route path="/college/scholarship" element={<Scholarship />} />
        <Route path="/college/read-more" element={<CollegeDetails />} />
        <Route path="/college/explore-colleges" element={<ExploreColleges />} />
        <Route path="/college-micro-info" element={<CollegeMicroInfo />} />
        <Route path="/shortlisted-college" element={<ShortlistedCollege />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        {/* new page */}
        <Route path="/college-list" element={<CollegeLists />} />
        <Route path="/compare-colleges" element={<CompareColleges />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
