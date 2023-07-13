import "../styles/resources.scss";
import Section from "./components/Section";
import Link from "./components/Link";

export default function Resources() {
    return (
        <div className="resources">
            <div className="content">
                <h1>RESOURCES</h1>
                <p>Leave us a message with concerns or feedback.</p>
                <p>
                    Note, if you would like us to get back to you personally, please leave your
                    email!
                </p>
                <Section title="COMPSA">
                    <Link
                        link="https://www.instagram.com/compsa/"
                        title="Instagram"
                        icon="🔗"
                        date="08 / 04 / 2022"
                    ></Link>
                    <Link
                        link="https://www.linkedin.com/company/queenscompsa/"
                        title="LinkedIn"
                        icon="🔗"
                    ></Link>
                    <Link
                        link="https://www.facebook.com/queenscompsa"
                        title="Facebook"
                        icon="🔗"
                    ></Link>
                    <Link
                        link="https://discord.com/invite/pmC8tATvhq"
                        title="Discord"
                        icon="🔗"
                    ></Link>
                    <Link
                        link="https://www.tiktok.com/@compsa?lang=en"
                        title="TikTok"
                        icon="🔗"
                    ></Link>
                    <Link link="mailto:president@compsa.queensu.ca" title="Email" icon="🔗"></Link>
                    <Link
                        link="https://forms.gle/uBgzvkWuzMeoezwD6"
                        title="Join the Alumni Network"
                        icon="🔗"
                    ></Link>
                </Section>
                <Section title="EVENTS AND SOCIALS">
                    <Link
                        link="https://drive.google.com/drive/folders/1RLFSccTIccUVFDr1TDNmMRcNSvmpbKo0?usp=sharing"
                        title="Fall Night Out Photos"
                        icon="🔗"
                    ></Link>
                    <Link
                        link="https://drive.google.com/drive/u/0/folders/17PjrE_w09Fe2_ehvzgiRbMsO1QL231WO"
                        title="Formal Photos"
                        icon="🔗"
                    ></Link>
                </Section>
                <Section title="EQUITY">
                    <Link
                        link="https://www.sackingston.com/"
                        title="Sexual Assault Centre Kingston"
                        icon="🔗"
                    ></Link>
                </Section>
                <Section title="ACADEMICS">
                    <Link
                        link="https://docs.google.com/forms/d/e/1FAIpQLSebseoqRym3KOZsQHE9zYtjzcZL0otMDcflmPuoxSku6gsTyA/viewform"
                        title="Tutor Request Form"
                        icon="🔗"
                    ></Link>
                </Section>
                <Section title="PROFESSIONAL DEVELOPMENT"></Section>
            </div>
        </div>
    );
}
