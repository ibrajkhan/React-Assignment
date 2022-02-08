import React from "react";
import "../css/ProductList.css";
const ProductList = ({ Data }) => {
  return (
    <div className="product-list">
      <div className="img">
        <input type="checkbox" id="checkbox" />
        <img src={Data.profile_img} alt="profile-img" width="100" />
      </div>

      <div className="name">
        <h3>Mark Waugh</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
      </div>
    </div>
  );
};
export default ProductList;
