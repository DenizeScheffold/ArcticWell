import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Now it&apos;s easy to stay</p>
      </div>
      <div className={styles.text}>
        <p>breezy!</p>
      </div>

      <div className={styles.rectangle}>
        <img src="./Rectangle.png" height={39} width={184} />
      </div>

      <div className={styles.buttonText}>
        <a>Discover how it works!</a>
      </div>
    </div>
  );
}
