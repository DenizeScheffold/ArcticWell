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

        <h1 className={styles.heading_text_box}>Our Boxes</h1>
        <p className={styles.our_boxes_text}>
          We have a box for every occasion!
        </p>

        <div className={styles.picture_box}>
          <Image
            alt="box"
            layout="fixed"
            src="/arctic_2.svg"
            width={110}
            height={211}
            quality={100}
          />
        </div>

        <div className={styles.heading_text_2}>
          <h1>Arctic Box City</h1>
        </div>

        <div className={styles.city_text}>
          <p>
            The standard City Box {<br></br>}suitable for 1 to 3 {<br></br>}
            persons.
          </p>
        </div>

        <div className={styles.list}>
          <p>
            • -8 °C{<br></br>}• 1-3 persons{<br></br>}• 1,5 m2
          </p>
        </div>

        <div className={styles.line}>
          <Image
            alt="line"
            layout="fixed"
            src="/Line.svg"
            width={300}
            height={815}
            quality={100}
          />
        </div>

        <div className={styles.heading_text_3}>
          <h1>Arctic Box Festival</h1>
        </div>

        <div className={styles.festival_box_text}>
          <p>
            The Festival Box is for larger parties {<br></br>}and takes up to 10
            persons.
          </p>
        </div>

        <div className={styles.list}>
          <p>
            • -8 °C{<br></br>}• 1-10 persons{<br></br>}• 8 m2
          </p>
        </div>

        <div className={styles.picture_bigbox}>
          <Image
            alt="bigbox"
            layout="fixed"
            src="/bigbooth.svg"
            width={184}
            height={162}
            quality={100}
          />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
