import Link from "next/link";
import HomepageEventsCard from "./components/homepage-events-card";

export default function Home() {
  const hardcode = [
    {
      eventName: "Games Night",
      eventDate: "12",
      eventMonth: "September",
      eventDayofWeek: "Tuesday",
      ticketsRequired: false,
      signupRequierd: true,
      eventLocation: "CASLAB",
      eventLocationLink:
        "https://www.google.com/maps?hl=en-GB&q=Goodwin+Hall+(Kingston)+CASLAB",
      eventDescription:
        "In Goodwin's CASLAB, students will get to enjoy a variety of board games such as jenga, monopoly, scrabble, etc. There will also be a Wii available to play on, containing fun games. There will also be plenty of free snacks, so bring your friends and enjoy!",
      eventTime: "7pm - 9pm",
    },
    {
      eventName: "Scavenger Hunt",
      eventDate: "16",
      eventDayofWeek: "Saturday",
      eventMonth: "September",
      ticketsRequired: false,
      signupRequierd: true,
      eventLocation: "CASLAB",
      eventLocationLink:
        "https://www.google.com/maps?hl=en-GB&q=Goodwin+Hall+(Kingston)+CASLAB",
      eventDescription:
        "In Goodwin's CASLAB, students will get to enjoy a variety of board games such as jenga, monopoly, scrabble, etc. There will also be a Wii available to play on, containing fun games. There will also be plenty of free snacks, so bring your friends and enjoy!",
      eventTime: "7pm - 10pm",
    },
    {
      eventName: "Movie Night",
      eventDate: "22",
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
