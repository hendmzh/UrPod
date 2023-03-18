import React, { useState } from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.png';

import './App.css';
import ScholarMate from './ScholarMate';
import PreviousPod from './PreviousPodcast';



function App() {

  return(
  <Container fluid className="bg-dark" style = {{height:"100vh"}}>

     <Router>
     <Row>
        <Col md={2}>
         <Sidebar />
         </Col>
         <Col md={10}>
         <Routes>
           <Route exact path="/" element={<ScholarMate/>} />
           <Route path="/previous" element={<PreviousPod />} />
    </Routes>

    </Col>
    
    /</Row>
     </Router>



  </Container>

  );
  }


export default App;
