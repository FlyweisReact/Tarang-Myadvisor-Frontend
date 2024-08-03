/** @format */

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { SlotUpdater } from "../../components/Modals/Modals";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

function getSlot(myOne) {
  const getTime = new Date(myOne)?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
  return getTime;
}

const AdwizorCalender = () => {
  const [generatedDates, setGeneratedDates] = useState([]);
  const [lastGeneratedDate, setLastGeneratedDate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkDate, setCheckDate] = useState(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow?.setDate(today?.getDate() + 1);
  const formattedToday = tomorrow.toISOString().split("T")[0];
  const [selectedDate, setDate] = useState(formattedToday);
  const [slots, setSlots] = useState({ data: [] });
  const [selectedSlot, setSelectedSlot] = useState({});
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);

  function generateDates(startDate, numberOfDays) {
    const dates = [...generatedDates];
    let lastDate = lastGeneratedDate || startDate;

    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(lastDate);
      date.setDate(lastDate.getDate() + 1);
      dates.push(date);
      lastDate = date;
    }

    setLastGeneratedDate(lastDate);
    setGeneratedDates(dates);
  }

  const handleGenerateDates = () => {
    const oneDayBeforeToday = new Date();
    oneDayBeforeToday.setDate(oneDayBeforeToday.getDate());
    generateDates(oneDayBeforeToday, 14);
  };

  useEffect(() => {
    handleGenerateDates();
  }, []);

  const formatDate = (date) => {
    const day = date?.toLocaleDateString("en-US", {
      day: "numeric",
    });
    const weekDay = date?.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const month = date?.toLocaleDateString("en-US", {
      month: "long",
    });

    const year = date?.toLocaleDateString("en-US", {
      year: "numeric",
    });

    const formattedToday = date.toISOString().split("T")[0];

    return (
      <div
        className={`live-session-date-selector-Item ${
          selectedDate === formattedToday ? "active" : ""
        } `}
        onClick={() => {
          setDate(formattedToday);
          setCheckDate(date);
        }}
      >
        <p> {weekDay?.slice(0, 3)} </p>
        <p> {day} </p>
        <p>
          {" "}
          {month?.slice(0, 3)} , {year}{" "}
        </p>
      </div>
    );
  };

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    swipeToSlide: false,
    swipe: false,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const nextSlide = () => {
    handleGenerateDates();
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    if (checkDate && generatedDates) {
      const finalDate = generatedDates?.slice(-1)?.[0];
      if (checkDate === finalDate) {
        handleGenerateDates();
      }
    }
  }, [checkDate, generatedDates]);

  useEffect(() => {
    getApi(endPoints.getAdwizorProfile, {
      setResponse: setProfile,
    });
  }, []);

  const payload = {
    dates: [selectedDate],
    advisorId: profile?.data?._id,
  };

  const getAllSlots = () => {
    postApi(endPoints.adwizor.getSlot, payload, {
      setResponse: setSlots,
    });
  };

  useEffect(() => {
    if (selectedDate && profile?.data?._id) {
      getAllSlots();
    }
  }, [selectedDate, profile]);

  return (
    <>
      <SlotUpdater
        show={show}
        onHide={() => setShow(false)}
        data={selectedSlot}
        fetchData={getAllSlots}
      />
      <section className="adwizor-panel">
        <div className="section-heading">
          <p className="title">My Calendar</p>
        </div>
      </section>
      <section className="choose-destination-page">
        <Slider {...settings} ref={sliderRef} style={{ overflow: "hidden" }}>
          {generatedDates?.map((date, i) => (
            <div className="live-session-date-selector" key={`dates${i}`}>
              {formatDate(date)}
            </div>
          ))}
        </Slider>
        <div className="live-session-date-selector-buttons_container">
          <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </div>

        <div className="live-session-select-timing">
          <div className="grid-container">
            {slots.data.map((i, index) => (
              <div
                className={`item ${i === selectedSlot ? "active" : ""}`}
                key={`Time${index}`}
                onClick={() => {
                  setSelectedSlot(i);
                  setShow(true);
                }}
              >
                <p className="time"> {getSlot(i?.slot)} </p>
                <p className={`status ${!i.isAvailable ? "red" : ""} `}>
                  {i.isAvailable ? "Available" : "Not Available"}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout(AdwizorCalender);
