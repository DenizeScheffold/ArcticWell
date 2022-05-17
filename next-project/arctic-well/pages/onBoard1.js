import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Onboarding.module.css";

// @TODO: the width and height values on the button are different from the ones used
// on the landing page. Are these meant to be different in size??

// @TODO: there are a lot of weird values and style rules that need to be refactored, renamed, and/or moved

export default function onBoard() {
  <Head>
    <title>Welcome to Arctic Well</title>
  </Head>;
  return (
    <div className={styles.onboarding_container}>
      <div>
        <div className={styles.bg_wrap}>
          <Image
            alt="boxPicture"
            layout="fixed"
            src="/onboarding_bg_1.png"
            width={376}
            height={736}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={styles.flexbox_container}>
        <div className={styles.button2}>
          <Image
            className={styles.rectangle_blue} //what does this do and why is it here?
            alt="Rectangel"
            layout="fill"
            src="/Rectangle_blue.png"
            height={20}
            width={140}
            quality={100}
          />
          <a className={styles.buttonText2} href="./onBoard2">
            Next
          </a>
        </div>

        <div className={styles.text2}>
          <h1>Cooling, evolved</h1>
        </div>

        <div className={styles.text3}>
          <p>
            Say hello to the fastest and easiest way to reach a comfortable body
            temperature. The experince will leave you feeling fresh and ready
            for your next adventure.
          </p>
        </div>

        <div className={styles.textskip}>
          <a href="./map">skip</a>
        </div>
      </div>
    </div>
  );
}
