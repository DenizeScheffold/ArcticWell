import Head from "next/head";
import Link from "next/link";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function More() {
  // @TODO: change background to the correct one and style according to figma
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
      </div>
      <div className={styles.flexbox_container}>
        <h1 className={styles.about_title1}>
          <Link href="/more" passHref>
            <span className={styles.about_arrow}>
              <Image
                alt="backarrow"
                layout="fixed"
                src="/back_arrow.svg"
                width={16}
                height={16}
                quality={100}
              />
            </span>
          </Link>
          About us
        </h1>

        <div className={styles.about_image1}>
          <Image
            alt="Rectangle"
            layout="fixed"
            src="/about_us.jpg"
            height={164}
            width={328.96}
            quality={100}
          />
        </div>

        <div className={styles.about_text1}>
          <p>
            We were born in 2022, and kicked off this project at our school in
            Stockholms Technical Institute. We worked in a cross-functionally
            teams with Java-developers and UX Designer.
          </p>
        </div>

        <h1 className={styles.about_title2}>Charity Work</h1>

        <div className={styles.about_text2}>
          <p>
            We are proud supporters of the Arctic Council and thier mission to
            preserve arctic wildlife for future generations.
          </p>
        </div>

        <div className={styles.about_image2}>
          <Image
            alt="Rectangle"
            layout="fixed"
            src="/arctic_council.png"
            height={61}
            width={131}
            quality={100}
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
