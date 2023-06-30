import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">COMPSA</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/">Merch</Link>
    </div>
  );
}
