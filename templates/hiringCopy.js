import Section from "/components/Section";
import Listing from "/components/hiring/Listing";
import CompsaButton from "/components/Button";

export default function Hiring() {
  return (
    <div className="hiring">
      <div className="content">
        <h1 className="font-gothamBold page-heading">FALL HIRING</h1>
        <div className="page-description">
          <p>
            Thank you for your interest in becoming a COMPSA volunteer for the
            2023-2024 Academic Year. You can apply to up to 3 positions.
          </p>
          <p>
            Interview times will be circulated to applicants at least 24 hours
            before your interview, and interviews will take place the following
            week &#40;October 21-27&#41;. Remember to check your spam mail
            folder.
          </p>
          <CompsaButton
            link="https://docs.google.com/document/d/1RyRd7zCydDwxzQyeW0wGKBUgiYU8RhlayLgOIigMdcI/edit?usp=sharing"
            text="Information Package"
            className="button"
          />
          <p>
            Please complete the application form no later than{" "}
            <span className="font-book font-bold">
              October 18, 2023 at 11:59 PM
            </span>
          </p>
          <CompsaButton
            link="https://forms.gle/GecnHJfhZEHprCNz9"
            text="Apply Here"
            className="button"
          />
          <p>
            The position descriptions listed below. Intern roles are intended
            for first year students.
          </p>
        </div>

        <Section title="EXECUTIVES">
          {/* SPECIAL LISTING */}
          <div className="listing">
            <div className="text-div">
              <div className="left">
                <h1 className="font-bold">Exec Intern</h1>
                <p className="job-description special">
                  The intern position is for students who are interested in
                  learning about how the Council and Internal Structure of
                  COMPSA works. This is a great opportunity to get directly
                  involved in university-level leadership and create change for
                  years to come. Priority will be given to first year students,
                  but any year can apply.
                </p>

                <p>
                  As an intern, you will be working with one member of the
                  Executive &#40;President, Vice President of Operations, Vice
                  President of Student Affairs&#41; and are expected to:
                </p>
                <ol>
                  <li>
                    Attend all COMPSA General Assemblies and Council meetings
                    when requested to Meet fortnightly with their Executive
                  </li>
                  <li>
                    Complete tasks assigned to them in accordance with the
                    timeline for the given task
                  </li>
                  <li>
                    Provide unique feedback from a your year&apos;s point of
                    view to improve COMPSA
                  </li>
                </ol>
              </div>
            </div>
            <p className="font-bold job-number">x 6</p>
          </div>
        </Section>

        <Section title="ACADEMICS">
          <Listing
            title="Academics Volunteer"
            number={2}
            description="Works with the Academics team in order to facilitate the tutorizing program, exam tutorials, and other Academics initiatives throughout the school year.  Also helps to facilitate communication between the student body and the faculty."
          />
        </Section>

        <Section title="EQUITY">
          <Listing
            title="Equity Affairs Coordinator"
            number={3}
            bullets={[
              "Communicate with other equity-related groups on campus and in the Kingston community",
              "Find and let students know about non-COMPSA equity, diversity, support, and mental health events happening in the community",
              "Act as one of the main bullet of contact for speakers/organizations/groups during events concerning equity/accessibility concerns.",
              "Create and oversee post-event/social surveys to let Computing students voice their suggestions, concerns and comments.",
              "Review equity surveys and propose solutions for raised points from students.",
              "Run monthly EDI+I caucuses to promote conversations about equity issues.",
              "Present the results of equity surveys at General Assemblies and proposed solutions.",
              "Manage and oversee an equity feedback form (together with Director) in order to give students an anonymous forum to voice concerns/suggestions/issues/incidents in Computing regarding Equity.",
              "Ideate and realize mental health awareness events throughout the academic year with collaboration with the Socials and/or Academics portfolios. (i.e. exam destressors)",
              "Ensure accessibility and equitable practices in COMPSA events, socials, and processes.",
              "Responsible for overseeing Equity Fundraising events.",
            ]}
            equity="(The Equity Affairs Coordinator role will be hired for multiple people. This is simply an enumeration of the responsibilities of the entire role; individual responsibilities will be delegated to the volunteers of this role during on-boarding.)"
          />
          <Listing
            title="Equity Intern"
            number={1}
            bullets={[
              "Take part in event promotion as a spirit minister, sharing event details and promoting socials of mental health awareness events through word of mouth to the computing faculty",
              "Work with the equity team through event brainstorming, relay expectations and sentiments from the computing community that can be used in future surveys or as a means to collect valuable data",
              "Give feedback on the event creation process and which mental health destresser events are most pertinent to computing students",
              "Represent the needs and wants of computing students from their corresponding year",
            ]}
          />
        </Section>

        <Section title="EVENTS">
          <Listing
            title="Events Intern"
            number={2}
            description="Works with the Events team to help plan, coordinate, and execute a wide range of events, designed to engage and educate computing students. Interns will have the opportunity to gain valuable hands-on experience in event management and contribute to the vibrant computing student community. "
          />
        </Section>

        <Section title="FINANCE">
          <Listing
            title="Finance Intern"
            number={1}
            description="Working closely with finance and sponsorships to keep track of the budget of the year and send out emails to potential sponsors. Attend weekly meetings and get to know more about the finance portfolio. Be the main point of contact for fundraising, come up with ideas and work closely with marketing for it"
          />
        </Section>

        <Section title="INTERNAL AFFAIRS">
          <Listing
            title="Policy Officer"
            number={1}
            description="Works closely with the director and executive to update and manage internal documentation, like the constitution & operation manuals, in order to better reflect the goals and values of COMPSA."
          />
          <Listing
            title="Scribe"
            number={1}
            description="Documents important information & context by Participating in council meetings, general assemblies, and any other important meetings) by taking meeting minutes. Additionally helps with maintaining documentation."
          />
        </Section>

        <Section title="MARKETING">
          <Listing
            title="Graphic Designer"
            number={2}
            bullets={[
              "Creates graphics to post on COMPSA's social media accounts and assist with merchandise design.",
              "Has previous experience with design tools (Adobe Suite preferred).",
              "Works closely with Marketing Director to create media that remains within the COMPSA Visual Identity Standard.",
            ]}
          />
          <Listing
            title="Photographer"
            number={2}
            bullets={[
              "Attends COMPSA events upon request and edits/submits photos in a timely manner.",
              "Works closely with Marketing Director to creatively conduct merchandise photoshoots.",
            ]}
          />
          <Listing
            title="Merch Coordinator"
            number={1}
            bullets={[
              "Promotes sales and conduct market research to ensure a profit.",
              "Actively involved in the process of monitoring the merchandise website sales, merchandise ordering, pickup, and sales.",
              "Works closely with Marketing Vice-Director to ensure success of merchandise handling.",
            ]}
          />
          <Listing
            title="Merch Intern"
            number={1}
            bullets={[
              "Works closely with Merchandise Coordinators and Marketing Vice-Director to understand overall merchandise logistics.",
              "Assists with the process of monitoring sales, merchandise ordering, pickup, and sales.",
            ]}
          />
        </Section>

        <Section title="PROFESSIONAL DEVELOPMENT">
          <Listing
            title="Company Outreach Coordinator"
            number={1}
            bullets={[
              "Contact various companies via email, LinkedIn or through company representatives to create meaningful connections and establish a line of communication for future events.",
              "Attend networking events on behalf of COMPSA to meet those company representatives.",
              "Coordinate activities with companies.",
            ]}
          />
          <Listing
            title="Internship Coordinator"
            number={1}
            bullets={[
              "Utilize various platforms and events to gather internship opportunities.",
              "Coordinate with the tech team to ensure that the internships are regularly updated on the websites.",
              "Ensure that the COMPSA LinkedIn is up-to-date with active internship opportunities.",
            ]}
          />
          <Listing
            title="Professional Development Intern"
            number={1}
            bullets={[
              "Work closely with the PD Director to understand the internal workings of COMPSA.",
              "Act as the PD Director's line of communication to other portfolios, such as Finance and Marketing.",
              "Assist with the planning and execution of PD events, such as office tours, events and networking mixers.",
              "Get to meet professionals in the industry!",
            ]}
          />
        </Section>

        <Section title="SOCIALS">
          <Listing
            title="Socials Intern"
            number={2}
            description="Woks with the Socials team to plan and coordinate the many social events throughout the year. Interns will learn about event brainstorming, planning skills (event forms, graphic requests, room bookings, snack acquisitions, etc.), and being part of a team. By the end of the school year, both interns will get to formulate and run their own events!!
"
          />
        </Section>

        <Section title="TECH TEAM">
          <Listing
            title="Web Design Volunteer"
            number={1}
            description="Designs stunning web pages using Figma for the tech team to implement. We are looking for an individual who has past design experience. Works closely with the Frontend Director and receives feedback on their designs from the Marketing Director."
          />
          <Listing
            title="Frontend Development Volunteer"
            number={1}
            description="Works with the tech team to translate the provided designs into clean and efficient frontend code. We are looking for an individual who has past experience using web development technologies. Works closely with the Frontend Director. "
          />
          <Listing
            title="Fullstack Development Volunteer"
            number={1}
            description="Works closely with both the Frontend and Backend directors to build and maintain various projects assigned to the Tech Team. We are looking for an individual who has past experience developing full stack applications."
          />
          <Listing
            title="Backend Development Volunteer"
            number={1}
            description="Works closely with the head of DevOps to build and maintain information technology systems to accomplish COMPSA's mandate. We are looking for an individual who is very familiar with Node.js and MySQL. Experience with PHP and Docker is a plus but not required."
          />
        </Section>

        <div className="button">
          <CompsaButton
            link="https://forms.gle/GecnHJfhZEHprCNz9"
            text="Apply Here"
            className="button"
          />
        </div>
      </div>
    </div>
  );
}
