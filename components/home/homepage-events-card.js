export default function HomepageEventsCard({ date, month, name, location }) {
  return (
    <div className="homepage-events-card">
      <h1 className="date font-gothamBold">{date}</h1>
      <h2 className="month font-gothamBold">{month}</h2>
      <div>
        <p className="text-compsa-indigo font-medium text-2xl">{name}</p>
        <p className="font-book text-sm">@ {location}</p>
      </div>
    </div>
  );
}
