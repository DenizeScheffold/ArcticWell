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
            src="/onboarding_bg_3.png"
            width={376}
            height={736}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={styles.flexbox_container}>
        <Link href="./onBoard4" passHref>
          <div className={styles.button}>
          <Image
            alt="Rectangle"
            layout="fill"
            src="/Rectangle_blue.png"
            height={48}
            width={272}
            quality={100}
          />
          <a className={styles.buttonText}>Next</a>{" "}
        </div>
        </Link>
        <div className={styles.text1}>
          <h1>Easy Payment</h1>
        </div>
        <div className={styles.text2}>
          <p>
            When you have found a box the transaction takes place on site.
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
