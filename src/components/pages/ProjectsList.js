import React from 'react';
import '../../styles/projects.css';
import Project from './Project';
import toDoApp from '../../project pictures/todoapp_fullsize.jpg';
import weatherApp from '../../project pictures/weatherapp_fullsize.jpg';
import passwordGenerator from '../../project pictures/passwordgenerator_fullsize.jpg';

const ProjectsList = () => {
  const projects = [
    {
      name: 'To Do List',
      description: `My first React project. Building this application from scratch to final state took me probably around 30 hours over the course of around a week. I have spent a big portion of the time on styling the app, because I didn't like the initial version, and I changed it 2-3 times. I also experimented with different libraries to make the application as fun as possible.`,
      image: toDoApp,
      imageAlt: 'To Do list app picture',
      githubURL: 'https://github.com/bysiuxvx/ToDoApp',
      liveDemo: 'https://bysiuxvx.github.io/ToDoApp/',
    },
    {
      name: 'Weather app',
      description:
        'This was the first project I was really satisfied with. Looking back it is very simple, but I like the results, although everyone has different preferences when it comes to UI. It runs the API from OpenWeatherMap.',
      image: weatherApp,
      imageAlt: 'Weather app picture',
      githubURL: 'https://github.com/bysiuxvx/weather-app',
      liveDemo: 'https://bysiuxvx.github.io/weather-app/',
    },
    {
      name: 'Password generator',
      description:
        'Just a simple password generator, not much to say about it. Perfect for simple and quick usage! No one is ever going to hack your account or decrypt your important files again with a password from this baby.',
      image: passwordGenerator,
      imageAlt: 'Password generator app picture',
      githubURL: 'https://github.com/bysiuxvx/password-generator',
      liveDemo: 'https://bysiuxvx.github.io/password-generator/',
    },
    {
      name: 'This website!',
      description:
        "Even though using React for such a small website seems to be overkill, I decided to do it anyway - I wanted to prove my React skills. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though.",
      image: passwordGenerator,
      imageAlt: 'This website picture',
    },
  ];

  const projectsList = projects.map((project) => (
    <Project list={project} key={project.name} />
  ));

  return (
    <div className="projects-page">
      <h2>My favorite projects</h2>
      {projectsList}
    </div>
  );
};

export default ProjectsList;
