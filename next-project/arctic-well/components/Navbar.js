import Link from "next/link";

function MenuLink({ text, href }) {
  return (
    <Link href={href} passHref>
      <a className="px-8 py-2 hover:underline">{text}</a>
    </Link>
  );
}

export default function Navbar({ children }) {
  return (
    <div className="navbar-container">
      <footer className="nav-links">
        <MenuLink text="Home" href="/" />
        <MenuLink text="Map" href="/map" />
        <MenuLink text="More" href="/more" />
      </footer>
  
        <div>{children}</div>
    
    </div>
  );
}
