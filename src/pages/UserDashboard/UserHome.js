/** @format */

import React from "react";
import {
  adwizorImg1,
  adwizorImg2,
  adwizorImg3,
  adwizorImg4,
  adwizorImg5,
  adwizorImg6,
} from "../../assest";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

// const topAdvizors = [
//   {
//     img: adwizorImg1,
//     name: "Subash Mishra",
//     rating: "9.5/10",
//     description: [
//       "3+ Years (Management).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
//   {
//     img: adwizorImg2,
//     name: "Manisha Roy",
//     rating: "9.5/10",
//     description: [
//       "5+ Years (Civils).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
//   {
//     img: adwizorImg3,
//     name: "Nisha Agarwal",
//     rating: "9.5/10",
//     description: [
//       "3+ Years (Management).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
//   {
//     img: adwizorImg4,
//     name: "Subash Mishra",
//     rating: "9.5/10",
//     description: [
//       "3+ Years (Management).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
//   {
//     img: adwizorImg5,
//     name: "Manisha Roy",
//     rating: "9.5/10",
//     description: [
//       "3+ Years (Management).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
//   {
//     img: adwizorImg6,
//     name: "Nisha Agarwal",
//     rating: "9.5/10",
//     description: [
//       "3+ Years (Management).",
//       "Gujrat , India.",
//       "2K+ Students , Helped",
//     ],
//   },
// ];

// const renderAdwizorCards = (item) => {
//   return (
//     <div className="card">
//       <div className="detail">
//         <img src={item.img} alt="" className="mainImg" />
//         <div className="content">
//           <p className="title"> {item.name} </p>
//           <div className="rating">
//             <i className="fa-solid fa-star"></i>
//             <p>{item.rating} </p>
//           </div>
//           {item.description.map((i, index) => (
//             <p className="faded" key={`desc${index}`}>
//               {" "}
//               {i}{" "}
//             </p>
//           ))}
//         </div>
//       </div>
//       <div className="btn-container">
//         <button>Book Appointment</button>
//         <button>View Profile</button>
//       </div>
//     </div>
//   );
// };

// const topAdvizorsConfig = {
//   spaceBetween: 20,
//   loop: true,
//   slidesPerView: 1,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
//   speed: 4000,
//   resistance: false,
//   resistanceRatio: 0,
//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//     },
//     900: {
//       slidesPerView: 3.5,
//     },
//     1024: {
//       slidesPerView: 3.5,
//     },
//   },
// };

const UserHome = () => {
  return (
    <section className="user-dashboard">
      <section className="adwizors-swiper">
        <h4 className="heading">Find Top Adwizors</h4>
        {/* <div className="slider-container">
          <Slider
            data={topAdvizors}
            swiperConfig={topAdvizorsConfig}
            renderSlide={renderAdwizorCards}
          />
        </div> */}
      </section>
    </section>
  );
};

export default DashboardLayout(UserHome);
