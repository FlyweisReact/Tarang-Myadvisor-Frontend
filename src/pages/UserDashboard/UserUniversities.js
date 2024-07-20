/** @format */

import React, { useState, useEffect } from "react";
import { usaSquare } from "../../assest";
import { ShortlistedUniversities } from "../../components/Cards/AllCards";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const nav = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Shortlisted",
    value: "SHORTLIST",
  },
  {
    label: "Applied",
    value: "APPLIED",
  },
  {
    label: "Offer",
    value: "OFFER",
  },
  {
    label: "Enrollment",
    value: "ENROLLMENT",
  },
];

const UserUniversities = () => {
  const [type, setType] = useState("All");
  const [data, setData] = useState({});

  let payload;
  if (type === "All") {
    payload = {};
  } else {
    payload = {
      applicationStatus: type,
    };
  }

  const fetchUniversities = () => {
    postApi(endPoints.allShortlistedUniversity, payload, {
      setResponse: setData,
    });
  };

  useEffect(() => {
    fetchUniversities();
  }, [type]);

  const universityArr =
    data?.data?.length > 0
      ? data?.data?.map((i) => ({
          flagImg: usaSquare,
          title: i?.universityId?.UniversityName,
          collegeImg: i?.universityId?.ImageUrl?.[0],
          isFav: i?.applicationStatus === "SHORTLIST" ? true : false,
          isSaved: i?.applicationStatus === "SHORTLIST" ? true : false,
          status: i?.applicationStatus,
          location: i?.universityId?.location,
          id: i?.universityId?._id,
        }))
      : [];

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>My Universities</p>
      </div>
      <div className="user-dashboard-profile mt-4">
        <div className="tab">
          <ul>
            {nav.map((i, index) => (
              <li
                key={index}
                className={`${type === i.value ? "active" : ""}`}
                onClick={() => setType(i.value)}
              >
                {" "}
                {i.label}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="filter-college-section mt-3 user-universities">
        <div className="result-div">
          <div className="results">
            {universityArr.map((i, index) => (
              <ShortlistedUniversities {...i} key={index} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserUniversities);
