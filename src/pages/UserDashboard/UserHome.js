/** @format */
import { useState, useEffect } from "react";
import { topAdwizorsConfig } from "../../components/Sliders/SwiperConfig";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { Slider } from "../../components/Sliders/Sliders";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { RenderAdwizorCards } from "../../components/Sliders/SwiperComponents";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const UserHome = () => {
  const [adwizors, setAdwizors] = useState({});

  useEffect(() => {
    getApi(endPoints.getVerifiedAdwizors, {
      setResponse: setAdwizors,
    });
  }, []);

  const adwizorsData =
    adwizors?.data?.length > 0
      ? adwizors?.data?.map((i) => ({
          img: i?.image,
          title: i?.fullname,
          rating: i?.averageRating,
          description: [i?.experiance, i?.state, i?.helpedStudent],
          id : i._id
        }))
      : [];

  return (
    <section className="user-homePage margin-div with-bg-img">
      <div className="adwizors-swiper">
        <h4 className="heading">Find Top Adwizors</h4>
        <div className="adwizor-slider">
          <Slider
            data={adwizorsData}
            swiperConfig={topAdwizorsConfig}
            RenderSlide={RenderAdwizorCards}
          />
        </div>
      </div>
{/* 
      <div className="user-content-box">
        <div className="item">
          <p>My Favourites</p>
          <textarea />
        </div>
        <div className="item">
          <p>Loremipsum</p>
          <textarea />
        </div>
        <div className="item">
          <p>Loremipsum</p>
          <textarea />
        </div>
      </div> */}

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserHome);
