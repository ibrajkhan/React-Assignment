import React from "react";
import "../css/OrderInfo.css";
const OrderInfo = ({ Data }) => {
  return (
    <div className="order-info">
      <div>
        <strong>Status</strong>
        <div className="radio">
          <input type="radio" />
          <label>{Data.status}</label>
        </div>
      </div>
      <div className="margin-div">
        <strong>Door</strong>
        <p>Mark</p>
      </div>
      <div className="margin-div">
        <strong>Time</strong>
        <p>
          {Data.date} <span>{Data.time}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderInfo;
