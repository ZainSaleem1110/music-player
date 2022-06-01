import React from "react";
import "./Landing-Header.css";
import logo from "../../assets/logo.jpeg";
function LandingHeader() {
  return (
    <div className="land-header w-[90%]">
      <img src={logo} classNae="w-[50px]" alt="" className="logo" />
      <div className="btn-div">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
}

export default LandingHeader;
