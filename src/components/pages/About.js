import React from "react"

import { motion } from "framer-motion"
import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"

import { AiOutlineFilePdf } from "react-icons/ai"

import SvgBootstrap4 from "../../icon-components/Bootstrap4"
import SvgDocker from "../../icon-components/Docker"
import SvgNextjs2 from "../../icon-components/Nextjs2"
import SvgReact2 from "../../icon-components/React2"
import SvgRedux from "../../icon-components/Redux"
import SvgSass1 from "../../icon-components/Sass1"
import SvgTypescript from "../../icon-components/Typescript"

import picture_main from "../../about_pictures/img-7451.jpg"
import Resume from "../../pdf/pbcv.pdf"

import "tippy.js/dist/tippy.css"

const About = () => {
  const svgContent = [
    {
      name: "React",
      image: SvgReact2,
      imageAlt: "React logo",
      rating: "To be honest? Pure love! :)",
    },
    {
      name: "TypeScript",
      image: SvgTypescript,
      imageAlt: "TypeScript logo",
      rating: "Getting used to it, I see it's usefulness.",
    },
    {
      name: "Next.js",
      image: SvgNextjs2,
      imageAlt: "Next.js logo",
      rating:
        "I like it, but if there's localization involved (for example i18n) then working with the text for the app is pure hell ( ° -°)",
    },
    {
      name: "Redux",
      image: SvgRedux,
      imageAlt: "Redux logo",
      rating:
        "Love / hate relationship. I wish every Redux project was at least based on Redux Toolkit, it would be so much clearer ( ͡° ͜ʖ ͡°)",
    },
    {
      name: "Sass",
      image: SvgSass1,
      imageAlt: "Sass logo",
      rating:
        "10/10, that's the reason why this portfolio is so beautiful [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
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
      imageAlt: "Bootstrap logo",
      rating:
        "Not a big fan of bootstrap, personally I prefer semantic UI, which in my opinion is both prettier and more modern, but also easier to use.",
    },
  ]

  const technologies = svgContent.map((technology) => (
    <Tippy
      content={technology.rating}
      followCursor={true}
      plugins={[followCursor]}
    >
      <div className="svg-wrapper" key={technology.name}>
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
              purely on maintenance. Also routine completely kills my vibe.
              Programming is giving me huge amounts of fun and satisfaction.
              Seeing how something that I wrote myself works is giving me the
              type of pleasure I haven't felt for a long time.
            </p>
            <p className="p-tech">
              Technologies I am familiar with and use on a daily basis:
            </p>
            <div className="svg-section">
              <div className="svg-container">{technologies}</div>
            </div>
            <p>
              My free time I either spend relaxing with my dog, learning
              something new, or playing guitar. I used to play in a band and
              even released two records on vinyl. I am also a bit of a gamer.
              Besides the mentioned, I also interested in electronics and with
              the help of tutorials I've built small devices like guitar effects
              - most of them worked...
            </p>
            <div className="anchor-container">
              <a
                className="resume-anchor"
                href={Resume}
                download="Patryk Byszek CV"
              >
                Please, grab my resume! <AiOutlineFilePdf className="pdf-svg" />
              </a>
            </div>
            <h3>Let me hear from you!</h3>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About
