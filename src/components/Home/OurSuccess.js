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
    <div className="our-success">
      <h4 className="normal-heading">Our Success In Numbers</h4>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
        venenatis felis id augue
      </p>
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
  );
};

export default OurSuccess;
