import '../styles/app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Page />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
