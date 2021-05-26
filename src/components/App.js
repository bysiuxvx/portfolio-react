import '../styles/app.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Page />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
