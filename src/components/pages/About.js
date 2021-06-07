import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-timezone';
import picture_main from '../../about_pictures/img-7451.jpg';
import '../../styles/about.css';

const About = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  const bDayCountdown = () => {
    const bDay = moment('2021-07-16');
    const now = moment();
    const difference = bDay - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  };

  useEffect(() => {
    bDayCountdown();
    return () => {};
  });

  return (
    <>
      <div className="about">
        <div className="about-wrapper">
          <div
            className="picture-container"
            style={{
              backgroundImage: `url(${picture_main})`,
            }}
          />
          <div className="text-container">
            <h2>Hi again, my name is Patryk</h2>
            <p>
              I've been working in IT for the last 8 years on several positions,
              from local / remote support to IT/system admin.
            </p>
            <p>
              My reasons for wanting to become a developer are simple - I would
              love to work creatively, to take part in building things,
              something I never had the chance to do in my career. My previous
              work focused on maintaining systems that already exist.{' '}
            </p>
            <p>
              I started programming late into 2020 during the pandemic because I
              wanted to change something in my life and career, I wanted to try
              out new things. Though the learning process was not always
              consistent due to the limited time I had. My dream is to become a
              developer, with a small goal of achieving this{' '}
              <strong>before my 30th birthday.</strong> Which means you have{' '}
              <strong className="birthday">{daysLeft} days left</strong> to{' '}
              <span style={{ textDecoration: 'underline' }}>
                offer me a job
              </span>{' '}
              in order to help me with this goal! Though my main goal is to bea
              able to get knowledge on a full time basis.
            </p>
            <p>
              Programming is giving me huge amounts of fun and satisfaction.
              Seeing how something that I wrote myself works is giving me the
              type of pleasure I haven't felt for a long time. The only time I
              get a little bit frustrated is when I can't align some things in
              the layout. Conceptualizing and styling this page probably took me
              longer than writing the logic..{' '}
              <span style={{ whiteSpace: 'nowrap' }}>¯\_( ° -°)_/¯</span>
            </p>
            <p>
              My free time I either spend relaxing with my dog, learning
              something new about front-end, or playing guitar. I used to play
              in a band and even released two records on vinyl. A year ago I'd
              probably call myself a bit of a gamer, but because my free time is
              very limited I prefer spending it on learning stuff. I'm also
              interested in electronics and taught myself through tutorials to
              build small devices like guitar effects - most of them worked...
            </p>
            <h3>Come on, let me hear from you!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
