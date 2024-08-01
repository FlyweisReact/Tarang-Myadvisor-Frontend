/** @format */

import AdwizorDashboard from "../pages/AdwizorPanel/AdwizorDashboard";
import AdwizorProfile from "../pages/AdwizorPanel/AdwizorProfile";
import CollegeLists from "../pages/CollegeLists";
import CollegeMicroInfo from "../pages/CollegeMicroInfo";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import CollegeHomepage from "../pages/Colleges/CollegeHomepage";
import Scholarship from "../pages/Colleges/Scholarship";
import ScholarshipTest from "../pages/Colleges/ScholarshipTest";
import CompareColleges from "../pages/CompareColleges";
import ConnectAdwizor from "../pages/ConnectAdwizor";
import LiveSession from "../pages/CounsellingSession/LiveSession";
import LiveSession2 from "../pages/CounsellingSession/LiveSession2";
import ExploreColleges from "../pages/ExploreColleges";
import FindAdwizor from "../pages/FindAdwizor";
import HomePage from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";
import ShortlistedCollege from "../pages/ShortlistedCollege";
import ChooseDestination from "../pages/StudentAbroad/ChooseDestination";
import StudyAbroad from "../pages/StudyAbroad";
import StudyIndia from "../pages/StudyIndia";
import StudyInternational from "../pages/StudyInternational.js";
import StudyInternationalFeature from "../pages/StudyInternationalFeature";
import UserAdwizorProfile from "../pages/UserDashboard/UserAdwizorProfile";
import UserAdwizors from "../pages/UserDashboard/UserAdwizors";
import UserApplicationStatus from "../pages/UserDashboard/UserApplicationStatus";
import UserChat from "../pages/UserDashboard/UserChat";
import UserConnectAdwizor from "../pages/UserDashboard/UserConnectAdwizor";
import UserDocuments from "../pages/UserDashboard/UserDocuments";
import UserEvents from "../pages/UserDashboard/UserEvents";
import UserHome from "../pages/UserDashboard/UserHome";
import UserHowItWorks from "../pages/UserDashboard/UserHowItWorks";
import UserProfile from "../pages/UserDashboard/UserProfile";
import UserProgramms from "../pages/UserDashboard/UserProgramms";
import UserRefer from "../pages/UserDashboard/UserRefer";
import UserUniversities from "../pages/UserDashboard/UserUniversities";
import UserWriteReview from "../pages/UserDashboard/UserWriteReview";
import ViewUserChat from "../pages/UserDashboard/ViewUserChat";
import AdwizorProgramms from "../pages/AdwizorPanel/AdwizorProgramms";
import AdwizorStudents from "../pages/AdwizorPanel/AdwizorStudents";
import AdwizorStudentProfile from "../pages/AdwizorPanel/AdwizorStudentProfile";
import AdwizorLiveRoom from "../pages/AdwizorPanel/AdwizorLiveRoom";
import AdwizorApplications from "../pages/AdwizorPanel/AdwizorApplications";
import AdwizorMessages from "../pages/AdwizorPanel/AdwizorMessages";
import AdwizorCalender from "../pages/AdwizorPanel/AdwizorCalender";
import AdwizorBlogs from "../pages/AdwizorPanel/AdwizorBlogs";
import AdwizorApppointments from "../pages/AdwizorPanel/AdwizorApppointments";
import AdwizorTasks from "../pages/AdwizorPanel/AdwizorTasks";
import AdwizorReviews from "../pages/AdwizorPanel/AdwizorReviews";
import TrainHub from "../pages/AdwizorPanel/TrainHub.js";
import Analysis from "../pages/AdwizorPanel/Analysis.js";

const allRoutes = [
  {
    route: "/",
    component: <HomePage />,
  },
  {
    route: "/choose-destination",
    component: <ChooseDestination />,
  },
  {
    route: "/counselling-session/live",
    component: <LiveSession />,
  },
  {
    route: "/counselling-session/live-2/:id",
    component: <LiveSession2 />,
  },
  {
    route: "/find-an-adwizor",
    component: <FindAdwizor />,
  },
  {
    route: "/study-abroad",
    component: <StudyAbroad />,
  },
  {
    route: "/study-india",
    component: <StudyIndia />,
  },
  {
    route: "/connect-with-adwizor",
    component: <ConnectAdwizor />,
  },
  {
    route: "/user-dashboard/home",
    component: <UserHome />,
  },
  {
    route: "/user-dashboard/profile",
    component: <UserProfile />,
  },
  {
    route: "/user-dashboard/documents",
    component: <UserDocuments />,
  },
  {
    route: "/user-dashboard/programms",
    component: <UserProgramms />,
  },
  {
    route: "/user-dashboard/my-adwizors",
    component: <UserAdwizors />,
  },
  {
    route: "/user-dashboard/my-universities",
    component: <UserUniversities />,
  },
  {
    route: "/user-dashboard/application-status",
    component: <UserApplicationStatus />,
  },
  {
    route: "/user-dashboard/my-messages",
    component: <UserChat />,
  },
  {
    route: "/user-dashboard/my-messages/:id",
    component: <ViewUserChat />,
  },
  {
    route: "/user-dashboard/user-events",
    component: <UserEvents />,
  },
  {
    route: "/user-dashboard/refer-earn",
    component: <UserRefer />,
  },
  {
    route: "/user-dashboard/connect-with-adwizor",
    component: <UserConnectAdwizor />,
  },
  {
    route: "/user-dashboard/how-it-works",
    component: <UserHowItWorks />,
  },
  {
    route: "/user-dashboard/adwizor-profile/:id",
    component: <UserAdwizorProfile />,
  },
  {
    route: "/user-dashboard/write-a-review",
    component: <UserWriteReview />,
  },
  {
    route: "/study-international/:name",
    component: <StudyInternational />,
  },
  {
    route: "/study-international/features",
    component: <StudyInternationalFeature />,
  },
  {
    route: "/college/homepage",
    component: <CollegeHomepage />,
  },
  {
    route: "/college/scholarship-test",
    component: <ScholarshipTest />,
  },
  {
    route: "/college/scholarship",
    component: <Scholarship />,
  },
  {
    route: "/college/read-more",
    component: <CollegeDetails />,
  },
  {
    route: "/college/explore-colleges",
    component: <ExploreColleges />,
  },
  {
    route: "/college-micro-info/:id",
    component: <CollegeMicroInfo />,
  },
  {
    route: "/shortlisted-college",
    component: <ShortlistedCollege />,
  },
  {
    route: "/payment-page",
    component: <PaymentPage />,
  },
  {
    route: "/college-list",
    component: <CollegeLists />,
  },
  {
    route: "/compare-colleges",
    component: <CompareColleges />,
  },
  {
    route: "/adwizor-panel/dashboard",
    component: <AdwizorDashboard />,
  },
  {
    route: "/adwizor-panel/my-profile",
    component: <AdwizorProfile />,
  },
  {
    route: "/adwizor-panel/programs",
    component: <AdwizorProgramms />,
  },
  {
    route: "/adwizor-panel/students",
    component: <AdwizorStudents />,
  },
  {
    route: "/adwizor-panel/students/:id",
    component: <AdwizorStudentProfile />,
  },
  {
    route: "/adwizor-panel/live-room",
    component: <AdwizorLiveRoom />,
  },
  //----
  {
    route: "/adwizor-panel/student-applications",
    component: <AdwizorApplications />,
  },
  {
    route: "/adwizor-panel/message",
    component: <AdwizorMessages />,
  },
  {
    route: "/adwizor-panel/calender",
    component: <AdwizorCalender />,
  },
  {
    route: "/adwizor-panel/my-blogs",
    component: <AdwizorBlogs />,
  },
  {
    route: "/adwizor-panel/appointments",
    component: <AdwizorApppointments />,
  },
  {
    route: "/adwizor-panel/tasks",
    component: <AdwizorTasks />,
  },
  {
    route: "/adwizor-panel/my-reviews",
    component: <AdwizorReviews />,
  },
  //---
  {
    route: "/adwizor-panel/train-hub",
    component: <TrainHub />,
  },
  {
    route: "/adwizor-panel/analysis",
    component: <Analysis />,
  },
];

export default allRoutes;
