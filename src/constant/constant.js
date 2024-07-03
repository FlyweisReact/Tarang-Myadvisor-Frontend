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
  MdiAbout,
  MdiShare,
  solarCalendarBold,
  universitySvg,
  adwizorSvg,
  HomeSvg,
  healthIconBook,
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
} from "../assest";

const citiesArr = ["Mumbai", "Banglore", "Chennai", "Delhi", "Kerala"];

const countryArr = ["India", "Australia", "USA", "Canada", "German", "UK"];

const prefferedSubjectArr = [
  "MS",
  "MBA",
  "Engineering",
  "MBBS",
  "Buisness & Management",
  "Engineering",
  "Health Science",
  "Law",
  "Arts & Media",
];

const tutionFees = [
  "$0 - $10,000 / Year",
  "$10,000 - $ 20,000 / Year",
  "$20,000 - $ 30,000 / Year",
  "$30,000 - $ 40,000 / Year",
  "Over $50,000 / Year",
];

const inTakes = ["2024", "2025", "2026", "2027", "2028"];
const durationArr = [
  "Less than 1 Year",
  "1-2 Years",
  "2-3 Years",
  "3-4 Years",
  "5 Years",
];

const abroadCollegeArr = [
  {
    img: exploreCtry1,
    title: "Study In Mumbai",
  },
  {
    img: exploreCtry2,
    title: "Study In Delhi",
  },
  {
    img: exploreCtry3,
    title: "Study In Bangalore",
  },
  {
    img: exploreCtry4,
    title: "Study In Kerala",
  },
  {
    img: exploreCtry5,
    title: "Study In Canada",
  },
  {
    img: exploreCtry6,
    title: "Study In Australia",
  },
  {
    img: exploreCtry7,
    title: "Study In Uk",
  },
  {
    img: exploreCtry8,
    title: "Study In USA",
  },
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
    icon: <i className="fa-solid fa-file"></i>,
    title: "My Documents",
    link: "/user-dashboard/documents",
  },
  {
    icon: <i className="fa-solid fa-school"></i>,
    title: "Program & School",
  },
  {
    img: adwizorSvg,
    title: "My Adwizor",
  },
  {
    img: universitySvg,
    title: "My Universities",
  },
  {
    img: IcRoundChat,
    title: "My Messages",
  },
  {
    img: solarCalendarBold,
    title: "Events",
  },
  {
    img: MdiShare,
    title: "Refer a friend",
  },
  {
    img: healthIconBook,
    title: "Connect with Adwizor",
  },
  {
    img: MdiAbout,
    title: "How It Works",
  },
];

const userProfileTab = [
  "Profile Overview",
  "Activities",
  "Notes",
  "Addresses",
  "History",
  "My Universities",
  "Documents",
  "Adwizor",
];

const universityCardArr = [
  {
    img: universityImg,
    collegeName:
      "Dhillon School of Business at University of Lethbridge - Calgary",
    subject: "Bachelor of Management - Human Resource Management and Labour…",
    description: [
      {
        title: "Location",
        desc: "Alberta, CAN",
      },
      {
        title: "Campus city",
        desc: "Calgary",
      },
      {
        title: "Gross tuition fee",
        desc: "$20,290 CAD / Year",
      },
      {
        title: "Application fee",
        desc: "$140 CAD",
      },
      {
        title: "Duration",
        desc: "48 - 60 months",
      },
    ],
  },
  {
    img: universityImg,
    collegeName:
      "Dhillon School of Business at University of Lethbridge - Calgary",
    subject: "Bachelor of Management - Human Resource Management and Labour…",
    description: [
      {
        title: "Location",
        desc: "Alberta, CAN",
      },
      {
        title: "Campus city",
        desc: "Calgary",
      },
      {
        title: "Gross tuition fee",
        desc: "$20,290 CAD / Year",
      },
      {
        title: "Application fee",
        desc: "$140 CAD",
      },
      {
        title: "Duration",
        desc: "48 - 60 months",
      },
    ],
  },
  {
    img: universityImg,
    collegeName:
      "Dhillon School of Business at University of Lethbridge - Calgary",
    subject: "Bachelor of Management - Human Resource Management and Labour…",
    description: [
      {
        title: "Location",
        desc: "Alberta, CAN",
      },
      {
        title: "Campus city",
        desc: "Calgary",
      },
      {
        title: "Gross tuition fee",
        desc: "$20,290 CAD / Year",
      },
      {
        title: "Application fee",
        desc: "$140 CAD",
      },
      {
        title: "Duration",
        desc: "48 - 60 months",
      },
    ],
  },
  {
    img: universityImg,
    collegeName:
      "Dhillon School of Business at University of Lethbridge - Calgary",
    subject: "Bachelor of Management - Human Resource Management and Labour…",
    description: [
      {
        title: "Location",
        desc: "Alberta, CAN",
      },
      {
        title: "Campus city",
        desc: "Calgary",
      },
      {
        title: "Gross tuition fee",
        desc: "$20,290 CAD / Year",
      },
      {
        title: "Application fee",
        desc: "$140 CAD",
      },
      {
        title: "Duration",
        desc: "48 - 60 months",
      },
    ],
  },
];

const documentTabArr = [
  {
    title: "Class X",
    added: "10th.pdf",
  },
  {
    title: "Intermediate",
    added: "12th.pdf",
  },
  {
    title: "B.Tech /Degree /Any UG",
    added: "Btech.pdf",
  },
  {
    title: "Aptitude Test / GRE / GMAT/ IELTS",
    added: "GRE.pdf",
  },
  {
    title: "Professional Experience",
    added: "Experience.pdf.pdf",
  },
  {
    title: "Pancard",
    added: "Pan.JPEG",
  },
  {
    title: "Aadhar Card",
    added: "Aadhaar.JPEG",
  },
  {
    title: "Bank Statement / Affidavit",
    added: "Bankstatement .JPEG",
  },
  {
    title: "Passport",
    added: "Passport.pdf",
  },
];

const documentTabArr2 = [
  {
    title: "Statement of Purpose",
    added: "SOP.Pdf",
  },
  {
    title: "Letter of Recommendation",
    added: "LOR.Pdf",
  },
];

const allAdwiozordsArr = [
  {
    img: verifiedAdwizor,
    title: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor1,
    title: "Bessie Cooper",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor2,
    title: "Robert Fox",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor3,
    title: "Kristin Watson",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor4,
    title: "Ralph Edwards ",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor5,
    title: "Floyd Miles",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
];

const sypnosisData = [
  {
    flag: IndianRngFlag,
    title: "Study in INDIA",
    accordion: [
      "Why Study in India",
      "SOP for India",
      "EXAMS for Studing India",
      "Post Study Opportunities in India",
    ],
  },
  {
    flag: usaEllipse,
    title: "Study in USA",
    accordion: [
      "Why Study in USA",
      "SOP for USA",
      "EXAMS for Studing USA",
      "Post Study Opportunities in USA",
    ],
  },
  {
    flag: ukEllipse,
    title: "Study in Uk",
    accordion: [
      "Why Study in UK",
      "SOP for UK",
      "EXAMS for Studing UK",
      "Post Study Opportunities in UK",
    ],
  },
  {
    flag: canadaEllipse,
    title: "Study in CANADA",
    accordion: [
      "Why Study in Canada",
      "SOP for Canada",
      "EXAMS for Studing Canada",
      "Post Study Opportunities in Canada",
    ],
  },
];

const collegeDetails = [
  [
    "#1",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#2",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#3",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#4",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#5",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
];

export {
  collegeDetails ,
  allAdwiozordsArr,
  documentTabArr,
  documentTabArr2,
  citiesArr,
  countryArr,
  prefferedSubjectArr,
  tutionFees,
  inTakes,
  durationArr,
  abroadCollegeArr,
  userProfileTab,
  userDashboardSidebar,
  universityCardArr,
  sypnosisData,
};
