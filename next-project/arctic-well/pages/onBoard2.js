import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function onBoard() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div>
      <div className={styles.backgoundOnBord1}>
        <Image
          alt="boxPicture"
          layout="responsive"
          src="/map_hand.png"
          width={377}
          height={706}
          quality={100}
        />
      </div>

      <div className={styles.button2}>
        <Image
          className={styles.rectangel2}
          alt="Rectangel"
          layout="responsive"
          src="/Rectangle_blue.png"
          height={20}
          width={140}
          quality={100}
        />
        <a className={styles.buttonText2} href="./onBoard3">
          Next
        </a>
      </div>

      <div className={styles.textMap}>
        <h1>Map</h1>
      </div>

      <div className={styles.textMap2}>
        <p>
          On the mapview you can find all our boxes and your nearest Arctic Box
        </p>
      </div>

      <div className={styles.textskip}>
        <a href="./map">skip</a>
      </div>
    </div>
  );
}
