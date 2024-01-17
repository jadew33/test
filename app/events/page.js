"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "../../components/events/Calendar";
import Slider from "../../components/events/Slider";

export default function Events() {
  const [events, setEvents] = useState();
  const [current, setCurrent] = useState(new Date());

  //get data from api end point
  useEffect(() => {
    async function getEvents() {
      try {
        const res = await axios.get("https://api.compsa.ca/compsa.ca/events");
        setEvents(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getEvents();
  }, []);

  return (
    <main
      className="events-container min-w-screen min-h-screen"
      style={{ padding: "4% 30% 7%" }}
    >
      {events ? (
        <>
          <section>
            <h1 className="font-gothamBold">EVENTS</h1>

            <div className="section">
              <h2 className="font-medium title">
                Calendar <hr />
              </h2>
            </div>

            <Calendar data={events} current={current} onChange={setCurrent} />

            <div className="section">
              <h2 className="font-medium title">
                Event Photos <hr />
              </h2>
            </div>
            <Slider />
          </section>
        </>
      ) : (
        <h1>Calendar loading...</h1>
      )}
    </main>
  );
}
