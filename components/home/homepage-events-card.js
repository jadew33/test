export default function HomepageEventsCard({ date, month, location, name }) {
  return (
    <div className="homepage-events-card ">
      <h1 className="date font-gothamBold">{date}</h1>
      <h2 className="month font-gothamBold">{month}</h2>
      <div className="mobile-divide">
        <p className="name text-compsa-indigo font-medium">{name}</p>
        <p className="location text-compsa-indigo font-medium">{location}</p>
      </div>
    </div>
  );
}
