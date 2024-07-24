/** @format */

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { postApi, getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const UserWriteReview = () => {
  const [allAdwizors, setAllAdwizors] = useState({ data: [] });
  const [advisorId, setAdwizorsId] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    advisorId,
    rating,
    description,
  };

  useEffect(() => {
    getApi(endPoints.searchAdwizor("" , 1 ,100), {
      setResponse: setAllAdwizors,
    });
  }, []);

  const submitReview = (e) => {
    e.preventDefault();
    postApi(endPoints.giveReview, payload, {
      successMsg: "Review Submitted",
      setLoading,
    });
  };

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Write a Review</p>
      </div>

      <div className="boxShadow-container write-a-review mt-5 mb-5">
        <form onSubmit={submitReview}>
          <div className="main">
            <label>Choose Adwizor</label>
            <select
              onChange={(e) => setAdwizorsId(e.target.value)}
              value={advisorId}
            >
              <option>Select Adwizor</option>
              {allAdwizors.data.map((i, index) => (
                <option key={`verifiedAdwizor${index}`} value={i._id}>
                  {" "}
                  {i.fullname}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="main">
            <label>Select Rating</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <i
                  key={value}
                  className={`fa-solid fa-star ${
                    rating >= value ? "selected" : ""
                  }`}
                  onClick={() => setRating(value)}
                ></i>
              ))}
            </div>
          </div>
          <div className="main">
            <label>Add Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </form>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserWriteReview);
