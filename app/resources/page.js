import Section from "/components/Section";
import Link from "/components/resources/Link";

export default function Resources() {
  return (
    <div className="resources ">
      <div className="content">
        <h1 className="font-gothamBold">RESOURCES</h1>
        <p>
          Below is a list of various resources maintained by COMPSA. You&apos;ll
          find multiple sections with each being dedicated to a COMPSA
          portfolio.
        </p>
        <p>
          If you have something to contribute, or even just questions or
          concerns about anything listed below, please don&apos;t hesitate to
          reach out to help@compsa.queensu.ca
        </p>
        <Section title="COMPSA">
          <Link
            link="https://www.instagram.com/compsa/"
            title="Instagram"
            icon="/resources.svg"
          ></Link>
          <Link
            link="https://www.linkedin.com/company/queenscompsa/"
            title="LinkedIn"
          ></Link>
          <Link
            link="https://www.facebook.com/queenscompsa"
            title="Facebook"
          ></Link>
          <Link
            link="https://discord.com/invite/pmC8tATvhq"
            title="Discord"
          ></Link>
          <Link
            link="https://www.tiktok.com/@compsa?lang=en"
            title="TikTok"
          ></Link>
          <Link link="mailto:president@compsa.queensu.ca" title="Email"></Link>
          {/* <Link
            link="https://forms.gle/uBgzvkWuzMeoezwD6"
            title="Join the Alumni Network"
          ></Link> */}
        </Section>
        <Section title="EVENTS &#38; SOCIALS">
          <Link
            link="https://drive.google.com/drive/folders/1SGaqPNshNR3KbdC2YfJ9c0JdmwPcPGdJ"
            title="Fall Night Out 2023 Photos"
          ></Link>
        </Section>
        <Section title="EQUITY">
          <Link
            link="https://www.sackingston.com/"
            title="Sexual Assault Centre Kingston"
          ></Link>
        </Section>
        {/* <Section title="ACADEMICS"></Section>
        <Section title="PROFESSIONAL DEVELOPMENT"></Section> */}
      </div>
    </div>
  );
}
