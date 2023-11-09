import Link from "next/link";

export default function CompsaButton({ link, text }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="compsa-button font-book text-compsa-white"
    >
      {text}
    </Link>
  );
}
