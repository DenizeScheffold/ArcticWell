import Head from "next/head";
import Link from "next/link";
import styles from "../styles/More.module.css";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState } from "react";

export default function More() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Arctic Well</title>
      </Head>
      <div className={styles.more_container}>
        <div>
          <div className={styles.bg_wrap}>
            <Image
              alt="background"
              layout="fixed"
              src="/more_bg.jpg"
              width={376}
              height={736}
              quality={100}
              className={loaded ? "unblur" : ""}
              onLoadingComplete={() => setLoaded(true)}
              priority
            />
          </div>
        </div>
        <div className={styles.flexbox_container}>
          <div className={styles.more_div}>
            <Link href="/about" passHref>
              <h1 className={styles.more_links}>About us</h1>
            </Link>
            <hr className={styles.more_lines}></hr>
            <Link href="/boxes" passHref>
              <h1 className={styles.more_links}>Our boxes</h1>
            </Link>
            <hr className={styles.more_lines}></hr>
            <Link href="/health" passHref>
              <h1 className={styles.more_links}>Health benefits</h1>
            </Link>
            <hr className={styles.more_lines}></hr>
            <Link href="/rent" passHref>
              <h1 className={styles.more_links}>Rent a box</h1>
            </Link>
            <hr className={styles.more_lines}></hr>
            <Link href="/contact" passHref>
              <h1 className={styles.more_links}>Contact us</h1>
            </Link>
            <hr className={styles.more_lines}></hr>

            <div className={styles.more_footer}>
              <p className={styles.more_footer_text}>
                Designed by Arctic Well in Sweden.
              </p>

              <div className={styles.flag}>
                <Image
                  alt="flag"
                  layout="fixed"
                  src="/sverige_flagga.svg"
                  width={18.05}
                  height={18}
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
