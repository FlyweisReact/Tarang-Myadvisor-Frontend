/** @format */

import React from "react";
import {
  AdwizorCards,
  AppointmentFloatingBtn,
} from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { allAdwiozordsArr } from "../../constant/constant";

const UserAdwizors = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="user-dashboard-profile">
        <div className="tab">
          <ul>
            <li className="active">Adwizor Assigned</li>
          </ul>
        </div>
      </div>
      <div className="univeristy-tab margin-div">
        <AdwizorCards
          allAdwizors={allAdwiozordsArr?.slice(0, 1)}
          topAdwizor={false}
        />
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserAdwizors);
