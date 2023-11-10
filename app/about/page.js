export default function About() {
  return (
    <seciton className="aboutSection">
      <section className="top">
        <div className="top-image" />
        <section className="top-text">
          <h1 className="text-compsa-yellow font-gothamBold">
            WHAT IS <span className="inline">COMPSA</span>?
          </h1>
          <p className=" text-compsa-white">
            Queen&apos;s University Computing Students&apos; Association
            (COMPSA) is the student government for Queen&apos;s University
            School of Computing.
          </p>
          <p className=" text-compsa-white">
            We organize social events, workshops, information sessions, and work
            together with the faculty to advocate for Computing students&apos;
            needs.
          </p>
        </section>
      </section>

      <section className="bottom">
        <div className="bottomSection">
          <div className="title-container">
            <div className="title-line"></div>
            <h1 className="font-gothamBold text-compsa-white">MEET THE TEAM</h1>
            <div className="title-line"></div>
          </div>

          <section className="box-container">
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Executives</h1>

                <p>
                  <b className="font-book">President: </b>
                  Akash Singh
                </p>
                <p>
                  <b className="font-book">VP of Operations: </b>
                  Kaan S&#252;mer
                </p>
                <p>
                  <b className="font-book">VP of Student Affairs: </b>
                  Owen Rocchi
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Academics</h1>
                <p>
                  <b className="font-book">Director:</b>Josh Cowan
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="">
                  <p>Khyle Sewpersaud</p>
                  <p>Kevin Yao</p>
                  <p>Mason Mazzocco</p>
                  <p>Nicole Hernandez</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Professional Development</h1>
                <p>
                  <b className="font-book">Director:</b>Nina Thaksee
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Shuran Cui</p>
                    <p>Julia Knott</p>
                    <p>Vanshita Uthra</p>
                    <p>Jordan Capello</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Internal Affairs</h1>
                <p>
                  <b className="font-book">Director:</b>High Tuckwell
                </p>
                <b className="font-book">Volunteers:</b>
                <p>Cain Susko</p>
                <p>Mercy Doan</p>
              </div>
            </div>

            {/* TEMPORARY - REVIEW LATER*/}
            {/* <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Year Representatives</h1>
                <p>
                  <b className="font-book">4th Year Representative:</b>Matthew
                  Vandergrift
                </p>
              </div>
            </div> */}

            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Events</h1>
                <p>
                  <b className="font-book">Director:</b>Jun Park
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="">
                  <p>Elise Donszelmann-Lund</p>
                  <p>Gavin Yan</p>
                  <p>Olivia Stewart</p>
                  <p>Vanessa Russell</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Socials</h1>
                <p>
                  <b className="font-book">Director:</b>Charlie Mayo
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="">
                  <p>Oran Chiarelli</p>
                  <p>Sareena Shrestha</p>
                  <p>Taryn Lu</p>
                  <p>Evan Cook</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Equity</h1>
                <p>
                  <b className="font-book">Director:</b>Sebastian Medrea
                </p>
                {/* <b className="font-book">Volunteers:</b> */}
                {/* TEMPORARY */}
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Finances</h1>
                <p>
                  <b className="font-book">Director:</b>Shrinidhi Krishnan
                </p>
                <b className="font-book">Volunteers:</b>
                <p>Dylan Letts</p>
                <p>Alankrit</p>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Marketing</h1>
                <p>
                  <b className="font-book">Director:</b>Anishka Barran
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Sophia Pagazani</p>
                    <p>Amanda Misek</p>
                    <p>Jasmine Zangeneh</p>
                  </div>
                  <div>
                    <p>Ethan Nguyen</p>
                    <p>Arthur Hu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-image" />
              <div className="box-content">
                <h1 className="font-book">Tech Team</h1>

                <p>
                  <b className="font-book">Directors:</b>Jade Wei & William
                  MacInnis
                </p>
                <b className="font-book">Volunteers:</b>
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Daniel Dousek</p>
                    <p>Kaleigh Feder</p>
                    <p>Sari Pagurek van Mossel</p>
                    <p>Lauren Lidhar</p>
                  </div>

                  <div>
                    <p>Rory Macdonald </p>
                    <p>Amanda Li</p>
                    <p>Sophia Perzan</p>
                    <p>Matthew Sharpe</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </seciton>
  );
}
