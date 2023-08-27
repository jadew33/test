export default function HomepageEventsCard({
  date,
  month,
  location,
  description,
}) {
  return (
    <div>
      <h1>{date}</h1>
      <h2>{month}</h2>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
}
