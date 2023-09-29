import Link from "next/link";
import Image from "next/image";
import HomepageEventsCard from "/components/home/homepage-events-card";

export default function Home() {
  const hardcode = [
    {
      eventName: "Movie Night",
      eventDate: "28",
      eventMonth: "September",
      eventLocation: "Stirling Hall",
    },
    {
      eventName: "Resume Workshop",
      eventDate: "30",
      eventMonth: "September",
      eventLocation: "Mac Corry A309",
    },
    {
      eventName: "Games Night",
      eventDate: "3",
      eventMonth: "October",
      eventLocation: "CASLAB",
    },
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
            {hardcode.map((event, i) => (
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
    </div>
  );
}
