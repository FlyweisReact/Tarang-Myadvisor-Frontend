/** @format */

import React from "react";
import TableLayout from "../../components/TableLayout";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
const tableBody = [
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>Harvard University , Cambridge , USA</span>,
    <button className="status-pending">
      7 days left <br /> 13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Ucla University , Cambridge , <br />
      USA
    </span>,
    <button className="status-orange">
      2 weeks left <br />
      13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Stanford University , Cambridge , <br />
      USA
    </span>,
    <button className="status-orange">
      2 weeks left <br />
      13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Pride University , Cambridge , <br />
      USA
    </span>,
    <button className="status-success">
      3 months <br />
      13-07-2024
    </button>,
  ],
];
const AdwizorTasks = () => {
  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">My Task</p>
      </div>
      <div className="task-table boxShadow-container mt-3">
        <p className="sub-title">Showing : 06 / 120 Tasks</p>
        <TableLayout
          thead={[
            "Task Title",
            "Application ID",
            "School / University",
            "Due Date",
          ]}
          tbody={tableBody}
        />
        <button className="show-all"> Show all applications</button>
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorTasks);
