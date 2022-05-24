import Head from "next/head";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function More() {
  return (
    <div className={styles.more_container}>
      <Head>
        <title>Arctic Well</title>
      </Head>

      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="background"
            layout="fixed"
            src="/more_bg.jpg"
            width={376}
            height={736}
            quality={100}
            priority
          />
        </div>

        <div className={styles.arrow}>
          <Link href="./more" passHref>
            <Image
              alt="Arrow"
              layout="fixed"
              src="/Arrow.svg"
              width={16}
              height={16}
              quality={100}
            />
          </Link>
        </div>

        <h1 className={styles.heading_text}>About us</h1>

        <div className={styles.picture_about}>
          <Image
            className={styles.picture_about}
            alt="background"
            layout="fixed"
            src="/about_us.jpg"
            width={328}
            height={164}
            quality={100}
          />
        </div>

        <div className={styles.about_text}>
          <p>
            Arctic Well was born in 2022 by a group of students at the Stockholm
            Technical Institute. After experiencing record breaking heat waves
            they saw the need for new ways to cool down. Our mission is to
            create wellness solutions in a constantly warmer world.
          </p>
        </div>

        <h1 className={styles.charity}>Charity work</h1>

        <div className={styles.charity_text}>
          <p>
            We are proud supporters of the Arctic Council's efforts to preserve
            arctic wildlife for future generations.
          </p>
        </div>

        <div className={styles.picture_charity}>
          <Image
            alt="fox"
            layout="fixed"
            src="/fox.svg"
            width={113}
            height={69}
            quality={100}
          />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
