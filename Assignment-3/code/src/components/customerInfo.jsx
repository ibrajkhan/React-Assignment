import React from "react";
import "../css/CustomerInfo.css";
const CustomerInfo = ({ Data }) => {
  return (
    <div className="customer-info">
      <p>
        <strong>Appointment On: </strong>
        {Data.Appointment_time} ({Data.Appointment_Date})
      </p>
      <p>
        <strong>Email:</strong> <span>{Data.e_mail}</span>
      </p>
      <p>
        <strong>Phone:</strong> <span>{Data.phone}</span>
      </p>
    </div>
  );
};

export default CustomerInfo;
