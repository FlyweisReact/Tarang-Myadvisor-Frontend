/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";

const ShortlistedCollege = () => {
  const navigate = useNavigate();
  return (
    <section className="shortlisted-college-page">
      <h4 className="heading">Your Shortlisted Colleges (Count: 01)</h4>
      <div className="cart margin-div">
        <div className="left">
          <table>
            <thead>
              <tr>
                <th>College Name</th>
                <th>Courses</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="desc">
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputat
                  </span>
                </td>
                <td>
                  <select>
                    <option>Select Course</option>
                  </select>
                </td>
                <td>
                  <span className="amount">
                    ₹5,000
                    <i className="fa-solid fa-trash-can" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="coupon-div margin-div">
            <div className="main">
              <button onClick={() => navigate("/college/homepage")}>
                More Colleges
              </button>
              <input type="text" placeholder="Enter Coupon Code" />
            </div>
            <button
              className="proceed-btn"
              onClick={() => navigate("/payment-page")}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
        <div className="right">
          <div className="payment-summary boxShadow-container">
            <h6 className="heading">Payment Summary</h6>
            <hr />
            <div className="checkbox-container">
              <input type="checkbox" />
              <p>Forem ipsum dolor sit amet, consectetur </p>
              <p>₹500</p>
            </div>
            <hr />
            <div className="payment-detail">
              <p className="heading">Payment Detail</p>
              <div className="price-item">
                <p className="text">Sub Total</p>
                <p className="price">₹1000.00</p>
              </div>
              <div className="price-item">
                <p className="text">Discount</p>
                <p className="price">₹0.00</p>
              </div>
              <div className="price-item">
                <p className="text">Total Amount</p>
                <p className="price">₹1000.00</p>
              </div>
            </div>

            <hr />
            <div className="payment-detail">
              <p className="heading">Your Details</p>
            </div>

            <p className="details">Lorem Ipsum</p>
            <p className="details">Lorem Ipsum</p>
            <hr />
            <div className="checkbox-container">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputat{" "}
              </p>
            </div>
            <button
              className="pay-btn"
              onClick={() => navigate("/payment-page")}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrappedComponent({ WrappedComponent: ShortlistedCollege });
