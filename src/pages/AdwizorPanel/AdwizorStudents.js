/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CreateStudent } from "../../components/Modals/Modals";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AdwizorStudents = () => {
  const [students, setStudents] = useState({
    data: {
      AddedUser: [],
      assign: [],
    },
  });
  const [show, setShow] = useState(false);


  const fetchHandler = () => {
    getApi(endPoints.adwizor.assignedStudents, {
      setResponse: setStudents,
    });
  
  }

  useEffect(() => {
    fetchHandler()
    }, []);

  const addedUserList = students.data.AddedUser.map((i) => [
    i?.fullname,
    i?.email,
    i?.phone,
    i?.gender,
    <Link to={`/adwizor-panel/students/${i?._id}`}>View</Link>,
  ]);

  const assignUserList = students.data.assign.map((i) => [
    i?.userId?.fullname,
    i?.userId?.email,
    i?.userId?.phone,
    i?.userId?.gender,
    <Link to={`/adwizor-panel/students/${i?.userId?._id}`}>View</Link>,
  ]);

  const thead = [
    "Sno.",
    "Full name",
    "Email Address",
    "Phone Number",
    "Gender",
    "Action",
  ];

  const userList = [...addedUserList, ...assignUserList];

  return (
    <section className="adwizor-panel">
      <CreateStudent show={show} onHide={() => setShow(false)} fetchHandler={fetchHandler} />
      <div className="section-heading">
        <p className="title">Student Profile List</p>
        <button onClick={() => setShow(true)}>Add New Student</button>
      </div>

      <div className="students-table margin-div">
        <div className="overflow-table-order">
          <table>
            <thead>
              <tr>
                {thead?.map((i, index) => (
                  <th key={`thead${index}`}> {i} </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {userList?.map((rowData, rowIndex) => (
                <tr key={`userList${rowIndex}`}>
                  <td> #{rowIndex + 1} </td>
                  {rowData?.map((cellData, cellIndex) => (
                    <td key={`cell${cellIndex}`}>{cellData}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout(AdwizorStudents);
