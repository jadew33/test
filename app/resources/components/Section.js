import "../../styles/resources.scss";

export default function Section({ title, children }) {
  if (!children) return null;
  return (
    <div className="section font-medium">
      <span className="title font-medium">
        {title}
        <hr />
      </span>
      <ul>{children}</ul>
    </div>
  );
}
