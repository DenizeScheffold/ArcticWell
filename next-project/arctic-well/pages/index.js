import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Welcome to Arctic Well</title>
      </Head>
      <div className={styles.landing_container}>
        <div>
          <div className={styles.bg_wrap}>
            <Image
              alt="articgang"
              layout="fixed"
              src="/background_landingpage.png"
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
          <Link href="./onBoard1" passHref>
            <div className={styles.button}>
              <Image
                alt="Rectangle"
                layout="fill"
                src="/Rectangle_blue.svg"
                height={48}
                width={272}
                quality={100}
              />
              <a className={styles.buttonText}>Learn more</a>{" "}
            </div>
          </Link>
          <div className={styles.text}>
            <h1>Now it’s easy {<br></br>}to stay breezy!</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
