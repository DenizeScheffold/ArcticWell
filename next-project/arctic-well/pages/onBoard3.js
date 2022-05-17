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
            alt="card"
            layout="fixed"
            src="/onboarding_bg_3.png"
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
            alt="Rectangle"
            layout="fill"
            src="/Rectangle_blue.png"
            height={48}
            width={272}
            quality={100}
          />
          <a className={styles.buttonText} href="./onBoard4">
            Next
          </a>
        </div>
        <div className={styles.text1}>
          <h1>Easy Payment</h1>
        </div>
        <div className={styles.text2}>
          <p>
            Scan your card at the box to start your experience. Simple as that!
          </p>
        </div>
        <div className={styles.textskip}>
          <a href="./map">skip</a>
        </div>
      </div>
    </div>
  );
}
