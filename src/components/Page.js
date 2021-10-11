import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { useHistory } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProjectsList from "./pages/ProjectsList"
import ErrorPage from "./pages/ErrorPage"
import "../styles/page.css"
import Particles from "react-particles-js"

const Page = () => {
  const [homeDisplayed, setHomeDisplayed] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (homeDisplayed === false) {
      setTimeout(() => {
        history.push("/about")
      }, 22000)

      return () => setHomeDisplayed(true)
    } else return
  })

  return (
    <main>
      <Particles
        params={{
          particles: {
            number: {
              value: 35,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        style={{}}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={ProjectsList} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  )
}

export default Page
