/** @format */

import React from "react";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const img =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";

const EventCard = () => {
  return (
    <div className="main">
      <img src={img} alt="" />
      <div className="content">
        <p className="title">US Admission Growth’s</p>
        <p className="faded">
          Lorem ipsum dolor sit amet consectetur. Libero nibh lacus dignissim
          risus eros. Ullamcorper libero leo proin amet lectus ridiculus.
          Commodo tortor mauris commodo bibendum sit diam nulla enim. Sed
          ultricies nulla.
        </p>
        <p className="faded">
          Venue : <br />
          Online ,5:00 PM , March 1, 2024.
        </p>
        <button>Join Session</button>
      </div>
    </div>
  );
};

const UserEvents = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Events</p>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="user-events">
          <EventCard />
          <EventCard />
        </div>
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserEvents);
