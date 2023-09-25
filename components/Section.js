export default function Section({ title, children }) {
  if (!children) return null;
  return (
    <div className="section">
      <span className="title font-medium">
        {title}
        <hr />
      </span>
      <ul>{children}</ul>
    </div>
  );
}
