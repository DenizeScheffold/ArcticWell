import React from "react";
import styles from "../styles/Location.module.css";
import Image from "next/image";


const Location = () => {
    return (
<a className={styles.location_container}> 
<Image className={styles.centerBtn}
alt="locateBtn"
src="/get_location_vector.svg"
layout="responsive"
width={4}
height={4}
quality={100}
/>
</a>
);
};

export default Location;
