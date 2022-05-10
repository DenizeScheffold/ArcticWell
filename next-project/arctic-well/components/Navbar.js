import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar({ children }) {
  const router = useRouter();
  //console.log("pathname check: ", router.asPath);
  return (
    <div className={styles.container}>
      <nav className={styles.navlinks}>
        <Link href="/" className={styles.link_styles}>
          <div className={styles.home_nav}>
            <Image
              alt="home"
              src="/navbar_home.svg"
              layout="responsive"
              width={16}
              height={10}
              quality={100}
            />
            <a
              className={
                router.asPath === "/" ? styles.underline : styles.link_styles
              }
            >
              Home
            </a>
          </div>
        </Link>

        <Link href="/map" className={styles.link_styles}>
          <div className={styles.map_nav}>
            <Image
              alt="background"
              src="/navbar_box_icon.svg"
              layout="responsive"
              width={25}
              height={11}
              quality={100}
            />
            <a
              className={
                router.asPath === "/map" ? styles.underline : styles.link_styles
              }
            >
              Find Box
            </a>
          </div>
        </Link>

        <Link href="/more" className={styles.link_styles}>
          <div className={styles.more_nav}>
            <Image
              alt="background"
              src="/navbar_more.svg"
              layout="responsive"
              width={24}
              height={19}
              quality={100}
            />
            <a
              className={
                router.asPath === "/more"
                  ? styles.underline
                  : styles.link_styles
              }
            >
              More
            </a>
          </div>
        </Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
