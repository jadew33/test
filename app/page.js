import Link from "next/link";
import HomepageEventsCard from "./components/homepage-events-card";

export default function Home() {
  const hardcode = [
    {
      eventName: "Scavenger Hunt",
      eventDate: "24",
      eventMonth: "September",
      eventDayofWeek: "Tuesday",
      ticketsRequired: false,
      signupRequierd: true,
      eventLocation: "CASLAB",
      eventLocationLink:
        "https://www.google.com/maps?hl=en-GB&q=Goodwin+Hall+(Kingston)+CASLAB",
      eventDescription: "Team up and be the first to complete the Hunt!",
      eventTime: "5pm - 8pm",
    },
    {
      eventName: "Movie Night",
      eventDate: "28",
      eventDayofWeek: "Friday",
      eventMonth: "September",
      ticketsRequired: false,
      signupRequierd: false,
      eventLocation: "Stirling Hall",
      eventLocationLink: "https://maps.google.com/maps?hl=en&q=CASLAB",
      eventDescription:
        "Students will gather in Sterling Hall to watch a movie! The movie will be voted for by the masses on COMPSA's Instagram. Snacks will be included! Bring your friends and get comfortable.",
      eventTime: "8pm - 10pm",
    },
    {
      eventName: "Resume Workshop",
      eventDate: "30",
      eventDayofWeek: "Friday",
      eventMonth: "September",
      ticketsRequired: false,
      signupRequierd: false,
      eventLocation: "Mac Corry A309",
      eventLocationLink: "https://maps.google.com/maps?hl=en&q=CASLAB",
      eventDescription:
        "Students will gather in Sterling Hall to watch a movie! The movie will be voted for by the masses on COMPSA's Instagram. Snacks will be included! Bring your friends and get comfortable.",
      eventTime: "3pm - 5pm",
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
