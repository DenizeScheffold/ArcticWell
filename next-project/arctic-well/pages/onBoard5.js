import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";

export default function onBoard() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div>
      <div>
        <Image
          alt="card"
          layout="responsive"
          src="/reyn.png"
          width={377}
          height={706}
          quality={100}
        />
      </div>

      <div className={styles.button2}>
        <Image
          className={styles.rectangle_blue}
          alt="Rectangel"
          layout="responsive"
          src="/Rectangle_blue.png"
          height={20}
          width={140}
          quality={100}
        />
        <a className={styles.buttonText2} href="./map">
          Next
        </a>
      </div>

      <div className={styles.textReady}>
        <h1>Are you ready?</h1>
      </div>
    </div>
  );
}
