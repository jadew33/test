export default function HomepageEventsCard({ date, month, description }) {
  return (
    <div className="homepage-events-card">
      <h1 className="date font-gothamBold">{date}</h1>
      <h2 className="month font-gothamBold">{month}</h2>
      <div>
        <p className="text-compsa-indigo font-medium line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
