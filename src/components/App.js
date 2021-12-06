import { HashRouter as Router } from "react-router-dom"
import { useState } from "react"
import Navigation from "./Navigation"
import Page from "./Page"
import "../styles/style.scss"

const App = () => {
  const [introDisplayed, setIntroDisplayed] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navigation setIntroDisplayed={setIntroDisplayed} />
        <Page
          introDisplayed={introDisplayed}
          setIntroDisplayed={setIntroDisplayed}
        />
      </Router>
    </div>
  )
}

export default App
