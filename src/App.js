import React, { Component } from 'react';
import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';

import {Terminal} from './components/Terminal.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/showme' component={() => window.location =
             'http://jethrodaniel.com/showme'}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

class HomePage extends Component {
  render() {
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
}
