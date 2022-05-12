import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function onBoard() {
    <Head>
      <title>Welcome to Arctic Well</title>
    </Head>;
    return (

      <div>

      <div>
      <Image
        alt="boxPicture"
        layout="responsive"
        src="/our_boxes.png"
        width={377}
        height={706}
        quality={100}
         />
        </div>
  
      <div className={styles.button2}>
      <Image 
        alt="Rectangel"
        layout="responsive"
        src="/Rectangle_blue.png"
        height={20}
        width={140}
        quality={100} 
         />
        <a className={styles.buttonText2} href="./onBoard2" >
        Next
        </a>
        </div>
        
        <div className={styles.text2}>
           <h1>Cooling, evolved</h1>
           </div>
        
        <div className={styles.text3}>
        <p>Say hello to the fastest and easiest way to reach a comfortable body temperature. The experince will leave you feeling fresh and ready for your next adventure.</p>
       </div>

       <div className={styles.textskip}>
         <a href="./map" >skip</a>
       </div>
    
      </div>

    )
    }