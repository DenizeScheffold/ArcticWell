import Head from "next/head";

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
          <h1 className={styles.about_title1}>Health Benefits</h1>

          <div className={styles.about_image}>
            <Image
              alt="Rectangle"
              layout="fixed"
              src="/health_benefits.jpg"
              height={164}
              width={328.96}
              quality={100}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
