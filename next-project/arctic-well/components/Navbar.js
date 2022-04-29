import Link from "next/link";
import styles from "../styles/Home.module.css";

function MenuLink({ text, href }) {
  return (
    <Link href={href} passHref>
      <a className="px-8 py-2 hover:underline">{text}</a>
    </Link>
  );
}

export default function Navbar({ children }) {
  return (
    <div className={styles.container}>
  
      <nav className={styles.navlinks}>
        <MenuLink text="Home" href="/" />
        <MenuLink text="Map" href="/map" />
        <MenuLink text="More" href="/more" />
      </nav>
     
        <div>{children}</div>
     </div>
 
  );
}
