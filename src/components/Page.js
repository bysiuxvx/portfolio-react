import React, { useState, useRef, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectsList from './pages/ProjectsList';
import ErrorPage from './pages/ErrorPage';
import '../styles/page.css';

const Page = () => {
  const [redirect, setRedirect] = useState(false);

  let interval = useRef();

  const redirectCountdown = () => {
    if (!redirect) {
      let time = 0;
      interval = setInterval(() => {
        time++;

        if (time > 5) {
          setRedirect(true);
          clearInterval(interval.current);
        }
      }, 1000);
    }
  };
  useEffect(() => {
    redirectCountdown();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <main>
      <Switch>
        {redirect ? (
          <Route path="/" exact component={Home}>
            <Redirect to="/about" />
          </Route>
        ) : (
          <Route path="/" exact component={Home} />
        )}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={ProjectsList} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

export default Page;
