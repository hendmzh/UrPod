import React, { useState } from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form} from 'react-bootstrap';

import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchDataCompletion } from './APIConnection';

import './App.css';



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
      <Container>
    <Button
        onClick={() => setInsightsOpen(!insightsOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={insightsOpen}
        variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
        className="text-left"
      >
        <i className="fas fa-lightbulb"></i>
          Quick Insights
      </Button>
      <Collapse in={insightsOpen}>
      <Card bg='dark' key='dark' text='white' style={{ width: '50rem' }}  className="mb-2">
      <Card.Header>Use AI to generate a summary, comparisons, and diagrams about a list of articles. </Card.Header>
      <Card.Body>

      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Link for article 1." />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Link for article 2." />
        </Form.Group>
      </Row>
      <Button variant="light" type="submit">
        Generate
      </Button>
    </Form>
      </Card.Body>
    </Card>
      </Collapse>

      </Container>

      <br>
      </br>

      <Container>
    <Button
        onClick={() => setChatOpen(!chatOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={chatOpen}
        variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
        className="text-left"
      >
        <i className="fas fa-comments"></i>
        Chat about a paper
      </Button>
      <Collapse in={chatOpen}>
      <Card bg='dark' key='dark' text='white' style={{ width: '50rem' }}  className="mb-2">
      <Card.Header>chat about an article to understand it better. </Card.Header>
      <Card.Body>

      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} size="sm" controlId="formGridEmail">
          <Form.Control type="email" placeholder="Link for the article" />
        </Form.Group>
      </Row>

      <Button variant="light" type="submit">
        Start
      </Button>
    </Form>
      </Card.Body>
    </Card>
      </Collapse>
      </Container>


      <br>
      </br>

      <Container>
      <Button
        onClick={() => setFinderOpen(!finderOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={finderOpen}
        variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
        className="text-left"
      >
       <i className="fas fa-search"></i>

        Paper finder
      </Button>
      <Collapse in={finderOpen}>
      <Card bg='dark' key='dark' text='white' style={{ width: '50rem' }}  className="mb-2">
      <Card.Header>Use AI to find a list of articles related to a topic. </Card.Header>
      <Card.Body>.....</Card.Body>
    </Card>
      </Collapse>
      </Container>



    </Container>
    </Col>

    </Row>

  </Container>

  );
  }
fetchDataCompletion();


export default App;
