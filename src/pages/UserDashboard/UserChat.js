/** @format */

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const MessageBox = ({ item }) => {
  return (
    <div className={`item ${item.sendBy === "adwizor" ? "active" : ""}`}>
      <img src={item.advisorId?.image} alt="" className="user-avatar" />
      <div className="content">
        <p className="title"> {item.advisorId?.fullname} </p>
        <p className="title"> {item.subject} </p>
        <p className="desc">{item.message}</p>
        <p className="desc"> {item.createdAt?.slice(0, 10)} </p>
      </div>
    </div>
  );
};

const UserChat = () => {
  const [tab, setTab] = useState("create");
  const [messages, setMessages] = useState({ data: [] });
  const [advisorId, setAdwizorId] = useState("");
  const [adwizors, setAdwizors] = useState({ data: [] });
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchData = () => {
    getApi(endPoints.user.getUserMessages, {
      setResponse: setMessages,
    });
  };

  const payload = {
    advisorId,
    subject,
    message,
    desc: "desc",
    sendBy: "user",
  };

  useEffect(() => {
    fetchData();
    getApi(endPoints.userAdwizors, {
      setResponse: setAdwizors,
    });
  }, []);

  //send message
  const submitHandler = (e) => {
    e.preventDefault();

    postApi(endPoints.user.sendMessage, payload, {
      successMsg: "Success !",
      setLoading,
      additionalFunctions: [fetchData],
    });
  };

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="user-dashboard-profile">
        <div className="tab">
          <ul>
            <li
              onClick={() => setTab("create")}
              className={`${tab === "create" ? "active" : ""}`}
            >
              New Message
            </li>
            <li
              onClick={() => setTab("history")}
              className={`${tab === "history" ? "active" : ""}`}
            >
              Application History
            </li>
          </ul>
        </div>
      </div>

      {tab === "create" && (
        <div className="application-status mt-3 mb-3">
          <div className="refer-earn">
            <div className="detail-form">
              <form onSubmit={submitHandler}>
                <select required onChange={(e) => setAdwizorId(e.target.value)}>
                  <option value="">Select Adwizor</option>
                  {adwizors.data.map((i) => (
                    <option value={i?.advisorId?._id} key={i?.advisorId?._id}>
                      {" "}
                      {i?.advisorId?.fullname}{" "}
                    </option>
                  ))}
                </select>
                <input
                  type={"text"}
                  placeholder="Subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <input
                  type={"text"}
                  placeholder="Description"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="submit-btn" type="submit">
                  {loading ? <ClipLoader color="#fff" /> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {tab === "history" && (
        <div className="application-status mt-3 mb-3">
          <div className="message-box">
            {messages.data
              ?.slice()
              ?.reverse()
              .map((i, index) => (
                <MessageBox item={i} key={index} />
              ))}
          </div>
        </div>
      )}

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserChat);
