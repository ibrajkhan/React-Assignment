import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "../css/card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="cards">
        <div className="name">
          <strong>{item.name}</strong>
          <label className="location"> {item.location}</label>
          <MoreHorizIcon className="dot" fontSize="large" />
        </div>

        <div className="image">
          <img src={item.PostImage} alt="insta_img" />
        </div>
        <div>
          <div className="fontAwesome">
            <FavoriteBorderIcon className="like" fontSize="large" />
            <SendRoundedIcon fontSize="large" />
          </div>
          <p className="text-like">{item.likes}</p>
          <label className="date">{item.date}</label>
        </div>
        <p className="discription">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
