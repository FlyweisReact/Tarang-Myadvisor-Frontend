/** @format */

import React from "react";
import { referImg } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const UserRefer = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Refer & Earn</p>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="refer-earn">
          <img src={referImg} alt="" className="refer-img" />
          <div className="detail-form">
            <form>
              <p className="heading">Enter Details</p>
              <input type={"text"} placeholder="Name" />
              <input type={"email"} placeholder="Email" />
              <input type={"tel"} placeholder="Phone*" />
              <button className="submit-btn">Continue</button>
            </form>
          </div>
        </div>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserRefer);
