import React, { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  format,
  sub,
  add,
  parse,
} from "date-fns";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import useMobile from "../../hooks/useMobile";

export default function Calendar({ data, current, onChange, currentTab }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = startOfMonth(current);
  const endDate = endOfMonth(current);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const [day, setDay] = useState(format(current, "LLLL dd yyyy"));
  const [events, setEvents] = useState([]);

  const { mobile } = useMobile();
  //go back one month
  function prevMonth() {
    onChange(sub(current, { months: 1 }));
  }

  //go forward one month
  function nextMonth() {
    onChange(add(current, { months: 1 }));
  }

  //populates events to display based on the the id which is the day
  function populateEvent(id) {
    //empty out events when a new date is clicked
    setEvents([]);

    //tracking the date that the user clicked on and formatting it
    const currentDate =
      format(current, "MM") + " " + id + " " + format(current, "yyyy");

    //mapping out all the event that matches the user clicked date but also that is in the future
    data.map((item) => {
      if (
        currentDate === format(item.date, "MM dd yyyy") &&
        new Date() <= new Date(item.date)
      ) {
        setEvents((events) => [...events, item]);
      }
    });

    const parsedDate = parse(currentDate, "MM dd yyyy", new Date());
    const formattedDate = format(parsedDate, "MMMM dd yyyy");

    //set the day the user clicked to be displayed
    setDay(formattedDate);
  }

  //rendering mobile
  return mobile || !currentTab ? (
    <div className="mt-[3rem] flex flex-col gap-[2rem] w-full">
      {data.map((item, index) =>
        new Date() <= new Date(item.date) ? (
          <div
            className="flex flex-col py-[1rem] px-[3rem] bg-[#F0F0F0] rounded-lg w-full"
            key={index}
          >
            <h2 className="font-gothamBold text-xl">
              {day}: <span className="text-[#5D15D2]">{item.name}</span>
            </h2>
            <p>{item.location}</p>
            <p className="mt-[1rem] text-lg">{item.description}</p>
          </div>
        ) : null
      )}
    </div>
  ) : (
    //rendering out laptop
    <section className="w-full flex flex-col justify-center items-center mt-[2.5rem]">
      <div className="grid grid-cols-7 items-center justify-center text-center w-full p-[2rem] bg-[#F0F0F0] rounded-xl gap-[1.5rem] max-[1300px]:gap-[0.5rem]">
        <button onClick={prevMonth} className="text-[#5D15D2] text-3xl">
          <FaAngleLeft />
        </button>
        <div className="col-span-5 font-gothamBold text-4xl">
          {format(current, "LLLL yyyy")}
        </div>
        <button
          onClick={nextMonth}
          className="text-[#5D15D2] flex justify-end text-3xl"
        >
          <FaAngleRight />
        </button>

        {week.map((day) => (
          <div className="font-medium" key={day}>
            {day}
          </div>
        ))}
        {Array.from({ length: prefixDays }).map((item, index) => (
          <div className="w-[5rem] h-[5rem]" key={index}></div>
        ))}

        {/* rendering out the days of the month */}
        {Array.from({ length: numDays }).map((item, index) => {
          const date = index + 1; //the date
          const key = index < 9 ? `0${index + 1}` : `${index + 1}`; //the key but also turns single digit into double for ex. 1 -> 01, 8 -> 08 to help in the future for event date matching

          //the date on calendar
          const calendarDate =
            format(current, "MM") + " " + key + " " + format(current, "yyyy");

          //matches event date from api to the calendar date also excludes pass events, I feel like this matchingEvents could be a reusable function but I got a bit lazy
          const matchingEvents = data.filter((event) => {
            const eventDate = format(new Date(event.date), "MM dd yyyy");
            return (
              calendarDate === eventDate && new Date() <= new Date(event.date)
            );
          });

          return (
            <div
              key={date}
              className="flex flex-col justify bg-[#D6D6D6] rounded-lg hover:opacity-40 h-[4rem] xl:h-[4.5rem] 2xl:h-[6rem] min-[1900px]:h-[7.5rem]"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
              id={key}
              onClick={() => populateEvent(key)}
            >
              <div>{date}</div>

              {/* you could prob make this a grid-col-3 when there are more than 3 events since flex-col wouldn't fit with more than 3 events */}
              <div
                className={`${
                  matchingEvents.length > 3
                    ? "grid grid-cols-3 pt-[0.5rem]"
                    : "flex flex-col"
                } justify-center items-center gap-[0.2rem] xl:gap-[0.5rem]`}
              >
                {/* mapping out the number of events on certain day */}
                {matchingEvents.map((event, index) => {
                  //alternating between purple, yellow and pink for the event indicators
                  const getBackgroundColor = (index) => {
                    const colors = ["#5D15D2", "#D7DE21", "#C686F3"];
                    return colors[index % colors.length];
                  };
                  return (
                    //the indicators
                    <div
                      className={`h-[0.7rem] 2xl:h-[1.2rem] rounded-md ${
                        matchingEvents.length > 3
                          ? "w-[1rem] 2xl:w-[1.5rem] mx-auto"
                          : "w-[80%]"
                      }`}
                      key={index}
                      style={{ backgroundColor: getBackgroundColor(index) }}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[3rem] flex flex-col gap-[2rem] w-full">
        {/* When there are events on the date clicked render out the event details, otherwise render out no events available */}
        {events && events.length > 0 ? (
          events.map((item, index) => (
            <div
              className="flex flex-col py-[1rem] px-[3rem] bg-[#F0F0F0] rounded-lg"
              key={index}
            >
              <h2 className="font-gothamBold text-2xl">
                {day}: <span className="text-[#5D15D2]">{item.name}</span>
              </h2>
              <p>{item.location}</p>
              <p className="mt-[1rem] text-lg">{item.description}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col w-full py-[1rem] px-[3rem] bg-[#F0F0F0] rounded-lg">
            <h2 className="font-gothamBold text-2xl">
              {day}: <span className="text-[#5D15D2]">No events available</span>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
