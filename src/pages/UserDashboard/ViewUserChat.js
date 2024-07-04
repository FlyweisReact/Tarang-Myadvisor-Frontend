/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { callImg, chatAvatar5 } from "../../assest";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const ViewUserChat = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const messagesData = [
    { id: 1, text: "omg, this is amazing", sender: "other" },
    { id: 2, text: "perfect! ✅", sender: "other" },
    { id: 3, text: "Wow, this is really epic", sender: "other" },
    { id: 4, text: "How are you?", sender: "self" },
    { id: 5, text: "just ideas for next time", sender: "other" },
    { id: 6, text: "I'll be there in 2 mins ⏰", sender: "other" },
    { id: 7, text: "woohoooo", sender: "self" },
    { id: 8, text: "Haha oh man", sender: "self" },
    { id: 9, text: "Haha that's terrifying 😂", sender: "self" },
    { id: 10, text: "aww", sender: "other" },
    { id: 11, text: "omg, this is amazing", sender: "other" },
    { id: 12, text: "woohoooo 🔥", sender: "other" },
  ];
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Chat</p>
        <button className="outlined" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="message-details">
          <div className="head">
            <div className="profile">
              <img src={chatAvatar5} alt="" />
              <div>
                <p> {id} </p>
                <span>
                  <i
                    className="fa-solid fa-circle "
                    style={{ color: "#68D391", marginRight: "5px" }}
                  ></i>
                  Online
                </span>
              </div>
            </div>

            <button className="call-btn">
              <img src={callImg} alt="" />
              <span>Call</span>
            </button>
          </div>
          <hr className="devider" />
          <div className="message-list">
            {messagesData.map((message, index) => (
              <div
                className={`messages ${message.sender === "self" ? "end" : ""}`}
                key={index}
              >
                {message.sender === "other" && (
                  <img src={chatAvatar5} alt="avatar" />
                )}
                <div className="content">
                  <p className="text">{message.text}</p>
                </div>
                {message.sender === "self" && (
                  <img src={chatAvatar5} alt="avatar" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout(ViewUserChat);
