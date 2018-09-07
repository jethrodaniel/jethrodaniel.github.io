import React, { Component } from 'react';
import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap';

import './App.css';

import {Terminal} from './components/Terminal.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
