import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div className={styles.landing_container}>
      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="articgang"
            layout="fixed"
            src="/background_landingpage.png"
            width={376}
            height={736}
            quality={100}
            priority
          />
          <a className={styles.buttonText}>Discover how it works!</a>{" "}
        </div>
      </div>
      <div className={styles.flexbox_container}>
        <Link href="./onBoard1" passHref>
          <div className={styles.button}>
            <Image
              alt="Rectangle"
              layout="fill"
              src="/Rectangle_blue.png"
              height={48}
              width={272}
              quality={100}
            />
            <a className={styles.buttonText}>Discover how it works!</a>{" "}
          </div>
        </Link>
        <div className={styles.text}>
          <h1>Now it&apos;s easy to stay breezy!</h1>
        </div>
      </div>
    </div>
  );
}
