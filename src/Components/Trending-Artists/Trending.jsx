import React from "react";
import "./Trending.css";
import trending from "../../assets/landing-page/trending.png";
function Trending() {
  return (
    <div className="trending-box flex">
      <img src={trending} alt="" className="trending-artist-img" />
      <p className="artist-name">Newyauk</p>
    </div>
  );
}

export default Trending;
