import { HashRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import Page from "./Page"
import "../styles/style.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Page />
      </Router>
    </div>
  )
}

export default App
