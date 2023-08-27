import Image from "next/image";
import "./styles/home.scss";
import Link from "next/link";

export default function Home() {
  const hardcode = [
    {
      eventName: "Games Night",
      eventDate: "12",
      eventDayofWeek: "Tuesday",
      ticketsRequired: false,
      signupRequierd: true,
      eventLocation: "CASLAB",
      eventLocationLink: "https://maps.google.com/maps?hl=en&q=CASLAB",
      eventDescription:
        "In Goodwin's CASLAB, students will get to enjoy a variety of board games such as jenga, monopoly, scrabble, etc. There will also be a Wii available to play on, containing fun games. There will also be plenty of free snacks, so bring your friends and enjoy!",
      eventTime: "7pm - 9pm",
    },
    {
      eventName: "Scavenger Hunt",
      eventDate: "16",
      eventDayofWeek: "Saturday",
      ticketsRequired: false,
      signupRequierd: true,
      eventLocation: "CASLAB",
      eventLocationLink: "https://maps.google.com/maps?hl=en&q=CASLAB",
      eventDescription:
        "In Goodwin's CASLAB, students will get to enjoy a variety of board games such as jenga, monopoly, scrabble, etc. There will also be a Wii available to play on, containing fun games. There will also be plenty of free snacks, so bring your friends and enjoy!",
      eventTime: "7pm - 10pm",
    },
  ];
  return (
    <div className="homepage">
      <div className="hero-image-container">
        <div className="gradient"></div>
        <div className="text text-compsa-yellow font-gothamBold">
          <h1>
            WELCOME TO <span>COMPSA</span>
          </h1>
          <p>{"{ Queen's Computing Students' Association }"}</p>
        </div>
      </div>

      <div className="gradient-bg">
        <h1 className="font-gothamBold text-compsa-white events-heading">
          UPCOMING EVENTS
        </h1>
        <p className="text-compsa-white text-center ">
          Want to get involved? You&apos;ve come to the right place!{" "}
        </p>
        <div className="events">
          <Link href="/events" className="text-compsa-white events-button">
            Go to Events Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
