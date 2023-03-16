import React, { useState } from 'react';

import {Toast, Container, Button, Row, Col, Form, InputGroup} from 'react-bootstrap';

import './App.css';


const App = () => (
  <Container fluid className="p-3  bg-dark">
    <Row>

    <Col md={2}>
    <Container className="p-5 mb-4 bg-light rounded-3">
      
    </Container>

    </Col>

    <Col md={10}>
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Scholar's Mate</h1>
      <Container>
        Input research paper

      <InputGroup>
        <InputGroup.Text>Links</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

        <span right role="img" aria-label="tada">

        <Button>Submit</Button>
         
        </span>
      </Container>
    </Container>

    </Col>

    </Row>
  </Container>
);

export default App;
