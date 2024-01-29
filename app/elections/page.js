"use client";

import React from "react";
import Link from "next/link";
import EventTabs from "../../components/events/EventTabs";
import { useState } from "react";
import ElectionSection from "../../components/elections/ElectionSection";
import CompsaButton from "../../components/Button";

export default function Elections() {
  const [tab, setTab] = useState(true);
  return (
    <main className="elections">
      <div className="content">
        <section>
          <h1 className="font-gothamBold">COMPSA WINTER 2024 ELECTION</h1>

          <p className="text">
            Welcome to the COMPSA Council in the Winter 2024 Election for the
            2024-2025 Academic Year.
          </p>

          {new Date() > new Date("2024-02-02") ? (
            <p className="text">
              Complete the nomination form found{" "}
              <Link
                className="text-purple-400"
                href="https://forms.gle/aekBrnEnCYX8HeBZ7"
              >
                here{" "}
              </Link>
              no later than{" "}
              <span className="font-gothamBold ">
                11:30 P.M on Friday, February 9th, 2024.{" "}
              </span>
            </p>
          ) : (
            <p className="text">
              The nomination form will be available after{" "}
              <span className="font-gothamBold">February 2nd, 2024</span>.
            </p>
          )}

          <p className="text">
            In addition to the form, you must send 30 digital signatures (name
            and student number) from students in computing who support you to{" "}
            <a
              href="mailto:speaker@compsa.queensu.ca"
              className="text-purple-400"
            >
              speaker@compsa.queensu.ca
            </a>{" "}
            before the deadline of{" "}
            <span className="font-gothamBold">Friday, February 9th, 2024.</span>
          </p>

          <CompsaButton
            link="https://docs.google.com/document/d/1uML0GJZa7h6iMVu7yGkqEnR_yrjCySDJfjfMXnSZ7kI/edit?usp=sharing"
            text="INFORMATION PACKAGE"
          />
          <EventTabs changeTab={setTab} currentTab={tab} />
          <ElectionSection currentTab={tab} />
        </section>
      </div>
    </main>
  );
}
