/** @format */

import React, { useState, useEffect } from "react";
import WithLayout from "../Layout/WithLayout";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { AdwizorCards } from "../components/HelpingComponents";

const ConnectAdwizor = () => {
  const [adwizors, setAdwizors] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.user.getLiveAdwizors, {
      setResponse: setAdwizors,
    });
  }, []);

  const adwizorsData = adwizors.data.map((i) => ({
    img: i?.image,
    title: i?.fullname,
    rating: i?.averageRating,
    description: [i?.experiance, i?.state, i?.helpedStudent],
    id: i._id,
  }));

  return (
    <>
      {adwizorsData?.length > 0 ? (
        <AdwizorCards
          allAdwizors={adwizorsData}
          topAdwizor={false}
          isLive={true}
        />
      ) : (
        <div style={{ minHeight: "40vh" }}></div>
      )}
    </>
  );
};

export default WithLayout(ConnectAdwizor);
