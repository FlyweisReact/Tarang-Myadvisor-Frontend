/** @format */

import React, { useEffect, useState } from "react";
import {
  AdwizorCards,
  AdwizorGridLayoutCard,
  AppointmentFloatingBtn,
  LoaderComponent,
} from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const UserAdwizors = () => {
  const [myAdwizors, setMyAdwizors] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getApi(endPoints.userAdwizors, {
      setResponse: setMyAdwizors,
      setLoading: setIsLoading,
    });
  }, []);

  // assign adwizors list
  const myAdwizorsList = myAdwizors.data.map((i) => ({
    img: i?.advisorId?.image,
    title: i?.advisorId?.fullname,
    rating: i?.advisorId?.averageRating,
    id: i?.advisorId?._id,
    description: [
      i?.advisorId?.experiance,
      i?.advisorId?.state,
      i?.advisorId?.helpedStudent,
    ],
  }));

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
        {isLoading && <LoaderComponent />}
        <div className="verfied-adwizor margin-div">
          {myAdwizorsList.map((i, index) => (
            <AdwizorGridLayoutCard
              key={`verified${index}`}
              data={i}
              showBtns={false}
            />
          ))}
        </div>
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserAdwizors);
