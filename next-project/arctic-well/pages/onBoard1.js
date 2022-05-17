import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";

export default function onBoard() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div className={styles.onboarding_container}>
      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="boxPicture"
            layout="fixed"
            src="/onboarding_bg_1.png"
            width={376}
            height={736}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={styles.flexbox_container}>
        <div className={styles.button}>
          <Image
            alt="Rectangel"
            layout="fill"
            src="/Rectangle_blue.png"
            height={48}
            width={272}
            quality={100}
          />
          <a className={styles.buttonText} href="./onBoard2">
            Next
          </a>
        </div>
        <div className={styles.text1}>
          <h1>Cooling, evolved</h1>
        </div>
        <div className={styles.text2}>
          <p>
            Say hello to the fastest and easiest way to reach a comfortable body
            temperature. The experince will leave you feeling fresh and ready
            for your next adventure.
          </p>
        </div>
        <div className={styles.textskip}>
          <a href="./map">skip</a>
        </div>
      </div>
    </div>
  );
}
