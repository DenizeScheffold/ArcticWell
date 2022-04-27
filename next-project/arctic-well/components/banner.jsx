import styles from "../styles/Home.module.css";
import React from "react";
import ReactDOM from "react-dom";
import arctic_well_logo from "./public/arctic_well_logo.svg";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="line">
        <div className="BANNER">
          {/* <Image
            alt="icon"
            src={arctic_well_logo.svg}
            placeholder="blur"
            width={700}
            height={475}
            className="arctic_well_logo"
          /> */}

          <div className="weather_subcontainer">
            <span className="Stockholm">Stockholm </span>
            <span className="-C">+31 °C</span>
            <img src="./public/bi_sun.svg" className="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
