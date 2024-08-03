/** @format */

import {
  exploreCtry1,
  exploreCtry2,
  exploreCtry3,
  exploreCtry4,
  exploreCtry5,
  exploreCtry6,
  exploreCtry7,
  exploreCtry8,
  IcRoundChat,
  HomeSvg,
  universityImg,
  verifiedAdwizor,
  verifiedAdwizor1,
  verifiedAdwizor2,
  verifiedAdwizor3,
  verifiedAdwizor4,
  verifiedAdwizor5,
  IndianRngFlag,
  usaEllipse,
  ukEllipse,
  canadaEllipse,
  collegeIcon,
  rankingIcon,
  adwizorblog1,
  adwizorblog2,
  adwizorblog3,
  adwizorblog4,
  adwizorblog5,
  adwizorblog6,
  adwizorblog7,
  adwizorblog8,
  bagVector,
  chipVector,
  lawVector,
  tubeVector,
  cartVector,
  artVector,
  paraVectory,
  capVector,
  healthVector,
  houseVector,
  foodVector,
  busVector,
  musicVector,
  workOppurutunity1,
  workOppurutunity2,
  workOppurutunity3,
  workOppurutunity4,
  workOppurutunity5,
  workOppurutunity6,
  workOppurutunity7,
  workOppurutunity8,
  exploreDestination1,
  exploreDestination2,
  exploreDestination3,
  CitiesImg1,
  CitiesImg2,
  CitiesImg3,
  CitiesImg4,
  CitiesImg5,
  CitiesImg6,
  NearlyCollege1,
  NearlyCollege2,
  NearlyCollege3,
  NearlyCollege4,
} from "../assest";

const inTakes = ["2024", "2025", "2026", "2027", "2028"];
const durationArr = [
  "Less than 1 Year",
  "1-2 Years",
  "2-3 Years",
  "3-4 Years",
  "5 Years",
];
const userDashboardSidebar = [
  {
    img: HomeSvg,
    title: "Home",
    link: "/user-dashboard/home",
  },
  {
    icon: <i className="fa-solid fa-user"></i>,
    title: "My Profile",
    link: "/user-dashboard/profile",
  },
  {
    icon: <i className="fa-solid fa-calendar-check"></i>,
    title: "My Appointments",
    link: "/user-dashboard/my-appointments",
  },
  {
    icon: <i className="fa-solid fa-file"></i>,
    title: "My Documents",
    link: "/user-dashboard/documents",
  },
  {
    icon: <i className="fa-solid fa-school"></i>,
    title: "Program & School",
    link: "/user-dashboard/programms",
  },

  {
    icon: <i className="fa-solid fa-user-doctor"></i>,
    title: "My Adwizor",
    link: "/user-dashboard/my-adwizors",
  },
  {
    icon: <i className="fa-solid fa-building-columns"></i>,
    title: "My Universities",
    link: "/user-dashboard/my-universities",
  },
  {
    icon: <i className="fa-solid fa-message"></i>,
    title: "My Messages",
    link: "/user-dashboard/my-messages",
  },

  {
    icon: <i className="fa-solid fa-share"></i>,
    title: "Refer a friend",
    link: "/user-dashboard/refer-earn",
  },
  {
    icon: <i className="fa-solid fa-circle-info"></i>,
    title: "How It Works",
    link: "/user-dashboard/how-it-works",
  },
  {
    icon: <i className="fa-solid fa-asterisk"></i>,
    title: "Write Review",
    link: "/user-dashboard/write-a-review",
  },
];
const userProfileTab = ["Profile Overview", "Addresses", "My Universities"];
const programmLevel = [
  "1 year Degree",
  "2 year Degree",
  "3 year Degree",
  "4 year Bachelor's",
  "UG",
  "PG",
  "1 Year  Masters",
];

const topProgrammsArr = [
  {
    img: bagVector,
    title: "Management",
    desc: "461 Colleges",
  },
  {
    img: chipVector,
    title: "Engineering",
    desc: "461 Colleges",
  },
  {
    img: lawVector,
    title: "Law",
    desc: "461 Colleges",
  },
  {
    img: tubeVector,
    title: "Science",
    desc: "461 Colleges",
  },
  {
    img: cartVector,
    title: "Commerce",
    desc: "461 Colleges",
  },
  {
    img: artVector,
    title: "Arts",
    desc: "461 Colleges",
  },
  {
    img: paraVectory,
    title: "Paramedical",
    desc: "461 Colleges",
  },
  {
    img: capVector,
    title: "Paramedical",
    desc: "461 Colleges",
  },
  {
    img: healthVector,
    title: "Pharmacy",
    desc: "461 Colleges",
  },
];


const topCitiesArr = [
  {
    img: CitiesImg1,
    title: "Delhi",
  },
  {
    img: CitiesImg2,
    title: "Mumbai",
  },
  {
    img: CitiesImg3,
    title: "Kolkata",
  },
  {
    img: CitiesImg4,
    title: "Chennai",
  },
  {
    img: CitiesImg5,
    title: "Agra",
  },
  {
    img: CitiesImg6,
    title: "Jaipur",
  },
  {
    img: CitiesImg1,
    title: "Delhi",
  },
  {
    img: CitiesImg2,
    title: "Mumbai",
  },
  {
    img: CitiesImg3,
    title: "Kolkata",
  },
  {
    img: CitiesImg4,
    title: "Chennai",
  },
  {
    img: CitiesImg5,
    title: "Agra",
  },
  {
    img: CitiesImg6,
    title: "Jaipur",
  },
];


const topDelhiUniversities = [
  "Jawahar lal Nehru",
  "IGNOU",
  "Jamia Miliya Islamia",
  "IP University",
  "Miranda House",
  "Hindu College",
  "Atma Ram Sanatan Dharma",
  "Hansraj",
  "St. Stephen's",
  "Acharya Narendra Dev",
  "Deen Dayal Upadhyaya ",
  "Gargi College",
  "Jesus and Mary",
];

const mumbaiColleges = [
  "University of Mumbai",
  "IIT Bombay",
  "Kishan Chand",
  "NMIMS",
  "Whistling Wood International",
  "Amity University",
  "S.P. Jain",
  "TISS",
  "Sardar Patel Institute",
  "C.U. Shah College",
  "Thakur Institute",
  "KJ Somaiya",
  "Vivekanand College",
];

const chennaiColleges = [
  "Anna University",
  "Indian Institute of Technology Madras (IIT Madras)",
  "Madras Christian College (MCC)",
  "Loyola College",
  "Stella Maris College",
  "Madras Institute of Technology (MIT)",
  "Ethiraj College for Women",
  "SRM Institute of Science and Technology",
  "Vellore Institute of Technology (Chennai Campus)",
  "Hindustan Institute of Technology and Science (HITS)",
  "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
  "Sathyabama Institute of Science and Technology",
  "DG Vaishnav College",
  "MOP Vaishnav College for Women",
];

const bangaloreColleges = [
  "Indian Institute of Science (IISc)",
  "Indian Institute of Management Bangalore (IIMB)",
  "Christ University",
  "National Institute of Fashion Technology (NIFT)",
  "PES University",
  "BMS College of Engineering",
  "St. Joseph's College",
  "Mount Carmel College",
  "RV College of Engineering",
  "Jain University",
  "Bangalore Medical College and Research Institute (BMCRI)",
  "MS Ramaiah Institute of Technology",
  "Dayananda Sagar College of Engineering",
  "Bangalore Institute of Technology (BIT)",
];

const adwizorSidebarArr = [
  {
    img: HomeSvg,
    title: "Dashboard",
    link: "/adwizor-panel/dashboard",
  },
  {
    icon: <i className="fa-solid fa-school"></i>,
    title: "Program & School",
    link: "/adwizor-panel/programs",
  },
  {
    icon: <i className="fa-solid fa-graduation-cap"></i>,
    title: "Students",
    link: "/adwizor-panel/students",
  },
  {
    icon: <i className="fa-solid fa-file"></i>,
    title: "Applications",
    link: "/adwizor-panel/student-applications",
  },
  {
    icon: <i className="fa-solid fa-calendar-days"></i>,
    title: "Live Room",
    link: "/adwizor-panel/live-room",
  },
  {
    icon: <i className="fa-solid fa-calendar-days"></i>,
    title: "My Appointments",
    link: "/adwizor-panel/appointments",
  },
  {
    icon: <i className="fa-solid fa-spinner"></i>,
    title: "Train Hub",
    link: "/adwizor-panel/train-hub",
  },
  {
    icon: <i className="fa-solid fa-arrow-trend-up"></i>,
    title: "Analysis",
    link: "/adwizor-panel/analysis",
  },
  {
    img: IcRoundChat,
    title: "My Messages",
    link: "/adwizor-panel/message",
  },
  {
    icon: <i class="fa-solid fa-calendar-days"></i>,
    title: "Calender",
    link: "/adwizor-panel/calender",
  },
  {
    icon: <i class="fa-solid fa-calendar-days"></i>,
    title: "My Blogs",
    link: "/adwizor-panel/my-blogs",
  },
  {
    icon: <i className="fa-solid fa-user"></i>,
    title: "My Profile",
    link: "/adwizor-panel/my-profile",
  },
  {
    icon: <i className="fa-solid fa-star"></i>,
    title: "Reviews",
    link: "/adwizor-panel/my-reviews",
  },
];

export {
  adwizorSidebarArr,
  bangaloreColleges,
  chennaiColleges,
  mumbaiColleges,
  topDelhiUniversities,
  programmLevel,
  inTakes,
  durationArr,
  userProfileTab,
  userDashboardSidebar,
  topProgrammsArr,
  topCitiesArr,
};
