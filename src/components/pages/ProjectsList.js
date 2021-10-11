import React from "react"
import "../../styles/projects.css"
import Project from "./Project"
import toDoApp from "../../project_pictures/todoapp_fullsize.jpg"
import weatherApp from "../../project_pictures/weatherapp_fullsize.jpg"
import passwordGenerator from "../../project_pictures/passwordgenerator_fullsize.jpg"
import thisPic from "../../project_pictures/this.jpg"
import movieBrowser from "../../project_pictures/movie_browser.jpg"

const ProjectsList = () => {
  const projects = [
    {
      name: "Movie Browser - work in progress",
      description: `A simple movie browser running the OMDB API created in React. It is working properly already, although the styling is not yet responsive. I first need to figure out how I want this app to look like in the end. Also I am planning to add a favorites list, that will be displayed in a retractable tab.`,
      image: movieBrowser,
      imageAlt: "Movie browser picture",
      githubURL: "https://github.com/bysiuxvx/movie-browser-react",
      liveDemo: "https://bysiuxvx.github.io/movie-browser-react/",
    },
    {
      name: "To Do List",
      description: `My first React project. Building this application from scratch to final state took me probably around 30 hours over the course of around a week. I have spent a big portion of the time on styling the app, because I didn't like the initial version, and I changed it 2-3 times. I also experimented with different libraries along the way.`,
      image: toDoApp,
      imageAlt: "To Do list app picture",
      githubURL: "https://github.com/bysiuxvx/ToDoApp-react",
      liveDemo: "https://bysiuxvx.github.io/ToDoApp-react/",
    },
    {
      name: "Weather app",
      description:
        "This was the first project I was really satisfied with. Looking back at it, it is very simple, but I like the results, although everyone has different preferences when it comes to UI. It runs the API of OpenWeatherMap.",
      image: weatherApp,
      imageAlt: "Weather app picture",
      githubURL: "https://github.com/bysiuxvx/weather-app",
      liveDemo: "https://bysiuxvx.github.io/weather-app/",
    },
    {
      name: "Password generator",
      description:
        "Just a simple password generator, not much to say about it. Perfect for simple and quick usage! No one is ever going to hack your account or decrypt your important files again with a password from this baby.",
      image: passwordGenerator,
      imageAlt: "Password generator app picture",
      githubURL: "https://github.com/bysiuxvx/password-generator",
      liveDemo: "https://bysiuxvx.github.io/password-generator/",
    },
    {
      name: "This website!",
      description:
        "Even though using React for such a small website seems to be overkill, I decided to do it anyway - I wanted to test my React skills. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though.",
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
    <div className="projects-page">
      <h2>Selected stuff that I made</h2>
      {projectsList}
    </div>
  )
}

export default ProjectsList
