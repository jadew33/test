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
// "use client";

// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Calendar from "../../components/events/Calendar";
// import Slider from "../../components/events/Slider";
// import EventTabs from "../../components/events/EventTabs";

// export default function Events() {
//   const [events, setEvents] = useState();
//   const [current, setCurrent] = useState(new Date());
//   const [tab, setTab] = useState(true);

//   //get data from api end point
//   useEffect(() => {
//     async function getEvents() {
//       try {
//         const res = await axios.get("https://api.compsa.ca/compsa.ca/events");
//         setEvents(res.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     getEvents();
//   }, []);

//   return (
//     <main
//       className="events-container min-w-screen min-h-screen"
//       style={{ padding: "4% 30% 7%" }}
//     >
//       {events ? (
//         <>
//           <section>
//             <h1 className="font-gothamBold">EVENTS</h1>

//             <EventTabs changeTab={setTab} currentTab={tab} />

//             <Calendar
//               data={events}
//               current={current}
//               onChange={setCurrent}
//               currentTab={tab}
//             />

//             <div className="section">
//               <h2 className="font-medium title">
//                 EVENT PHOTOS <hr />
//               </h2>
//             </div>
//             <Slider />
//           </section>
//         </>
//       ) : (
//         <h1>Calendar loading...</h1>
//       )}
//     </main>
//   );
// }
