export default function Link({ title, description, number, bullets }) {
  return (
    <div className="listing">
      <div className="text-div">
        <div className="left">
          <h1 className="font-bold">{title}</h1>
          <p className="job-description">{description}</p>
          <ul className="job-description">
            {bullets && bullets.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
      <p className="font-bold job-number">x {number}</p>
    </div>
  );
}
