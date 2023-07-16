export default function Contact() {
    return (
        <div className="contact">
            <h1>CONTACT US!</h1>
            <div className="contact-grid">
                <p className="text-content">
                    Leave us a message with concerns or feedback.<br></br> Note, if you would like
                    us to get back to you personally, please leave your email!
                </p>
                <input className="name-field" type="text" placeholder="Name"></input>
                <input className="email-field" type="text" placeholder="Email"></input>
                <textarea className="message-field" placeholder="Message"></textarea>
                <button className="submit" type="submit">
                    Submit Message
                </button>
                <img
                    className="map"
                    src="https://philiaweb.com/uploads/image/google-maps.png"
                ></img>
            </div>
            <h3>LOOKING FOR A SPECIFIC PORTFOLIO?</h3>
            <div className="portfolio-grid"></div>
        </div>
    );
}
