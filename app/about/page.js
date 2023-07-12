import "../styles/about.scss";

export default function About() {
  return (
    <seciton className='aboutSection'>
      <section className='top'>
        <image className='image'>
          <section className='top-text'>
            <h6>
              <span>WHAT IS </span>
              <span className='compsa'>COMPSA?</span>
            </h6>
            <p className='p-1'>
              Queen’s University Computing Students’ Association (COMPSA) is the student government for Queen’s University School of Computing.
            </p>
            <p className='p-2'>
              We organize social events, workshops, information sessions, and work together with the faculty to advocate for Computing students'
              needs.
            </p>
          </section>
        </image>
      </section>
      <section className='bottom'></section>
    </seciton>
  );
}
