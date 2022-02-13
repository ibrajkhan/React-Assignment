import React from "react";
import "../css/Header.css";

const Header = ({ Data }) => {
  return (
    <div className="heading">
      <strong>{Data.name}</strong>
      <p>{Data.employe_id}</p>
      <button>Print</button>
    </div>
  );
};

export default Header;
