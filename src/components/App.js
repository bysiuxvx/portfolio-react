import '../styles/app.css';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Page />
      </Router>
    </div>
  );
}

export default App;
