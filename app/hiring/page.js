import Section from "/components/Section";
import Listing from "/components/hiring/Listing";

export default function Hiring() {
  return (
    <div className="hiring">
      <div className="content">
        <h1 className="font-gothamBold page-heading">FALL HIRING</h1>
        <p className="page-description">
          Below is a list of various resources maintained by COMPSA. You&apos;ll
          find multiple sections with each being dedicated to a COMPSA
          portfolio.
        </p>

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

        <Section title="ACADEMICS">
          <Listing
            title="Academics Intern"
            number={2}
            description="Works with the Academics team in order to facilitate the tutorizing program, exam tutorials, and other Academics initiatives throughout the school year.  Also helps to facilitate communication between the student body and the faculty."
          />
        </Section>

        <Section title="PROFESSIONAL DEVELOPMENT">
          <Listing title="Company Outreach Coordinator" number={2} />
          <Listing title="Internship Coordinator" number={2} />
          <Listing title="Professional Development Intern" number={1} />
        </Section>

        <Section title="MARKETING">
          <Listing title="Graphic Designer" number={2} />
          <Listing title="Photographer" number={1} />
          <Listing title="Merch Coordinator" number={1} />
          <Listing title="Merch Intern" number={1} />
        </Section>

        <Section title="TECH TEAM">
          <Listing
            title="Web Design Intern"
            number={1}
            description="Designs stunning web page using Figma for the tech team to implement. It is recommended to have past experience with design. Works closely with the Front End Director and receives feedback on designs from the Marketing Director."
          />
          <Listing
            title="Frontend Development Intern"
            number={1}
            description="Works with the tech team to translate provided designs into clean and efficient front end code. Past experience using basic front-end technologies is required."
          />
          <Listing
            title="Fullstack Development Intern"
            number={1}
            description="Works with the tech team to implement code that will bridge the gap between the front-end and back-end of projects. Past experience with web development is required."
          />
          <Listing
            title="Backend Development Intern"
            number={1}
            description="The COMPSA back-end team is looking for a programming intern specializing in back-end technologies such as Node.js and SQL."
          />
        </Section>

        <Section title="EVENTS">
          <Listing
            title="Events Intern"
            number={2}
            description="The COMPSA Events Team is looking for two passionate interns who will mostly be helping out planning out the annual formals."
          />
        </Section>

        <Section title="SOCIALS">
          <Listing title="Socials Intern" number={2} />
        </Section>

        <Section title="FINANCE">
          <Listing title="Finance Intern" number={1} />
        </Section>

        <Section title="EQUITY">
          <Listing title="Equity Director" number={1} />
          <Listing title="Affairs Coordinator" number={3} />
          <Listing title="Equity Intern" number={1} />
        </Section>
      </div>
    </div>
  );
}
