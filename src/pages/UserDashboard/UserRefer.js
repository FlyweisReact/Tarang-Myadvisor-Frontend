/** @format */

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { referImg } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const UserRefer = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    fullname,
    email,
    phone,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.user.referUser, payload, {
      successMsg: "Submitted !",
      setLoading,
    });
  };

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Refer & Earn</p>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="refer-earn">
          <img src={referImg} alt="" className="refer-img" />
          <div className="detail-form">
            <form onSubmit={submitHandler}>
              <p className="heading">Enter Details</p>
              <input
                type={"text"}
                placeholder="Name"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type={"email"}
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type={"tel"}
                placeholder="Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <button className="submit-btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserRefer);
