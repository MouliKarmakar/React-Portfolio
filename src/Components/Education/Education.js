import React from "react";
import "./styles.scss";

function Education({ ref }) {
  return (
    <div id="education" ref={ref} className="education">
      <h1>EDUCATION</h1>
      <div className="content">
        <div className="my-education">
          <section>
            My educational journey has been a progression marked by curiosity,
            growth, and academic achievement. I started at Baidya Nath
            Institution for Girls High School, completing my secondary education
            in 2017. Building on this foundation, I excelled in my Higher
            Secondary at Kholisha Kota Adarsha Vidyalaya for Girls in 2019.
          </section>
          <br />
          <section>
            Taking my passion for learning further, I pursued a Bachelor's
            degree in Geography at Sarojini Naidu College for Women, graduating
            in 2022. This phase not only refined my analytical skills but also
            deepened my appreciation for the complexities of our world.
          </section>
          <br />
          <section>
            This portfolio encapsulates my dedication to academic excellence and
            showcases the evolution from a high school graduate to a Bachelor of
            Science in Geography.
          </section>
        </div>
        <img
          className="educationImg"
          src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          alt="educationImg"
        />
      </div>
    </div>
  );
}

export default Education;
