import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Background from "./background";

export default function Home() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;

  return (
    
    <div>
    <Background/>
      <div className={styles.text}>
        <p>Now it&apos;s easy to stay</p>
      </div>
      
      <div className={styles.text}>
        <p>breezy!</p>
      </div>

      <div className={styles.button}>
        <Image className={styles.rectangle}
          alt="rectangle"
          layout="responsive"
          src="/Rectangle.png"
          height={39}
          width={184}
          quality={100} 
           />
          <a className={styles.buttonText} href="./onBoard1" >
          Discover how it works!
          </a>
      </div>
    </div>
  );
}