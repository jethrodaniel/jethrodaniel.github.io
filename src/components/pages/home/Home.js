import React from 'react';

import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap';

import './Home.css';

import {Terminal} from '../../Terminal.js'

const HomePage = () => {
  return (
    <div id="home-page">
      <Navbar color="dark" dark expand="md"/>;
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

export default HomePage;
