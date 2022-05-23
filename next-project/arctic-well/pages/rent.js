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
      </div>
      <div className={styles.flexbox_container}>
        <h1 className={styles.about_title1}>
          <Link href="/more" passHref>
            <span className={styles.about_arrow}>
              <Image
                alt="backarrow"
                layout="fixed"
                src="/back_arrow.svg"
                width={16}
                height={16}
                quality={100}
              />
            </span>
          </Link>
          Rent-a-box
        </h1>

        <div className={styles.about_image}>
          <Image
            alt="Rectangle"
            layout="fixed"
            src="/rent_a_box.jpg"
            height={164}
            width={328.96}
            quality={100}
          />
        </div>

        <div className={styles.rent_text}>
          <p>
            With just a couple hundred of visitors even an open air event can
            reach sauna-like temperatures within hours.
          </p>
          <br></br>
          <p>
            An Arctic Well at your event does not only make for happier
            attendees but also helps to make your event stand out in the crowd.
            Dont be the next Fyre Festival - rent a box.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
