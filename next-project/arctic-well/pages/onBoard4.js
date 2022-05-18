import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";
import Layout from "../components/Layout";

export default function onBoard() {
  return (
    <Layout>
    <Head>
    <title>Welcome to Arctic Well</title>
  </Head>
    <div className={styles.onboarding_container}>
      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="card"
            layout="fixed"
            src="/onboarding_bg_4.png"
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
          <a className={styles.buttonText} href="./onBoard5">
            Next
          </a>
        </div>
        <div className={styles.text1}>
          <h1>Open Box</h1>
        </div>
        <div className={styles.text2}>
          <p>
            When your payment is completed, the door will unlock. As soon as you
            close the door your 90 seconds cooling starts.
          </p>
        </div>
        <div className={styles.textskip}>
          <a href="./map">skip</a>
        </div>
      </div>
    </div>
    </Layout>
  );
}
