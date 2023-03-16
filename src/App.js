import React, { useState } from 'react';

import {Container, Button, Row, Col, Card, Accordion} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';


const App = () => (
  <Container fluid className="p-3  bg-dark">
     <Row>
       <Col md={2}>
    <Router>
        <Sidebar />
    </Router>

    </Col>

    <Col md={10}>

    <Container className="p-5 mb-4 bg-dark rounded-3">
      <h1 className="header text-light" variant="light">Scholar's Mate</h1>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      
      <Container>
      <h6 className="header text-light" variant="light">What can we do today?</h6> 
      </Container>
      <br>
      </br>

      <Card bg= "secondary" style={{ width: '25rem' }} text='white'>
      <Card.Body>Quick insights</Card.Body>
    </Card>

    <br>
      </br>

      <Card bg= "secondary" style={{ width: '25rem' }} text='white'>
      <Card.Body>Chat about a paper</Card.Body>
    </Card>

    <br>
      </br>
      
    <Card bg= "secondary" style={{ width: '25rem' }} text='white'>
      <Card.Body>Paper finder</Card.Body>
    </Card>


    {/* <Accordion defaultActiveKey="0" className="p-5 mb-4 bg-dark rounded-3" style={{ width: '25rem' }} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}

    </Container>
    </Col>


    </Row>

  </Container>

);

export default App;
