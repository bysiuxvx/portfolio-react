import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectsList from './pages/ProjectsList';
import ErrorPage from './pages/ErrorPage';
import '../styles/page.css';

function Page() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={ProjectsList} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default Page;
