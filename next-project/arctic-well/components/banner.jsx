import styles from "../styles/Home.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="BANNER">
        <img
          src="/arctic_well_logo.svg"
          alt="logo"
          className="arctic_well_logo"
        />
      </div>
      <div className="weather_subcontainer">
        <span className="Stockholm">Stockholm </span>
        <span className="-C">+31 °C</span>
        <img src="/bi_sun.svg" alt="sunny" className="Vector"/>
      </div>
    </div>
  );
};

export default Banner;
