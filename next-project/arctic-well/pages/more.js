import Head from "next/head";
import Link from "next/link";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";

export default function More() {
  <Head>
    <title>Arctic Well</title>
  </Head>;
  // @TODO: change background to the correct one and style according to figma
  return (
    <div className={styles.more_container}>
      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="background"
            layout="fixed"
            src="/background_landingpage.png"
            width={376}
            height={736}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={styles.flexbox_container}>
        <div className={styles.more_div}>
          <Link href="/about" passHref>
            <h1 className={styles.more_links}>About us</h1>
          </Link>
          <hr className={styles.more_hr}></hr>
          <Link href="/boxes" passHref>
            <h1 className={styles.more_links}>Our boxes</h1>
          </Link>
          <hr className={styles.more_hr}></hr>
          <Link href="/rent" passHref>
            <h1 className={styles.more_links}>Rent-a-box</h1>
          </Link>
          <hr className={styles.more_hr}></hr>
          <Link href="/health" passHref>
            <h1 className={styles.more_links}>Health benefits</h1>
          </Link>
          <hr className={styles.more_hr}></hr>
          <Link href="/contact" passHref>
            <h1 className={styles.more_links}>Contact us</h1>
          </Link>
          <hr className={styles.more_hr}></hr>
          <p className={styles.more_footer}>
            Designed by Arctic Well in Sweden.
          </p>
        </div>
      </div>
    </div>
  );
}
