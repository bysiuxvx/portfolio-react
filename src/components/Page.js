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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("pushing")
  //   }, 5000)
  //   return () => {
  //     if (introDisplayed === true) {
  //       clearTimeout(timer)
  //       console.log("cleared")
  //     } else {
  //       history.push("/about")
  //       setIntroDisplayed(true)
  //     }
  //   }
  // })

  useEffect(() => {
    const timer = setTimeout(() => {
      location.pathname.length > 2
        ? console.log("tak")
        : // ? clearTimeout(timer)
          console.log(location.pathname)
      // history.push("/about")
      // if (location.pathname.length === 1) {
      //   // history.push("/about")
      //   alert("yo")
      //   setIntroDisplayed(true)
      // } else {
      //   setIntroDisplayed(true)
      //   clearTimeout(timer)
      // }
    }, 5000)
    // return () => {
    //   clearTimeout(timer)
    // }
  }, [])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIntroDisplayed(true)
  //     history.push("/about")
  //   }, 5000)
  //   if (introDisplayed === true) return () => clearTimeout(timer)
  // })

  return (
    <main>
      {introDisplayed ? "TRUEEEEEEEE11111111" : "FALSE00000000000000000000"}{" "}
      {location.pathname.length}
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
