export default function HomepageEventsCard({ date, month, name, location }) {
  return (
    <div className="homepage-events-card">
      <h1 className="date font-gothamBold">{date}</h1>
      <h2 className="month font-medium">{month}</h2>
      <div>
        <p className="name text-compsa-indigo font-medium">{name}</p>
        <p className="location font-book">@ {location}</p>
      </div>
    </div>
  );
}
