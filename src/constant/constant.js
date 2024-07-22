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
    link: "/user-dashboard/programms",
  },
  {
    img: adwizorSvg,
    title: "My Adwizor",
    link: "/user-dashboard/my-adwizors",
  },
  {
    img: universitySvg,
    title: "My Universities",
    link: "/user-dashboard/my-universities",
  },
  {
    img: IcRoundChat,
    title: "My Messages",
    link: "/user-dashboard/my-messages",
  },
  {
    img: solarCalendarBold,
    title: "Events",
    link: "/user-dashboard/user-events",
  },
  {
    img: MdiShare,
    title: "Refer a friend",
    link: "/user-dashboard/refer-earn",
  },
  {
    img: healthIconBook,
    title: "Connect with Adwizor",
    link: "/user-dashboard/connect-with-adwizor",
  },
  {
    img: MdiAbout,
    title: "How It Works",
    link: "/user-dashboard/how-it-works",
  },
];

const userDashboardSidebar2 = [
  {
    img: HomeSvg,
    title: "Home",
    link: "/user-dashboard/home",
  },
  {
    img: MdiShare,
    title: "Refer a friend",
    link: "/user-dashboard/refer-earn",
  },
  {
    img: universitySvg,
    title: "My Universities",
    link: "/user-dashboard/my-universities",
  },
  {
    icon: <i className="fa-solid fa-file"></i>,
    title: "My Documents",
    link: "/user-dashboard/documents",
  },
];

const userProfileTab = [
  "Profile Overview",
  // "Activities",
  // "Notes",
  "Addresses",
  // "History",
  "My Universities",
  // "Documents",
  // "Adwizor",
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
  [
    "#6",
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
    "#7",
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
    "#8",
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
    "#9",
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
    "#10",
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

const programmLevel = [
  "1 year Degree",
  "2 year Degree",
  "3 year Degree",
  "4 year Bachelor's",
  "UG",
  "PG",
  "1 Year  Masters",
];

const courseArr = [
  "Arts",
  "Buisness",
  "3 year Degree",
  "Bachelor's",
  "Health & Nursing ",
  "Design",
  "Creation",
];

const englishScore = ["Reading", "Writing", "Listening", "Speaking"];

const tutionFess = [
  "0-10000",
  "10000-20000",
  "20000-30000",
  "30000-40000",
  "40000-50000",
  "50000+",
];

const infuluncerCardConstant = [
  {
    img: adwizorblog1,
    title: "Jerome Bell",
    desc: "100k+ Followers , Canada",
  },
  {
    img: adwizorblog2,
    title: "Kathryn Murphy",
    desc: "101k+ Followers , Australia",
  },
  {
    img: adwizorblog3,
    title: "Albert Flores",
    desc: "200k+ Followers , Australia",
  },
  {
    img: adwizorblog4,
    title: "Bessie Cooper",
    desc: "300k+ Followers , Australia",
  },
  {
    img: adwizorblog5,
    title: "Jerome Bell",
    desc: "100k+ Followers , Canada",
  },
  {
    img: adwizorblog6,
    title: "Kathryn Murphy",
    desc: "101k+ Followers , Australia",
  },
  {
    img: adwizorblog7,
    title: "Albert Flores",
    desc: "200k+ Followers , Australia",
  },
  {
    img: adwizorblog8,
    title: "Bessie Cooper",
    desc: "300k+ Followers , Australia",
  },
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

const expenseArr = [
  {
    img: houseVector,
    title: "Rent",
    desc: "AU$ 600 - AU$ 1760",
  },
  {
    img: foodVector,
    title: "Food",
    desc: "AU$ 565 - AU$ 1120",
  },
  {
    img: busVector,
    title: "Transport",
    desc: "AU$ 120 - AU$ 240",
  },
  {
    img: musicVector,
    title: "Miscellaneous",
    desc: "AU$ 182 - AU$ 364",
  },
];

const workOppurtunityArr = [
  {
    img: workOppurutunity1,
    title: "Arts and Humanities",
  },
  {
    img: workOppurutunity2,
    title: "Social Sciences",
  },
  {
    img: workOppurutunity3,
    title: "Law and Legal Studies",
  },
  {
    img: workOppurutunity4,
    title: "Engineering and Technology",
  },
  {
    img: workOppurutunity5,
    title: "Architecture",
  },
  {
    img: workOppurutunity6,
    title: "Design",
  },
  {
    img: workOppurutunity7,
    title: "Medicine and Life Sciences",
  },
  {
    img: workOppurutunity8,
    title: "Natural Sciences",
  },
];

const faqArr = [
  {
    title: "How  Does a student Earn in Australia ? ",
    desc: "A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20 (INR 53,452) per week for working both on-campus and off-campus during the period of their full-time study",
  },
  {
    title: "What is the Cost to Student in Australia ? ",
    desc: "A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20 (INR 53,452) per week for working both on-campus and off-campus during the period of their full-time study",
  },
  {
    title: "How  Do  you get a PR in Australia ?",
    desc: "A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20 (INR 53,452) per week for working both on-campus and off-campus during the period of their full-time study",
  },
  {
    title: "How  Does a Best Course in Australia ?  ",
    desc: "A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20 (INR 53,452) per week for working both on-campus and off-campus during the period of their full-time study",
  },
  {
    title: "What is the Best University in Australia ? ",
    desc: "A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20 (INR 53,452) per week for working both on-campus and off-campus during the period of their full-time study",
  },
];

const exploreDestinationArr = [
  {
    img: exploreDestination1,
    title: "Explore US",
  },
  {
    img: exploreDestination2,
    title: "Explore UK",
  },
  {
    img: exploreDestination3,
    title: "Explore Canada",
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

const nearCollegeArr = [
  {
    img: NearlyCollege1,
    collegeName: "Jamia millia islamia",
    yearly: "30,000",
  },
  {
    img: NearlyCollege2,
    collegeName: "Delhi Technology University",
    yearly: "500,000",
  },
  {
    img: NearlyCollege3,
    collegeName: "Miranda House",
    yearly: "350,000",
  },
  {
    img: NearlyCollege4,
    collegeName: "National Institute Design",
    yearly: "350,000",
  },
  {
    img: NearlyCollege1,
    collegeName: "Jamia millia islamia",
    yearly: "30,000",
  },
  {
    img: NearlyCollege2,
    collegeName: "Delhi Technology University",
    yearly: "500,000",
  },
  {
    img: NearlyCollege3,
    collegeName: "Miranda House",
    yearly: "350,000",
  },
  {
    img: NearlyCollege4,
    collegeName: "National Institute Design",
    yearly: "350,000",
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
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-graduation-cap"></i>,
    title: "Students",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-file"></i>,
    title: "Applications",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-calendar-days"></i>,
    title: "My Appointments",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-clipboard-check"></i>,
    title: "My Task",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-spinner"></i>,
    title: "Train Hub",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-flag"></i>,
    title: "Flagged",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-arrow-trend-up"></i>,
    title: "Analysis",
    link: "/adwizor-dashboard",
  },
  {
    icon: <i className="fa-solid fa-user"></i>,
    title: "My Profile",
    link: "/adwizor-panel/my-profile",
  },
];

export {
  adwizorSidebarArr,
  bangaloreColleges,
  chennaiColleges,
  mumbaiColleges,
  topDelhiUniversities,
  userDashboardSidebar2,
  exploreDestinationArr,
  infuluncerCardConstant,
  tutionFess,
  englishScore,
  courseArr,
  programmLevel,
  collegeDetails,
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
  topProgrammsArr,
  expenseArr,
  workOppurtunityArr,
  faqArr,
  topCitiesArr,
  nearCollegeArr,
};
