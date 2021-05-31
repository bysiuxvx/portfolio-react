import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = (props) => {
  const { name, description, image, imageAlt, liveDemo, githubURL } =
    props.list;

  return (
    <div className="projects-block">
      <div className="projects-container">
        <img
          src={image}
          alt={imageAlt}
          onClick={(event) => {
            window.open(liveDemo, '_blank');
          }}
          onAuxClick={(event) => {
            window.open(liveDemo, '_blank');
          }}
        />
        <div className="project-name">
          <h3>{name}</h3>
        </div>
        <p>{description}</p>
        <div className="project-link-container">
          <h4
            className="live-demo"
            onClick={(event) => {
              window.open(liveDemo, '_blank');
            }}
            onAuxClick={(event) => {
              window.open(liveDemo, '_blank');
            }}>
            Demo
          </h4>
          <FaGithub
            className="github"
            onClick={(event) => {
              window.open(githubURL, '_blank');
            }}
            onAuxClick={(event) => {
              window.open(githubURL, '_blank');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
