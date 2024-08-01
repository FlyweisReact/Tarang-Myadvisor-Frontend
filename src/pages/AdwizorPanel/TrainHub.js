import React, { useEffect, useState } from "react";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const TrainHub = () => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.adwizor.getTrainHub, {
      setResponse: setData,
    });
  }, []);

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Train Hub</p>
      </div>
      <div className="section-sub-heading">
        <p className="title" style={{ textDecoration: "underline" }}>
          {" "}
          Document Upload Training Materials
        </p>
      </div>

      <div className="grid-container-for-3 margin-div ">
        {data.data.map((i, index) => (
          <div className="train-hub-card boxShadow-container" key={index}>
            <video controls>
              <source src={i?.trainHubVideo} type="video/mp4" />
            </video>
            <div className="content">
              <p className="title"> {i?.title} </p>
              <p className="desc"> {i?.subTitle} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdwizorLayout(TrainHub);
