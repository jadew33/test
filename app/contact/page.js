import Portfolio from "./components/Portfolio";
import ContactButton from "./components/ContactButton";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="font-gothamBold">CONTACT US!</h1>
      <div className="contact-grid">
        <p className="text-content">
          Leave us a message with concerns or feedback.
          <br />
          <br /> Note, if you would like us to get back to you personally,
          please leave your email!
        </p>
        <input
          className="name-field"
          id="name-field"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="email-field"
          type="email"
          id="email-field"
          placeholder="Email"
        ></input>
        <textarea
          className="message-field"
          id="message-field"
          placeholder="Message *"
          required
        ></textarea>
        <ContactButton />
        <div className="map" id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.4907395572868!2d-76.49330808234704!3d44.228039697138335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab03bf601895%3A0x43ec4238203bf382!2sGoodwin%20Hall!5e0!3m2!1sen!2sca!4v1689536857111!5m2!1sen!2sca"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <h3 className="font-gothamBold">LOOKING FOR A SPECIFIC PORTFOLIO?</h3>
      <div className="portfolio-grid font-book">
        <Portfolio
          className="academics"
          title={"Academics"}
          email={"academics@compsa.queensu.ca"}
        ></Portfolio>
        <Portfolio
          className="equity"
          title={"Equity"}
          email={"equity@compsa.queensu.ca"}
        ></Portfolio>
        <Portfolio
          className="events"
          title={"Events"}
          email={"events@compsa.queensu.ca"}
        ></Portfolio>
        <Portfolio
          className="internal-affairs"
          title={"Internal Affairs"}
          email={"ia@compsa.queensu.ca"}
        ></Portfolio>
        <Portfolio
          className="marketing"
          title={"Marketing"}
          email={"marketing@compsa.queensu.ca"}
        ></Portfolio>
        <Portfolio
          className="professional-development"
          title={"Professional Development"}
          email={"pd@compsa.queensu.ca"}
        ></Portfolio>
      </div>
    </div>
  );
}
