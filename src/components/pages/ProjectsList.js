import React from "react"
import Project from "./Project"
import toDoApp from "../../project_pictures/todoapp_fullsize.jpg"
import weatherApp from "../../project_pictures/weatherapp_fullsize.jpg"
import passwordGenerator from "../../project_pictures/passwordgenerator_fullsize.jpg"
import thisPic from "../../project_pictures/this.jpg"
import unsplashBrowser from "../../project_pictures/unsplash_browser.jpg"
import bookstore from "../../project_pictures/bookstore.jpg"
import movieBrowser from "../../project_pictures/movie_browser.jpg"

import { motion } from "framer-motion"

const ProjectsList = () => {
  const projects = [
    {
      name: "Movie Browser",
      description: `A movie browser running the OMDB API created in React, using Zustand for state management. Interface made with Semantic UI. Includes favorite list and allows users to rate movies. Keeps the data even after reloading the page.`,
      image: movieBrowser,
      imageAlt: "Movie browser",
      githubURL: "https://github.com/bysiuxvx/react-movie-browser",
      liveDemo: "https://bysiuxvx.github.io/react-movie-browser/",
    },
    {
      name: "Unsplash image browser",
      description: `A cool project I did as part of a recruitment process. The app uses Redux, allows storing favorite pictures which are then accessible also after page reload. Cool stuff :)`,
      image: unsplashBrowser,
      imageAlt: "Image browser",
      githubURL: "https://github.com/bysiuxvx/image-search-unsplash",
      liveDemo: "https://bysiuxvx.github.io/image-search-unsplash/",
    },
    {
      name: "React Typescript Bookstore",
      description: `Part of a recruitment process. Redux State, form validation in the checkout. This was a hard one, but I also enjoyed it and feel that I learned something new too. It's not beautiful though, but that was not the focus.`,
      image: bookstore,
      imageAlt: "Bookstore image",
      githubURL: "https://github.com/bysiuxvx/Bookstore",
      liveDemo: "https://github.com/bysiuxvx/Bookstore",
    },

    {
      name: "To Do List",
      description: `My first React project. I have spent a big portion of the time on styling the app, because I didn't like the initial version, and I changed it 2-3 times. I also experimented with different libraries along the way.`,
      image: toDoApp,
      imageAlt: "To Do list app picture",
      githubURL: "https://github.com/bysiuxvx/ToDoApp-react",
      liveDemo: "https://bysiuxvx.github.io/ToDoApp-react/",
    },
    {
      name: "Weather app",
      description:
        "Very basic weather app. Not much to say about it, it was one of my first apps where I paid at least a little bit of attention to the optics. It runs the API of OpenWeatherMap.",
      image: weatherApp,
      imageAlt: "Weather app picture",
      githubURL: "https://github.com/bysiuxvx/weather-app",
      liveDemo: "https://bysiuxvx.github.io/weather-app/",
    },
    {
      name: "Password generator",
      description:
        "Just a simple password generator. Perfect for simple and quick usage! No one is ever going to hack your account or decrypt your important files again with a password from this baby.",
      image: passwordGenerator,
      imageAlt: "Password generator app picture",
      githubURL: "https://github.com/bysiuxvx/password-generator",
      liveDemo: "https://bysiuxvx.github.io/password-generator/",
    },
    {
      name: "This website!",
      description:
        "Even though using React for such a small website seems to be an overkill, I decided to do it anyway. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though - I got the inspiration from the message clouds from popular messaging apps.",
      image: thisPic,
      imageAlt: "This website picture",
      githubURL: "https://github.com/bysiuxvx/portfolio",
      liveDemo: "https://portfolio-pb.herokuapp.com/#/",
    },
  ]

  const projectsList = projects.map((project) => (
    <Project list={project} key={project.name} />
  ))

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-320vh" }}
      transition={{ duration: 0.7 }}
    >
      <h2>Selected stuff that I made</h2>
      {projectsList}
    </motion.div>
  )
}

export default ProjectsList
