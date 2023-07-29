import Link from "next/link";
// import logo from "/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar font-book">
      <div className="logo-container">
        <img src="/logo.svg" />
      </div>

      <div className="links-container">
        <Link href="/" className="normal-link">
          Home
        </Link>
        <Link href="/about" className="normal-link">
          About
        </Link>
        <Link href="/resources" className="normal-link">
          Resources
        </Link>

        <Link href="/contact" className="normal-link">
          Contact
        </Link>
        <Link href="/" className="merch-link">
          COMPSA Merch
        </Link>
      </div>
    </div>
  );
}
