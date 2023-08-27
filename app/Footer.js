import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="font-book">Stay Connected</h1>
      <div className="socials-container">
        <Link
          href="https://www.instagram.com/compsa/"
          className="contact-button"
        >
          <Image
            src="/socials-icons/instagram.svg"
            className="icon"
            width="32"
            height="32"
            alt="Instagram"
          />
        </Link>
        <Link
          href="https://discord.com/invite/pmC8tATvhq"
          className="contact-button"
        >
          <Image
            src="/socials-icons/discord.svg"
            className="icon"
            width="30"
            height="30"
            alt="Discord"
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@compsa?lang=en"
          className="contact-button"
        >
          <Image
            src="/socials-icons/tiktok.svg"
            className="icon"
            width="30"
            height="30"
            alt="Tiktok"
          />
        </Link>
        <Link
          href="https://www.facebook.com/queenscompsa"
          className="contact-button"
        >
          <Image
            src="/socials-icons/facebook.svg"
            className="icon"
            width="30"
            height="30"
            alt="Facebook"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/queenscompsa/"
          className="contact-button"
        >
          <Image
            src="/socials-icons/linkedin.svg"
            className="icon"
            width="25"
            height="25"
            alt="Linkedin"
          />
        </Link>
        <Link href="mailto:help@compsa.queensu.ca" className="contact-button">
          <Image
            src="/socials-icons/email.svg"
            className="icon"
            width="35"
            height="35"
            alt="Email"
          />
        </Link>
      </div>
      <h1 className="font-book">Land Acknowledgement</h1>
      <p>
        Let us acknowledge that Queen’s is situated on traditional Anishinaabe
        (Ah-nish-in-ah-bay) and Haudenosaunee (Ho-den-o-show-nee) territory. We
        are grateful to be able to live, learn, and play on these lands.
      </p>
      <span className="copyright">©2023 COMPSA. All rights reserved.</span>
    </div>
  );
}
