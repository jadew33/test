"use client";

import Link from "next/link";
import HomepageEventsCard from "/components/home/homepage-events-card";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Home() {
  const [events, setEvents] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < events.length ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : events.length - 3
    );
  };

  useEffect(() => {
    async function getEvents() {
      try {
        const res = await axios.get("https://api.compsa.ca/compsa.ca/events");
        const upcomingEvents = res.data.filter(
          (item) => new Date() <= new Date(item.date)
        );
        setEvents(upcomingEvents);
      } catch (error) {
        console.log(error);
      }
    }

    getEvents();
  }, []);

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

          {events && events.length > 0 ? (
            <div className="homepage-cards-container">
              <button
                onClick={prevSlide}
                className="text-white text-6xl max-lg:mr-[1.5rem]"
              >
                <FaAngleLeft />
              </button>
              <div className="flex flex-col lg:flex-row gap-[1.5rem]">
                {events
                  .slice(currentIndex, currentIndex + 3)
                  .map((item, index) => (
                    <HomepageEventsCard
                      key={index}
                      date={format(item.date, "dd")}
                      month={format(item.date, "MMMM")}
                      description={item.description}
                    />
                  ))}
              </div>
              <button
                onClick={nextSlide}
                className="text-white text-6xl max-lg:ml-[1.5rem]"
              >
                <FaAngleRight />
              </button>
            </div>
          ) : (
            <div className="text-white font-gothamBold text-3xl my-[2rem]">
              Events loading or no events ...
            </div>
          )}

          <Link href="/events" className="text-compsa-white events-button">
            Go to Events Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
