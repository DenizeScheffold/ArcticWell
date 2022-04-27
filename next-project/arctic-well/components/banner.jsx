import styles from "../styles/Home.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="line">
        <div className="BANNER">
          <img src="Denize.jpeg" className="arctic_well_logo"/>
          <div className="weather_subcontainer">
            <span className="Stockholm">Stockholm </span>
            <span className="-C">+31 °C</span>
            <div className="Vector"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
