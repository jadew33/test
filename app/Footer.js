export default function Footer() {
  return (
    <div className="footer">
      <h1>Stay Connected</h1>
      <button
        link="https://www.instagram.com/compsa/"
        title="Instagram"
        icon="🔗"
      ></button>
      <button
        link="https://www.linkedin.com/company/queenscompsa/"
        title="LinkedIn"
        icon="🔗"
      ></button>
      <button
        link="https://www.facebook.com/queenscompsa"
        title="Facebook"
        icon="🔗"
      ></button>
      <button
        link="https://discord.com/invite/pmC8tATvhq"
        title="Discord"
        icon="🔗"
      ></button>
      <button
        link="https://www.tiktok.com/@compsa?lang=en"
        title="TikTok"
        icon="🔗"
      ></button>
      <button
        link="mailto:president@compsa.queensu.ca"
        title="Email"
        icon="🔗"
      ></button>
      <h1>Land Acknowledgement</h1>
      <p className="">
        Let us acknowledge that Queen’s is situated on traditional Anishinaabe
        (Ah-nish-in-ah-bay) and Haudenosaunee (Ho-den-o-show-nee) territory. We
        are grateful to be able to live, learn, and play on these lands.
      </p>
      <span className="copyright">©2023 COMPSA. All rights reserved.</span>
    </div>
  );
}
