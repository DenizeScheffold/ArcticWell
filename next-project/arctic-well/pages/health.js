import Head from "next/head";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function More() {
  // @TODO: change background to the correct one and style according to figma
  return (
   
    <><Head>
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
          priority />
        </div>
       
        <div className={styles.arrow}>
        <Link href="./more" passHref>
        <Image
          alt="Arrow"
          layout="fixed"
          src="/Arrow.svg"
          width={16}
          height={15.93}
          quality={100}
          priority />
          </Link>
          </div>

        <h1 className={styles.heading_text}>Health Benefits</h1>
 
        <div className={styles.picture_health}>
        <Image
          alt="health"
          layout="fixed"
          src="/health.png"
          width={344}
          height={164}
          quality={100}
          priority />
        </div>

        

        <Navbar />
      </div></>
  
  );
}
