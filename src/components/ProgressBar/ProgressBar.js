/** @format */

import React from "react";

const ProgressBar = ({ width }) => {
  return (
    <div className="custom-progress-bar">
      <div className="progress" style={{ width }}></div>
    </div>
  );
};

export default ProgressBar;
