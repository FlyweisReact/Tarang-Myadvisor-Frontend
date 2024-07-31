/** @format */

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const MessageBox = ({ item }) => {
  return (
    <div className={`item ${item.sendBy === "user" ? "active" : ""}`}>
      <img src={item.userId?.image} alt="" className="user-avatar" />
      <div className="content">
        <p className="title"> {item.userId?.fullname} </p>
        <p className="title"> {item.subject} </p>
        <p className="desc">{item.message}</p>
        <p className="desc"> {item.createdAt?.slice(0, 10)} </p>
      </div>
    </div>
  );
};

const AdwizorMessages = () => {
  const [tab, setTab] = useState("create");
  const [users, setUsers] = useState({
    data: {
      AddedUser: [],
      assign: [],
    },
  });
  const [userId, setUserId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState({ data: [] });
  const [subjects, setSubjects] = useState({ data: [] });

  const fetchData = () => {
    getApi(endPoints.adwizor.myMessage, {
      setResponse: setHistory,
    });
  };

  useEffect(() => {
    getApi(endPoints.adwizor.assignedStudents, {
      setResponse: setUsers,
    });
    fetchData();
    getApi(endPoints.user.getMsgSubject, {
      setResponse: setSubjects,
    });
  }, []);

  const payload = {
    userId,
    subject,
    message,
    desc: "desc",
    sendBy: "adwizor",
  };

  //send message
  const submitHandler = (e) => {
    e.preventDefault();

    postApi(endPoints.adwizor.sendMessage, payload, {
      successMsg: "Success !",
      setLoading,
      additionalFunctions: [fetchData],
    });
  };

  return (
    <section className="adwizor-panel">
      <section className="user-homePage">
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
                  <select required onChange={(e) => setUserId(e.target.value)}>
                    <option value="">Select User</option>

                    {users.data.assign.map((i, index) => (
                      <option key={`assign${index}`} value={i?.userId?._id}>
                        {" "}
                        {i?.userId?.fullname}{" "}
                      </option>
                    ))}
                    {users.data.AddedUser.map((i, index) => (
                      <option key={`AddedUser${index}`} value={i?._id}>
                        {" "}
                        {i?.fullname}{" "}
                      </option>
                    ))}
                  </select>
                  <select required onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Select Subject</option>
                    {subjects.data.map((i) => (
                      <option value={i?._id} key={i?._id}>
                        {" "}
                        {i?.subject}{" "}
                      </option>
                    ))}
                  </select>
                  <textarea
                  placeholder="Description"
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  value={message}
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
              {history.data
                ?.slice()
                ?.reverse()
                ?.map((i, index) => (
                  <MessageBox item={i} key={index} />
                ))}
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default AdwizorLayout(AdwizorMessages);
