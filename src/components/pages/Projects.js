import React from 'react';
import '../../styles/projects.css';
import Project from './Project';
import toDoApp from '../../project pictures/todoapp_small.jpg';
import weatherApp from '../../project pictures/weatherapp_small.jpg';
import passwordGenerator from '../../project pictures/passwordgenerator_small.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'To Do List',
      description:
        'My first "complex" React project. Building this application from scratch to final state took me probably around 20 hours over the course of around a week. I have spent a big portion of the time experimenting with different libraries to make the application as fun as possible.',
      image: toDoApp,
      imageAlt: 'To Do list app picture',
      githubURL: 'https://github.com/bysiuxvx/ToDoApp',
      liveDemo: 'https://bysiuxvx.github.io/ToDoApp/',
    },
    {
      name: 'Weather app',
      description:
        'This was the first project I was really satisfied with. Looking back it is very simple, but I like the results, although everyone has different preferences when it comes to UI.',
      image: weatherApp,
      imageAlt: 'Weather app picture',
      githubURL: 'https://github.com/bysiuxvx/weather-app',
      liveDemo: 'https://bysiuxvx.github.io/weather-app/',
    },
    {
      name: 'Password generator',
      description:
        'Just a simple password generator, not much to say about it. Perfect for simple and quick usage!',
      image: passwordGenerator,
      imageAlt: 'Password generator app picture',
      githubURL: 'https://github.com/bysiuxvx/password-generator',
      liveDemo: 'https://bysiuxvx.github.io/password-generator/',
    },
    {
      name: 'This website!',
      description:
        'Even though using React for such a small website seems to be overkill, I decided to do it anyway - I wanted to prove my React skills. This is the first time I designed a website mobile first.',
      image: passwordGenerator,
      imageAlt: 'This website picture',
    },
  ];

  const projectsList = projects.map((project) => (
    <Project list={project} key={project.name} />
  ));

  return (
    <div className="projects-page">
      <h2>Projects I'm proud of</h2>
      {projectsList}
    </div>
  );
};

export default Projects;
