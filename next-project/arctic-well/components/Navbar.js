import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

export default function Navbar({ children }) {
  return (
    <div className={styles.container}>
  
      <nav className={styles.navlinks}>

       <Link href="/" className={"link-styles"}>
         <div >
        <Image
        alt="background"
        src="/navbar_home.svg"
        layout="responsive"
        width={16}
        height={10}
        quality={100}
      />
      <p>Home</p>
      </div>
      </Link>

        <Link href="/map" className={"link-styles"}>
        <div >
        <Image
        alt="background"
        src="/navbar_map.svg"
        layout="responsive"
        width={15}
        height={11}
        quality={100}
      />
      <p>Map</p>
      </div>
      </Link>

        <Link href="/more" className={"link-styles"}>

        <div>
        <Image
        alt="background"
        src="/navbar_more.svg"
        layout="responsive"
        width={24}
        height={15}
        quality={100}
      />
      <p>More</p>
      </div>
      </Link>

      </nav>
     
        <div>{children}</div>
     </div>
 
  );
}
