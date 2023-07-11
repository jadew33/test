import "../styles/resources.scss";
import Section from "./components/Section";

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
                <Section title="COMPSA"></Section>
                <Section title="EVENTS AND SOCIALS"></Section>
                <Section title="EQUITY"></Section>
                <Section title="ACADEMICS"></Section>
                <Section title="PROFESSIONAL DEVELOPMENT"></Section>
            </div>
        </div>
    );
}
