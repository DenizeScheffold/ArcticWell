import Head from "next/head";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function More() {
  return (
    <div className={styles.more_container}>
      <Head>
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
            priority
          />
        </div>

        <div className={styles.arrow}>
          <Link href="./more" passHref>
            <Image
              alt="Arrow"
              layout="fixed"
              src="/Arrow.svg"
              width={16}
              height={16}
              quality={100}
            />
          </Link>
        </div>

        <h1 className={styles.heading_text}>Rent a Box</h1>

        <div className={styles.picture_health}>
          <Image
            className={styles.picture_health}
            alt="rent"
            layout="fixed"
            src="/rent.jpg"
            width={344}
            height={164}
            quality={100}
          />
        </div>

        <div className={styles.rent_text}>
          <p>
            With hundreds of visitors even an open air {<br></br>} event can
            reach sauna-like temperatures.
          </p>
        </div>

        <div className={styles.rent_text2}>
          <p>
            An Arctic Well at your event not only makes {<br></br>}for happier attendees,
            it also makes {<br></br>}your event stand out. Don&apos;t be the
            next {<br></br>}Fyre Festival - rent a box!
          </p>
        </div>

        <div className={styles.icon}>
          <Image
            alt="telephon"
            layout="fixed"
            src="/phone.svg"
            width={56}
            height={56}
            quality={100}
          />
        </div>

        <div className={styles.rent_nr}>
          <p>08-555 55 55</p>
        </div>

        <div className={styles.icon}>
          <Image
            alt="telephon"
            layout="fixed"
            src="/email.svg"
            width={56}
            height={56}
            quality={100}
          />
        </div>

        <div className={styles.rent_email}>
          <p>hello@arcticwell.com</p>
        </div>

        <Navbar />
      </div>
    </div>
  );
}
