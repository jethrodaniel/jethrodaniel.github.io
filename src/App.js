import React from 'react';
import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import {Terminal} from './components/Terminal.js'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/showme' component={() =>
            window.location ='https://jethrodaniel.com/showme'
          }/>
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md"></Navbar>

      <Container fluid={true} className="h-100">
        <Row>
          <Col md="3" className="d-none d-lg-block"></Col>
          <Col id="terminal">
            <Terminal value="Hello!"/>
          </Col>
          <Col md="3" className="d-none d-lg-block"></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
