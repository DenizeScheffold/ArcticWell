import Head from "next/head";
import Link from "next/link";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function More() {
  // @TODO: change background to the correct one and style according to figma
  return (
    <Layout>
      <Head>
        <title>Arctic Well</title>
      </Head>
      <div className={styles.more_container}>
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
            Our boxes
          </h1>
          <h2 className={styles.about_title2}>
            We have a box for every occasion!{" "}
          </h2>
          <h1 className={styles.about_title1}>Arctic box City</h1>
          <div className={styles.about_image1}>
            <Image
              alt="Rectangle"
              layout="fixed"
              src="/box1.png"
              height={211}
              width={110}
              quality={100}
            />
          </div>
          {/* @TODO: this needs adjusting */}
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
              src="/box2.png"
              height={184}
              width={162}
              quality={100}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
