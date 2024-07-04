/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  chatAvatar,
  chatAvatar1,
  chatAvatar2,
  chatAvatar3,
  chatAvatar4,
} from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";

import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

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
        <p className="desc">{item.desc}</p>
        <p className="desc"> {item.date} </p>
      </div>
    </div>
  );
};

const chats = [
  {
    img: chatAvatar,
    title: "Megha Srinivas",
    desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris aliquet.",
    date: "March 1, 2023",
  },
  {
    img: chatAvatar1,
    title: "Marvin McKinney",
    desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris aliquet.",
    date: "February 26, 2023",
  },
  {
    img: chatAvatar2,
    title: "Esther Howard",
    desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris aliquet.",
    date: "April 25, 2022",
  },
  {
    img: chatAvatar3,
    title: "Annette Black",
    desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris aliquet.",
    date: "March 6, 2022",
  },
  {
    img: chatAvatar4,
    title: "Cameron Williamson",
    desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum amet mauris aliquet.",
    date: "March 1, 2023",
  },
];

const UserChat = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>My Messages</p>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="message-box">
          {chats.map((i, index) => (
            <MessageBox item={i} key={index} />
          ))}
        </div>
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserChat);
