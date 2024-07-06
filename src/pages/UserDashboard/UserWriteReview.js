/** @format */

import React from "react";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const UserWriteReview = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Write a Review</p>
      </div>

      <div className="boxShadow-container write-a-review mt-5 mb-5">
        <form>
          <div className="main">
            <label>Choose Adwizor</label>
            <select>
              <option>Select Adwizor</option>
              <option></option>
            </select>
          </div>
          <div className="main">
            <label>Select Rating</label>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="main">
            <label>Add Description</label>
            <textarea value="Lorem ipsum dolor sit amet consectetur. Eu hendrerit facilisis amet nunc urna a elit in nibh. Tincidunt sollicitudin erat elementum at feugiat dolor egestas. Ut ullamcorper curabitur a congue. Gravida dignissim nec duis eget vulputate facilisi. Arcu elit eget interdum tristique." />
          </div>
          <button>Submit</button>
        </form>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserWriteReview);
