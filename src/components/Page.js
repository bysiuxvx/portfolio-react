import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { useHistory } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProjectsList from "./pages/ProjectsList"
import ErrorPage from "./pages/ErrorPage"
import Particles from "react-particles-js"
import { AnimatePresence } from "framer-motion"

const Page = ({ introDisplayed, setIntroDisplayed }) => {
  const history = useHistory()

  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDisplayed(true)
      history.push("/about")
    }, 5000)
    if (introDisplayed === true) return () => clearTimeout(timer)
  })

  return (
    <main>
      {introDisplayed ? "TRUE" : "FALSE"}
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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={ProjectsList} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </main>
  )
}

export default Page
