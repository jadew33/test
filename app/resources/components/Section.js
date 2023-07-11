import "../../styles/resources.scss";

export default function Section({ title, children }) {
    if (!children) return null;
    return (
        <div className="section">
            <span className="title">
                {title}
                <hr />
            </span>
            <ul>{children}</ul>
        </div>
    );
}
