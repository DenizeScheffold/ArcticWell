import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div>
      <div>
        <Image
          alt="articgang"
          layout="responsive"
          src="/background_landingpage.png"
          width={377}
          height={706}
          quality={100}
        />
      </div>

      <div className={styles.button}>
        <Image
          alt="Rectangel"
          layout="responsive"
          src="/Rectangle.png"
          height={39}
          width={184}
          quality={100}
        />
        <a className={styles.buttonText} href="./onBoard1">
          Discover how it works!
        </a>
      </div>

      <div className={styles.text}>
        <h1>Now it&apos;s easy to stay</h1>
      </div>

      <div className={styles.textBreezy}>
        <p>breezy!</p>
      </div>
    </div>
  );
}
