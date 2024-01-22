"use client";

import React from "react";
import Link from "next/link";
import EventTabs from "../../components/events/EventTabs";
import { useState } from "react";
import ElectionSection from "../../components/elections/ElectionSection";

export default function page() {
  const [tab, setTab] = useState(true);
  return (
    <main className="elections">
      <div className="content">
        <section>
          <h1 className="font-gothamBold">COMPSA 2024 ELECTION</h1>
          {/* fill in the doc links here */}
          <p className="text">
            Welcome to the COMPSA Council in the Winter 2023 Election for the
            2024-2025 Academic Year. Complete the nomination form found{" "}
            <Link className="text-purple-400" href={"/ "}>
              here
            </Link>{" "}
            no later than{" "}
            <span className="font-gothamBold">
              11:30 P.M on Friday, February 9th, 2024.{" "}
            </span>
          </p>
          <p className="text">
            In addition to the form, you must send 30 digital signatures (name
            and student number) from students in computing who support you to{" "}
            <span className="text-purple-400">speaker@compsa.queensu.ca</span>{" "}
            before the deadline of{" "}
            <span className="font-gothamBold">Friday, February 9th, 2024.</span>
          </p>
          {/* maybe replace with a better looking arrow? also fill in with doc link*/}
          <Link href={"/"} className="text underline font-gothamBold">
            More Information {"->"}
          </Link>
          <EventTabs changeTab={setTab} currentTab={tab} />
          <ElectionSection currentTab={tab} />
        </section>
      </div>
    </main>
  );
}
