/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import TableLayout from "../../components/TableLayout";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AdwizorLiveRoom = () => {
  const [data, setData] = useState({ data: [] });
  const [profile, setProfile] = useState({ data: {} });
  const [loading, setLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);
  const [joinedUser, setJoinedUser] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.getAdwizorProfile, {
      setResponse: setProfile,
    });
  }, []);

  const fetchHandler = useCallback(() => {
    getApi(
      endPoints.adwizor.getRequestMeetingUser(
        profile?.data?.currentMeetingRoom
      ),
      {
        setResponse: setData,
      }
    );
  }, [profile]);

  const fetchJoinedUsers = useCallback(() => {
    getApi(endPoints.adwizor.joinedUser(profile?.data?.currentMeetingRoom), {
      setResponse: setJoinedUser,
    });
  }, [profile]);

  useEffect(() => {
    if (profile?.data?.currentMeetingRoom) {
      fetchHandler();
      fetchJoinedUsers();
    }
  }, [fetchHandler, profile, fetchJoinedUsers]);

  const studentList = data.data.map((i, index) => [
    `#${index + 1}`,
    i?.fullname,
    i?.email,
    i.phone,
    i.gender,
    <Link to={`/adwizor-panel/students/${i?.userId?._id}`}>View</Link>,
    <button onClick={() => acceptRequest(i._id)} className="accept-request">
      {loading ? <ClipLoader color="#fff" /> : "Accept"}
    </button>,
    <button onClick={() => rejectRequest(i._id)} className="reject-request">
      {rejectLoading ? <ClipLoader color="#fff" /> : "Reject"}
    </button>,
  ]);

  const acceptRequest = (id) => {
    putApi(
      endPoints.adwizor.acceptMeetingRequest(id),
      {},
      {
        successMsg: "Accepted !",
        setLoading,
        additionalFunctions: [fetchHandler],
      }
    );
  };
  const rejectRequest = (id) => {
    putApi(
      endPoints.adwizor.rejectMeetingRequest(id),
      {},
      {
        successMsg: "Rejected !",
        setLoading: setRejectLoading,
        additionalFunctions: [fetchHandler],
      }
    );
  };

  const joinedUserList = joinedUser.data.map((i, index) => [
    `#${index + 1}`,
    i?.fullname,
    i?.email,
    i.phone,
    i.gender,
    <Link to={`/adwizor-panel/students/${i?.userId?._id}`}>View</Link>,
  ]);

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Live Meeting Room</p>
      </div>

      <div className="section-sub-heading mt-3">
        <p className="title">
          User requests to join meeting ({studentList?.length}){" "}
        </p>
      </div>
      {studentList?.length > 0 && (
        <div className="students-table margin-div">
          <TableLayout
            thead={[
              "Sno.",
              "Full name",
              "Email Address",
              "Phone Number",
              "Gender",
              "Action",
              "",
              "",
            ]}
            tbody={studentList}
          />
        </div>
      )}

      <div className="section-sub-heading mt-3">
        <p className="title">Joined User's ({joinedUserList?.length}) </p>
      </div>
      {joinedUserList?.length > 0 && (
        <div className="students-table margin-div">
          <TableLayout
            thead={[
              "Sno.",
              "Full name",
              "Email Address",
              "Phone Number",
              "Gender",
              "Action",
            ]}
            tbody={joinedUserList}
          />
        </div>
      )}
    </section>
  );
};

export default AdwizorLayout(AdwizorLiveRoom);
