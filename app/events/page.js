export default function Events() {
  return (
    <div className="events-container">
      <div className="container2">
        <div className="events-text">
          <h1 className="font-gothamBold text-compsa-yellow">
            EVENTS CALENDAR
          </h1>
        </div>

        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_7254eea7a5aea7bc4eb761e8157f0a99ecd8b90db07af25b7f3e7ca6d73a2f27%40group.calendar.google.com&ctz=America%2FToronto"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
          className="calendar"
        ></iframe>
      </div>
    </div>
  );
}
