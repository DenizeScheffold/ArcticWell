import Image from 'next/image'
import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>
        <img
          src="/arctic_well_logo_new.svg"
          alt="logo"
          className={styles.arctic_well_logo}
          width={122}
          height={64}
          quality={100}
          
          
        
        />
      </div>
      <div className={styles.weather_subcontainer}>
        <span className={styles.Stockholm}>Stockholm </span>
        <span className={styles.C}>+31 °C</span>
        <img 
        src="/bi_sun.svg" 
        alt="sunny" 
        className={styles.vector}
        width={20}
        height={20}
        quality={100}
        
        
      
        
        
        
        />
      </div>
    </div>
  );
};

export default Banner;
