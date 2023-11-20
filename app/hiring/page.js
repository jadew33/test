import Section from "/components/Section";
import Listing from "/components/hiring/Listing";
import CompsaButton from "/components/Button";
import Image from "next/image";

export default function Hiring() {
  return (
    <div className="hiring">
      <div className="content">
        <h1 className="font-gothamBold page-heading">
          First Year Representative Hiring
        </h1>
        <div className="page-description">
          <p>
            Thank you for your interest in running for First Year Representative
            Fall in the 2023 Election for the 2023-2024 Academic Year.
          </p>
          <p>
            Complete the nomination form no later than{" "}
            <span className="font-book font-bold">
              11:30 P.M on Friday, November 17, 2023
            </span>{" "}
            . In addition to the form, you must send a certain number of digital
            signatures (name and student number) from students in computing who
            support you to internal@compsa.queensu.ca before the deadline of{" "}
            <span className="font-book font-bold">
              Friday, November 17, 2023
            </span>{" "}
          </p>
          <CompsaButton
            link="https://docs.google.com/document/d/1xifQDVBEAZVH7CoIW3DWCMtbXrTS4WhbK6JfrlOFZPA/edit?usp=sharing"
            text="Information Package"
            className="button"
          />
          <br />
          <CompsaButton
            link="https://forms.gle/CErJob2ujje3qgpJ7"
            text="Nomination Form"
            className="button"
          />
        </div>

        <Section title="First Year Representative">
          {/* SPECIAL LISTING */}
          <div className="listing">
            <div className="text-div">
              <div className="left">
                <h1 className="font-bold">First Year Representative</h1>
                <p className="job-description special">
                  Utilizing effective communication with peers, first year
                  representatives organize year-specific events, address
                  year-related issues, shadow assigned portfolios, manage
                  assigned tasks, participating in meetings, and
                  most-importantly devise strategies to engage and involve
                  first-year students within COMPSA and the School of Computing
                  in general.
                </p>
              </div>
            </div>
            <p className="font-bold job-number"></p>
          </div>
        </Section>
        <Section title="Timeline">
          <div className="calender-container">
            <p class="event">
              <b className="font-book text-xl">Sunday, Nov 12, 2023:</b>
              <br />
              Nomination period begins and nomination form is available on
              social media sites and through email
            </p>

            <p class="event">
              <b className="font-book text-xl">Wednesday, Nov 15, 2023:</b>
              <br />
              Information meeting to run for year rep (3pm Goodwin Hall COMPSA
              Office, 241 Goodwin)
            </p>

            <p class="event">
              <b className="font-book text-xl">Friday, Nov 17, 2023:</b>
              <br />
              Nomination period ends at 11:30pm.
            </p>

            <p class="event">
              <b className="font-book text-xl">Friday, Nov 17, 2023:</b>
              <br />
              All campaigning materials need to be approved before 11:30pm
            </p>

            <p class="event">
              <b className="font-book text-xl">Saturday, Nov 18, 2023:</b>
              <br />
              Campaigning period begins at 12:00am
            </p>

            {/* <p class="event">
              <b className="font-book text-xl">Monday, Nov 20, 2023:</b>
              <br />
              Candidate Q&A Session (5pm to 6pm Walter Light Hall)
            </p> */}

            <p class="event">
              <b className="font-book text-xl">Friday, Nov 24, 2023:</b>
              <br />
              Campaigning period ends at 8:00pm.
            </p>

            <p class="event">
              <b className="font-book text-xl">
                Saturday, Nov 25 - Sunday, Nov 26:
              </b>
              <br />
              Voting period are open online from 12:00am EST until 11:59pm EST
              Sunday, Nov 26, 2023.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
