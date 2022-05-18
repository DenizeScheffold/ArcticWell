import React from "react";
import Head from "next/head";
import styles from "../styles/Onboarding.module.css";
import Image from "next/image";
import Link from "next/link";
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
        <Link href="./onBoard2" passHref>
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
            <h1>This is Artic Well</h1>
          </div>
          
          <div className={styles.text2}>
            <p>
              Say hello to the fastest way to go from overheated to refreshed.
              Our cooling technology will give you an arctic experience wherever
              you are.
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
