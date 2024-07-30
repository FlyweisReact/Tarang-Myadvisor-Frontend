/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UpdateApplication } from "../../components/Modals/Modals";
import TableLayout from "../../components/TableLayout";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const btnStatusCheker = (status) => {
  if (status === "APPLIED") {
    return <button className="filled status-btn">Applied</button>;
  } else if (status === "OFFER") {
    return <button className="offer status-btn">Offer</button>;
  } else if (status === "ENROLLMENT") {
    return <button className="verified status-btn">Enrollment</button>;
  } else if (status === "SHORTLIST") {
    return <button className="pending status-btn">Shortlist</button>;
  } else {
    return <button> {status} </button>;
  }
};

const AdwizorApplications = () => {
  const [students, setStudents] = useState({ data: [] });
  const [applicationId, setApplicationId] = useState("");
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);

  const fetchApplications = () => {
    getApi(endPoints.adwizor.studentApplications, {
      setResponse: setStudents,
    });
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const applicationList = students.data.flatMap((item) =>
    item?.applications?.map((i) => [
      item?.userId ? (
        <Link to={`/adwizor-panel/students/${item?.userId?._id}`}>
          {item?.userId?.fullname}
        </Link>
      ) : (
        <Link to={`/adwizor-panel/students/${item?._id}`}>
          {item?.fullname}
        </Link>
      ),
      i?.appliedAt?.slice(0, 10),
      <Link to={`/college-micro-info/${i?.universityId?.UniversityName}`}>
        {i?.universityId?.UniversityName}
      </Link>,
      i?.universityId?.CourseTitle,
      btnStatusCheker(i?.applicationStatus),
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setUserId(item?.userId ? item?.userId?._id : item?._id);
          setApplicationId(i?._id);
          setShow(true);
        }}
      ></i>,
    ])
  );

  return (
    <section className="adwizor-panel">
      <UpdateApplication
        show={show}
        onHide={() => setShow(false)}
        applicationId={applicationId}
        id={userId}
        fetchData={fetchApplications}
      />
      <div className="section-heading">
        <p className="title">Student Applications List</p>
        <Link to="/adwizor-panel/programs">
          <button>New Application</button>
        </Link>
      </div>

      <div className="students-table margin-div application-table">
        <TableLayout
          thead={[
            "Student",
            "Applied at",
            "University",
            "Course",
            "Status",
            "Action",
          ]}
          tbody={applicationList}
        />
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorApplications);
