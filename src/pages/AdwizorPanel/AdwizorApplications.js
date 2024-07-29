/** @format */

import React , { useState , useEffect} from "react";
import TableLayout from "../../components/TableLayout";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AdwizorApplications = () => {
  const [students, setStudents] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.adwizor.studentApplications , {
      setResponse : setStudents
    })
  },[])

  const studentList = students.data.map((i , index) => [
    `#${index + 1}`,
    i?.fullname,
    i?.phone ,
    i?.gender ,
    i?.application?.applicationStatus
  ])

  console.log(students.data)

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Student Applications List</p>
      </div>

      <div className="students-table margin-div">
        <TableLayout
          thead={[
            "App.No",
            "School",
            "Program",
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

export default AdwizorLayout(AdwizorApplications);
