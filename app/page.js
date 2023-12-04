import Link from "next/link";
import HomepageEventsCard from "/components/home/homepage-events-card";

export default function Home() {
  const events = [
    // {
    //   eventName: "Trivia Night",
    //   eventDate: "13",
    //   eventMonth: "January",
    //   eventLocation: "Clark Pub Hall",
    // },
    // {
    //   eventName: "Alumni Mixer",
    //   eventDate: "20",
    //   eventMonth: "January",
    //   eventLocation: "Clark Pub Hall",
    // },
  ];
  return (
    <div className="homepage">
      <div className="hero-image-container">
        <div className="gradient"></div>
        <div className="text text-compsa-yellow">
          <h1 className="font-gothamBold">
            WELCOME TO <span className="inline">COMPSA</span>
          </h1>
          <p className="font-book font-bold">
            {"{ Queen's Computing Students' Association }"}
          </p>
        </div>
      </div>
      {events.length > 0 && (
        <div className="gradient-bg">
          <div className="special-heading">
            <h1 className="font-gothamBold text-compsa-white events-heading">
              UPCOMING EVENTS
            </h1>
          </div>

          <div className="homepage-events">
            <p className="text-compsa-white text-center events-description">
              Want to get involved? You&apos;ve come to the right place!{" "}
            </p>
            <div className="homepage-cards-container">
              {events.map((event, i) => (
                <HomepageEventsCard
                  key={i}
                  date={event.eventDate}
                  month={event.eventMonth}
                  name={event.eventName}
                  location={event.eventLocation}
                ></HomepageEventsCard>
              ))}
            </div>

            <Link href="/events" className="text-compsa-white events-button">
              Go to Events Calendar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
