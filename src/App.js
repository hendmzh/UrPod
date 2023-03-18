import React, { useState } from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.png';

import './App.css';
import ScholarMate from './ScholarMate';



function App() {

  return(
  <Container fluid className="bg-dark" style = {{height:"100vh"}}>

<ScholarMate/>


  </Container>

  );
  }


export default App;
