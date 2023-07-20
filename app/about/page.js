import "../styles/about.scss";
import testImage from "../about/test.jpeg";

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
      <section className='bottom'>
        <div class='title-container'>
          <div class='title-line'></div>
          <h6>MEET THE TEAM</h6>
          <div class='title-line'></div>
        </div>

        <section className='box-container'>
          <div class='box'>
            <div class='box-image'>
              <img src={testImage} alt='description of image' />
            </div>
            <div class='box-content'>
              <h6>Exucutives</h6>
              <div>
                <span class='title'>Title</span>
              </div>
              <div>
                <span class='title'>President:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>

              <button class='btn'>HomePage</button>
            </div>
          </div>
          <div class='box'>
            <div class='box-image'></div>
            <div class='box-content'>
              <h6>Exucutives</h6>
              <div>
                <span class='title'>Title</span>
              </div>
              <div>
                <span class='title'>President:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>

              <button class='btn'>HomePage</button>
            </div>
          </div>
          <div class='box'>
            <div class='box-image'></div>
            <div class='box-content'>
              <h6>Exucutives</h6>
              <div>
                <span class='title'>Title</span>
              </div>
              <div>
                <span class='title'>President:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>

              <button class='btn'>HomePage</button>
            </div>
          </div>
          <div class='box'>
            <div class='box-image'></div>
            <div class='box-content'>
              <h6>Exucutives</h6>
              <div>
                <span class='title'>Title</span>
              </div>
              <div>
                <span class='title'>President:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>
              <div>
                <span class='title'>Title:</span>
                <span>text</span>
              </div>

              <button class='btn'>HomePage</button>
            </div>
          </div>
        </section>
      </section>
    </seciton>
  );
}
