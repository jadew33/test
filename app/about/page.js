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
                <b className="font-book">Interns: </b>
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Arpit Burgess</p>
                    <p>Andreea Cobzaru</p>
                    <p>Divyanshi Agarwal</p>
                  </div>
                  <div>
                    <p>Ethan Lacey</p>
                    <p>Michelle Shi</p>
                    <p>Sandy Mourad</p>
                  </div>
                </div>
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
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Danne Mohamed</p>
                    <p>Khyle Sewpersaud</p>
                    <p>Kevin Yao</p>
                  </div>
                  <div>
                    <p>Mason Mazzocco</p>
                    <p>Nicole Hernandez</p>
                  </div>
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
                    <p>Amanda Cao</p>
                    <p>Colin McLaughlin</p>
                    <p>Gurpreet Singh</p>
                    <p>Jordan Capello</p>
                  </div>
                  <div>
                    <p>Julia Knott</p>
                    <p>Momin Alvi</p>
                    <p>Shuran Cui</p>

                    <p>Vanshita Uthra</p>
                  </div>
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
                <p>Christian Highnam</p>
                <p>Mercy Doan</p>

                <p>Zara Kazi</p>
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
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Elise Donszelmann-Lund</p>
                    <p>Gavin Yan</p>
                    <p>Olivia Stewart</p>
                  </div>
                  <div>
                    <p>Ruby Wang</p>
                    <p>Vanessa Russell</p>
                  </div>
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
                <div className="volunteers-overflow">
                  <div className="first">
                    <p>Evan Cook</p>
                    <p>Oran Chiarelli</p>
                    <p>Sareena Shrestha</p>
                  </div>
                  <div>
                    <p>Shravan Agnihotri</p>
                    <p>Taryn Lu</p>
                  </div>
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
                <b className="font-book">Volunteers:</b>
                <p>Emily Cheng</p>
                <p>Utkarsh Verma</p>
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
                <p>Alankrit</p>
                <p>Dylan Letts</p>

                <p>Michael Liu</p>
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
                    <p>Amanda Misek</p>
                    <p>Arthur Hu</p>
                    <p>Arthur Ng</p>
                    <p>Ethan Nguyen</p>
                    <p>Farhaan Ali</p>
                    <p>Gabrielle Garey</p>
                  </div>
                  <div>
                    <p>Hashim Iftikhar</p>
                    <p>Jasmine Zangeneh</p>
                    <p>Lacshmi Ganeshananda</p>
                    <p>Rojina Ebrahmizadeh</p>
                    <p>Sophia Pagazani</p>
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
                    <p>Anthony Qiu</p>
                    <p>Amanda Li</p>
                    <p>Daniel Dousek</p>
                    <p>Ethan Chankowsky</p>
                    <p>Farhaan Ali</p>
                    <p>Kaleigh Feder</p>
                  </div>

                  <div>
                    <p>Lauren Lidhar</p>
                    <p>Lacshmi Ganeshananda</p>
                    <p>Matthew Sharpe</p>
                    <p>Rory Macdonald </p>
                    <p>Sari Pagurek van Mossel</p>
                    <p>Sophia Perzan</p>
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
