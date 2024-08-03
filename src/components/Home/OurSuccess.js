/** @format */

import React, { useState, useEffect } from "react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const OurSuccess = () => {
  const [count, setCount] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.user.ourSuccessCount, {
      setResponse: setCount,
    });
  }, []);

  const countList = count.data.map((i) => ({
    title: i?.number,
    acheivement: i?.title,
    colorCode: i?.name,
  }));

  return (
    countList?.length > 0 && (
      <div className="our-success">
        <h4 className="normal-heading">Our Success In Numbers</h4>
        
        <div className="cards">
          {countList.map((i, index) => (
            <div className="item" key={`success${index}`}>
              <p className="title">{i.title} </p>
              <p className="acheivment" style={{ color: i.colorCode }}>
                {i.acheivement}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default OurSuccess;
