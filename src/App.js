import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Resume from './components/pages/resume/Resume.js'
import HomePage from './components/pages/home/Home.js'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

const NoMatch = ({location}) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

export default App;
