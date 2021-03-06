import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function OnBoard() {
  const [loaded, setLoaded] = useState(false);
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
              src="/onboarding_bg_4.jpg"
              width={376}
              height={736}
              quality={100}
              className={loaded ? "unblur" : ""}
              onLoadingComplete={() => setLoaded(true)}
              priority
            />
          </div>
        </div>
        <div className={styles.flexbox_container}>
          <Link href="./onBoard5" passHref>
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
            <h1>Open Box</h1>
          </div>
          <div className={styles.text2_3}>
            <p>
              The door unlocks when your payment is complete. Your 90 second
              cooling experience starts as soon as you close the door.
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
