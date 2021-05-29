import React from 'react';
import Typewriter from 'typewriter-effect';
import '../../styles/home.css';

function Home() {
  return (
    <>
      <div className="home">
        <div className="text-container">
          <h2>
            <Typewriter
              options={{ cursor: '' }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .typeString('Hello World!')
                  .pauseFor(500)
                  .deleteChars('6')
                  .typeString('future employer!')
                  .pauseFor(500)
                  .deleteChars('16')
                  .pauseFor(500)
                  .typeString('fan!')
                  .pauseFor(500)
                  .deleteChars('4')
                  .pauseFor(500)
                  .typeString('mom!')
                  .pauseFor(500)
                  .deleteChars('4')
                  .typeString('World!')
                  .start();
              }}
            />
          </h2>
        </div>
        <div className="text-container">
          <p>
            <Typewriter
              options={{ cursor: '' }}
              onInit={(typewriter) => {
                typewriter

                  .pauseFor(3500)
                  .typeString('I hope you will enjoy what you see!<br/>')
                  .pauseFor(1000)
                  .typeString('All of my projects are stolen')
                  .pauseFor(1000)
                  .deleteChars(10)
                  .pauseFor(1000)
                  .typeString('<strong>were created</strong> by me!')
                  .start();
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
