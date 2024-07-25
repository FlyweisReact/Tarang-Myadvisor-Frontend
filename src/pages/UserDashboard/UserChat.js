/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const MessageBox = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => navigate(`/user-dashboard/my-messages/${item.title}`)}
    >
      <img src={item.img} alt="" className="user-avatar" />
      <div className="content">
        <p className="title"> {item.title} </p>
        <p className="title"> {item.subject} </p>
        <p className="desc">{item.desc}</p>
        <p className="desc"> {item.date} </p>
      </div>
    </div>
  );
};

const UserChat = () => {
  const [messages, setMessages] = useState({ data: [] });

  const messageList = messages.data.map((i) => ({
    img: i?.advisorId?.image,
    title: i?.advisorId?.fullname,
    desc: i?.message,
    date: i?.createdAt?.slice(0, 10),
    subject: i?.subject,
  }));

  useEffect(() => {
    getApi(endPoints.user.getUserMessages, {
      setResponse: setMessages,
    });
  }, []);

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>My Messages</p>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="message-box">
          {messageList.map((i, index) => (
            <MessageBox item={i} key={index} />
          ))}
        </div>
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserChat);
