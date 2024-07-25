/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CreateStudent } from "../../components/Modals/Modals";
import TableLayout from "../../components/TableLayout";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AdwizorStudents = () => {
  const [students, setStudents] = useState({ data: [] });
  const [ show ,setShow ] = useState(false)

  useEffect(() => {
    getApi(endPoints.adwizor.assignedStudents, {
      setResponse: setStudents,
    });
  }, []);

  const studentList = students.data.map((i, index) => [
    `#${index + 1}`,
    i?.userId?.fullname,
    i?.userId?.email,
    i?.userId?.phone,
    i?.userId?.gender,
    <Link to={`/adwizor-panel/students/${i?.userId?._id}`}>View</Link>,
  ]);

  return (
    <section className="adwizor-panel">
    <CreateStudent show={show} onHide={() => setShow(false)} />
      <div className="section-heading">
        <p className="title">Student Profile List</p>
        <button onClick={() => setShow(true)} >Add New Student</button>
      </div>

      <div className="students-table margin-div">
        <TableLayout
          thead={[
            "Sno.",
            "Full name",
            "Email Address",
            "Phone Number",
            "Gender",
            "Action",
          ]}
          tbody={studentList}
        />
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorStudents);
