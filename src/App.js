import React, { useState } from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import ScholarMate from './ScholarMate';



function App() {

  const [insightsOpen, setInsightsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [finderOpen, setFinderOpen] = useState(false);

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
