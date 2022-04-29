import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>
        <img
          src="/arctic_well_logo.svg"
          alt="logo"
          className={styles.arctic_well_logo}
        />
      </div>
      <div className={styles.weather_subcontainer}>
        <span className={styles.Stockholm}>Stockholm </span>
        <span className={styles.C}>+31 °C</span>
        <img src="/bi_sun.svg" alt="sunny" className={styles.Vector}/>
      </div>
    </div>
  );
};

export default Banner;
