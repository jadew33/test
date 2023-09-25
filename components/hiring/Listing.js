export default function Link({ title, description, number, link }) {
  return (
    <div className="listing">
      <div className="text-div">
        <div className="left">
          <h1 className="font-bold" font-gothamBold>
            {title}
          </h1>
          <p className="job-description">{description}</p>
        </div>
      </div>
      <p className="font-bold job-number">x {number}</p>
    </div>
  );
}
