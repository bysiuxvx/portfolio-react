import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"

import SvgBootstrap4 from "../../icons/Bootstrap4"
import SvgDocker from "../../icons/Docker"
import SvgNextjs2 from "../../icons/Nextjs2"
import SvgReact2 from "../../icons/React2"
import SvgRedux from "../../icons/Redux"
import SvgSass1 from "../../icons/Sass1"
import SvgTypescript from "../../icons/Typescript"

import picture_main from "../../about_pictures/img-7451.jpg"

import "tippy.js/dist/tippy.css"

const About = () => {
  const svgContent = [
    {
      name: "React",
      image: SvgReact2,
      // image: SvgReact,
      imageAlt: "React logo",
      rating: "To be honest? Pure love! :)",
    },
    {
      name: "TypeScript",
      image: SvgTypescript,
      imageAlt: "TypeScript logo",
      rating: "Kinda annoying but I see it's usefulness. ",
    },
    {
      name: "Next.js",
      image: SvgNextjs2,
      // image: SvgNextJs,
      imageAlt: "Next.js logo",
      rating:
        "I like it, though trying to find something in the code by the text is pure hell XD",
    },
    {
      name: "Redux",
      image: SvgRedux,
      imageAlt: "Redux logo",
      rating:
        "Love / hate relationship. I wish every Redux project was based on Redux Toolkit, it would be so much clearer ;).",
    },
    {
      name: "Sass",
      image: SvgSass1,
      // image: SvgSass,
      imageAlt: "Sass logo",
      rating: "10/10, that's the reason why this portfolio is so beautiful ;)",
    },
    {
      name: "Docker",
      image: SvgDocker,
      imageAlt: "Docker logo",
      rating:
        "I like it when it doesn't cause compatibility and hot reload issues with Windows, which is almost never :D",
    },
    {
      name: "Bootstrap",
      image: SvgBootstrap4,
      // image: SvgBootstrap,
      imageAlt: "Bootstrap logo",
      rating:
        "Haven't worked too much in it, but I like the fact that it allows fast page building.",
    },
  ]

  const technologies = svgContent.map((technology) => (
    <Tippy
      content={(technology.name, technology.rating)}
      followCursor={true}
      plugins={[followCursor]}
    >
      <div className="svg-wrapper">
        <technology.image className="svg-element" />
      </div>
    </Tippy>
  ))

  return (
    <>
      <motion.div
        className="about"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100vh" }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-wrapper">
          <div
            className="picture-container"
            style={{
              backgroundImage: `url(${picture_main})`,
            }}
          />
          <div className="content-container">
            <h2>Hi again, I'm Patryk nice to meet you!</h2>
            <p>
              I'm a junior frontend developer, with over a year of hobbyist
              experience. But that changed in August of 2021 - when I took a big
              step into the unknown and started my internship in a German
              startup :)
            </p>
            <p>
              Apart from my current programming experience, I've been working in
              IT for the last 8 years on several positions, from local and
              remote support to IT/system admin.
            </p>
            <p>
              My reasons for wanting to become a developer are simple - I love
              to work creatively, to take part in building things, something I
              never had the chance to do in my career. My previous work focused
              on maintaining systems that already exist. Also routine completely
              kills my vibe.
            </p>
            <p>
              I started programming because I wanted to change something in my
              life and career, I wanted to try out new things. Though the
              learning process was not always consistent due to the limited time
              I had.
            </p>
            <p>
              Programming is giving me huge amounts of fun and satisfaction.
              Seeing how something that I wrote myself works is giving me the
              type of pleasure I haven't felt for a long time. The only time I
              get a little bit frustrated is when I can't align some things in
              the layout. Conceptualizing and styling this page probably took me
              longer than writing the logic..{" "}
              <span style={{ whiteSpace: "nowrap" }}>¯\_( ° -°)_/¯</span>
            </p>
            <p>Technologies I am familiar with and work on a daily basis:</p>
            <div className="svg-container">{technologies}</div>
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
      </motion.div>
    </>
  )
}

export default About
