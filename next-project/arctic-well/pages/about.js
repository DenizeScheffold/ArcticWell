import Head from "next/head";
import Link from "next/link";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>About us</title>
      </Head>
      <div>
        <div className={styles.more_container}>
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
            <div className={styles.flexbox_container}>
              <h1>About us</h1>
              <p>sasdaadsds</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
