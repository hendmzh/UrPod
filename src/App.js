import React, { useState } from 'react';

import {Container, Col, Row} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import ScholarMate from './ScholarMate';


function App() {

  return(
  <Container fluid className="p-3  bg-dark">
     <Row>
       <Col md={2}>
    <Router>
        <Sidebar />
    </Router>

    </Col>

    <Col md={10}>

    <ScholarMate/>
    </Col>

    </Row>

  </Container>

);

}

export default App;
