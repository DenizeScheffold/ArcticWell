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
              src="/onboarding_bg_5.jpg"
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
            <a className={styles.buttonText} href="./map">
              Let’s go!
            </a>
          </div>
          <div className={styles.textReady}>
            <h1>Are you ready?</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
