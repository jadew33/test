import Link from "next/link";
import HomepageEventsCard from "/components/home/homepage-events-card";
import { format } from "date-fns";
import axios from "axios";

export default async function Home() {
  const res = await axios.get("https://api.compsa.ca/compsa.ca/events");
  const events = res.data;

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

      {events.length !== 0 && (
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
              <div className="flex flex-col lg:flex-row gap-[1.5rem]">
                {events
                  .filter((item) => new Date() <= new Date(item.date))
                  .slice(0, 3)
                  .map((item, index) => (
                    <HomepageEventsCard
                      key={index}
                      date={format(item.date, "dd")}
                      month={format(item.date, "MMMM")}
                      location={item.location}
                      name={item.name}
                    />
                  ))}
              </div>
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
