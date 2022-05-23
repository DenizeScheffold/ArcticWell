import Head from "next/head";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function More() {
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
       
        <div className={styles.icon_health}>

        <div>
        <Image 
          alt="blood"
          layout="fixed"
          src="/blood.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="emotional"
          layout="fixed"
          src="/emotional.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="sleep"
          layout="fixed"
          src="/sleep.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="stress"
          layout="fixed"
          src="/stress.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>
        </div>

        <div className={styles.icon_health2}>

        <div>
        <Image 
          alt="boost"
          layout="fixed"
          src="/boost.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="improves"
          layout="fixed"
          src="/alert.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="depp"
          layout="fixed"
          src="/happy.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>

        <div>
        <Image 
          alt="meta"
          layout="fixed"
          src="/metabolism.svg"
          width={90}
          height={90}
          quality={100}
          priority />
        </div>
        </div>
        
        <Navbar />
      </div></>
  );
}
