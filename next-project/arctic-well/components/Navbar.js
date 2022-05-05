import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar({ children }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
  
      <nav className={styles.navlinks}>

     
      <Link href="/" className={styles.link-styles}>
         <div className={styles.home_nav}>
        <Image
        alt="home"
        src="/navbar_home.svg"
        layout="responsive"
        width={16}
        height={10}
        quality={100}
      />
        <a className={router.pathname == "/" ? "active" : ""}>
           Home
        </a>
      </div>
      </Link>

        <Link href="/map" className={styles.link-styles}>
        <div className={styles.map_nav}>
        <Image
        alt="background"
        src="/navbar_map.svg"
        layout="responsive"
        width={15}
        height={10}
        quality={100}
      />
       <a className={router.pathname == "/map" ? "active" : ""}>
           Arctic
        </a>
      </div>
      </Link>

        <Link href="/more" className={styles.link-styles}>

        <div className={styles.more_nav}>
        <Image
        alt="background"
        src="/navbar_more.svg"
        layout="responsive"
        width={24}
        height={18}
        quality={100}
      />
    <a className={router.pathname == "/" ? "active" : ""}>
           More
        </a>
      </div>
      </Link>

      </nav>
     
        <div>{children}</div>
     </div>
 
  );
}
