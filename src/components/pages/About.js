import React from 'react';
import moduleName from 'module';
import '../../styles/about.css';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="picture">PICTURE?</div>
        <div className="text-container">
          <h2>Hi again, my name is Patryk</h2>
          <p>
            I've been working in IT for the last 8 years on several positions,
            from local support to IT/server admin.
          </p>

          <p>
            My reasons for wanting to become a developer are simple, I would
            love to work creatively, to take part in building things - something
            I never did in my career. My previous work concentrated around
            maintaining systems that already exist.{' '}
          </p>
          <p>
            I started programming late 2020 during the pandemic due to having a
            lot of time on my hands and wanting to change something in my life
            and career. My dream is to become a developer, with a small goal of
            achieving this before my 30th birthday. Which means you have
            ****DAYS*** left to give me a job in order to help me with this
            goal!
          </p>
          <p>
            In my free time I enjoy playing guitar, I used to play in a band and
            even released two records on vinyl. I'm also interested in
            electronics and taught myself to build small devices like guitar
            effects / pedals.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
