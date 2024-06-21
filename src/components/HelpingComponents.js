/** @format */

import { Dropdown } from "antd";

export const CustomeDropdown = ({
  items,
  title,
  caretIcon,
  titleIcon,
  className,
}) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button className={`${className}`}>
        <span>
          {titleIcon}
          {title}
        </span>
        {caretIcon && <i className="fa-solid fa-caret-down"></i>}
      </button>
    </Dropdown>
  );
};

export const AdwizorCards = ({ topAdwizor, topAdwizorData, allAdwizors }) => {
  if (topAdwizor) {
    return (
      <div className="top-adwizors">
        <h4 className="normal-heading">Find Top Adwizors</h4>
        <div className="cards">
          {topAdwizorData.map((i, index) => (
            <div className="item" key={`topadwizor${index}`}>
              <div className="detail">
                <img src={i.img} alt="" className="mainImg" />
                <div className="content">
                  <p className="title">{i.name} </p>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <p> {i.rating} </p>
                  </div>
                  {i.description.map((item, index) => (
                    <p className="faded" key={`desc${index}`}>
                      {" "}
                      {item}{" "}
                    </p>
                  ))}
                </div>
              </div>
              <div className="btn-container">
                <button>Book Appointment</button>
                <button>View Profile</button>
              </div>
            </div>
          ))}
        </div>

        <button className="all">See All</button>
      </div>
    );
  } else {
    return (
      <div className="verfied-adwizor margin-div">
        {allAdwizors.map((i, index) => (
          <div className="main" key={`allAdwizor${index}`}>
            <img src={i.img} alt=" " />
            <div className="content">
              <p className="title"> {i.title} </p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <p> {i.rating} </p>
              </div>
              {i.description.map((item, index) => (
                <p className="faded" key={`desc${index}`}>
                  {item}
                </p>
              ))}
              <div className="btn-container">
                <button className="outlined">Chat</button>
                <button>Call</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
