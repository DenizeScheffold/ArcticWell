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
    <div className={styles.flexbox_container}>
      <div>
        <Image
          alt="articgang"
          layout="responsive"
          src="/background_landingpage.png"
          width={376}
          height={736}
          quality={100}
        />
      </div>
      <Link href="./onBoard1" className={styles.button} passHref>
        <div className={styles.button}>
          <Image
            alt="Rectangel"
            layout="responsive"
            src="/Rectangle_blue.png"
            height={39}
            width={184}
            quality={100}
          />
          <a className={styles.buttonText}>Discover how it works!</a>{" "}
        </div>
      </Link>
      <div className={styles.text}>
        <h1>Now it&apos;s easy to stay</h1>
      </div>

      <div className={styles.textBreezy}>
        <p>breezy!</p>
      </div>
    </div>
  );
}
