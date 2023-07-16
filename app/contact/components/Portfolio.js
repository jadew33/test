import "../../styles/contact.scss";

export default function Portfolio({ title, email }) {
    const href = "mailto:" + email;
    return (
        <a href={href} className="portfolio">
            <div className="portfolio-content">
                <h6>{title}</h6>
                <p>{email}</p>
            </div>
        </a>
    );
}
