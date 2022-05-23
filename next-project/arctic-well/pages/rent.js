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

        <h1 className={styles.heading_text}>Rent a Box</h1>
 
        <div className={styles.picture_health}>
        <Image className={styles.picture_health}
          alt="rent"
          layout="fixed"
          src="/rent.jpg"
          width={344}
          height={164}
          quality={100}
          priority />
        </div>

        <div className={styles.rent_text}>
        <p>With just a couple hundred of visitors even an {<br></br>}open air event can reach sauna-like {<br></br>}temperatures within hours.</p>
        </div>

        <div className={styles.rent_text2}>
        <p>An Arctic Well at your event does nor olny make for happier attendees but also helps to make your event stand out in the crowd. Don&apos;t be the next Fyre Festival - rent a box.</p>
        </div>

        <div className={styles.icon}>
        <Image 
          alt="telephon"
          layout="fixed"
          src="/phone.svg"
          width={56}
          height={56}
          quality={100}
          priority />
        </div>

        <div className={styles.rent_nr}>
        <p>+46 732 84 4566</p>
        </div>

        <div className={styles.icon}>
        <Image 
          alt="telephon"
          layout="fixed"
          src="/email.svg"
          width={56}
          height={56}
          quality={100}
          priority />
        </div>

        <div className={styles.rent_email}>
        <p>hello@arcticwell.com</p>
        </div>

        <Navbar />
      </div></>
  
  );
}
