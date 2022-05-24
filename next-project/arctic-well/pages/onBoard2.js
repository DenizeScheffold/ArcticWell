import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

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
              src="/onboarding_bg_2.jpg"
              width={376}
              height={736}
              quality={100}
              priority
            />
          </div>
        </div>

        <div className={styles.flexbox_container}>
          <Link href="./onBoard3" passHref>
            <div className={styles.button}>
              <Image
                alt="Rectangle"
                layout="fill"
                src="/Rectangle_blue.svg"
                height={48}
                width={272}
                quality={100}
              />
              <a className={styles.buttonText}>Next</a>{" "}
            </div>
          </Link>
          <div className={styles.text1}>
            <h1>Find your box</h1>
          </div>

          <div className={styles.text2_1}>
            <p>
              Feeling warm with no box in sight? Simply use the map view to find
              a box near you.
            </p>
          </div>

          <Link href="./map" passHref>
            <a className={styles.textskip}>Skip</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
