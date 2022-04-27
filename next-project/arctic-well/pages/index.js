import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Arctic Well</title>
      </Head>
  <div>hej</div>
      <Banner />
     
    </div>
      )
}
