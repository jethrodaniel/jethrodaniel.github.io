import React from 'react';

import {
  Col,
  Container,
  Navbar,
  Row
} from 'reactstrap';

import './Resume.css';

const Resume = () => {
  return (
    <div id="resume-page">
      <Navbar color="light" expand="md"/>
      <Container fluid={true} className="h-100">
        <Row>
          <Col md="3" className="d-none d-lg-block"></Col>
          <Col id="">
            <p>Hello! Lorem Ipsum.</p>
          </Col>
          <Col md="3" className="d-none d-lg-block"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
