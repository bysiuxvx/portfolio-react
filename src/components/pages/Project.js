import React from "react"
import { FaGithub } from "react-icons/fa"

const Project = (props) => {
  const { name, description, image, imageAlt, liveDemo, githubURL } = props.list

  return (
    <div
      className="projects-block"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-320vh" }}
      transition={{ duration: 0.7 }}
    >
      <div className="projects-container">
        <img
          src={image}
          alt={imageAlt}
          onClick={(event) => {
            window.open(liveDemo, "_blank")
          }}
          onAuxClick={(event) => {
            window.open(liveDemo, "_blank")
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
              window.open(liveDemo, "_blank")
            }}
            onAuxClick={(event) => {
              window.open(liveDemo, "_blank")
            }}
          >
            Demo
          </h4>
          <FaGithub
            className="github"
            onClick={(event) => {
              window.open(githubURL, "_blank")
            }}
            onAuxClick={(event) => {
              event.preventDefault()
              window.open(githubURL, "_blank")
            }}
          />
        </div>
      </div>
      <div className="project-link-container-large">
        <h4
          className="live-demo"
          onClick={(event) => {
            window.open(liveDemo, "_blank")
          }}
          onAuxClick={(event) => {
            window.open(liveDemo, "_blank")
          }}
        >
          Demo
        </h4>
        <FaGithub
          className="github"
          onClick={(event) => {
            window.open(githubURL, "_blank")
          }}
          onAuxClick={(event) => {
            window.open(githubURL, "_blank")
          }}
        />
      </div>
    </div>
  )
}

export default Project
