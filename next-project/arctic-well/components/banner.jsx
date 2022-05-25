import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>
        <img
          src="/arctic_well_logo_new.svg"
          alt="logo"
          className={styles.arctic_well_logo}
          width={93}
          height={32}
          quality={100}
        />
      </div>
      <div className={styles.weather_subcontainer}>
        <span className={styles.Stockholm}>Stockholm </span>
        <span className={styles.celsius}>+12 °C</span>
        <img
          src="/bi_sun_new.svg"
          alt="sunny"
          className={styles.vector}
          width={12}
          height={12}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Banner;
