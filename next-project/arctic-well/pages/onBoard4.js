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

      <div className={styles.backgoundOnBord1}>
      <Image
        alt="card"
        layout="responsive"
        src="/open_box.png"
        width={377}
        height={706}
        quality={100}
         />
        </div>
  
      <div className={styles.button2}>
      <Image className={styles.rectangel2}
        alt="Rectangel"
        layout="responsive"
        src="/Rectangle_blue.png"
        height={20}
        width={140}
        quality={100} 
         />
        <a className={styles.buttonText2} href="./onBoard5" >
        Next
        </a>
        </div>
        
        <div className={styles.textOpenBox}>
           <h1>Open Box</h1>
           </div>
        
        <div className={styles.textOpenBox2}>
        <p>When your payment is completed, the door will unlock. As soon as you entered the box and closed the door your 90 seconds starts.</p>
       </div>

       <div className={styles.textskip}>
        <a href="./map" >skip</a>
       </div>
    
      </div>
    )
    }