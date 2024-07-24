/** @format */

import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Cards = (item) => {
  const { img, title, description } = item;
  return (
    <div className="main">
      <img src={img} alt="" />
      <p className="title"> {title} </p>
      <p className="desc">{description}</p>
    </div>
  );
};

const UserHowItWorks = () => {
  const [howItWorks, setHowItWorks] = useState({ data: [] });

  const howItWorksList = howItWorks.data.map((i) => ({
    img: i?.image,
    title: i?.title,
    description: i?.description,
  }));

  useEffect(() => {
    getApi(endPoints.getHowItWorks, {
      setResponse: setHowItWorks,
    });
  }, []);
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>How It Works</p>
      </div>

      <div className="user-how-it-works mb-3 mt-3">
        {howItWorksList.map((i, index) => (
          <Cards {...i} key={index} />
        ))}
      </div>
    </section>
  );
};

export default DashboardLayout(UserHowItWorks);
