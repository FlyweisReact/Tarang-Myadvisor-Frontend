/** @format */

import React, { useState } from "react";

const OtpInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }

    onChange(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    const { keyCode, target } = e;

    // Handle backspace key
    if (keyCode === 8 && !target.value && index !== 0) {
      target.previousSibling.focus();
    }

    // Handle left arrow key
    if (keyCode === 37 && index !== 0) {
      target.previousSibling.focus();
    }

    // Handle right arrow key
    if (keyCode === 39 && index !== length - 1) {
      target.nextSibling.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="otp-input"
    >
      {otp.map((data, index) => (
        <input
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={data}
          required
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
