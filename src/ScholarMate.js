import React from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form} from 'react-bootstrap';
import extract from './scripts/extract';

import { fetchDataCompletion } from './APIConnection';


class ScholarMate extends React.Component {


  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {

       insightsOpen: false,
       chatOpen: false,
       finderOpen: false,
      };
  }
  componentDidMount() {
  
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
   // extract()

  }
  
  setInsightsOpen = () => {

    this.setState({ insightsOpen: !this.state.insightsOpen });

  }

  setChatOpen = () => {

    this.setState({ chatOpen: !this.state.chatOpen });

  }

  setChats1Open = () =>
  {
    var strnew = document.getElementById("myInput").value;
    alert(strnew);
    fetchDataCompletion(strnew);
  }

  setFinderOpen(){

    this.setState({ finderOpen: !this.state.finderOpen });

  }

  render() {

    return(
    <Container fluid className="p-3  bg-dark">
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
          onClick={() => this.setInsightsOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.insightsOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
          <i className="fas fa-lightbulb"></i>
            Quick Insights
        </Button>
        <Collapse in={this.state.insightsOpen}>
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
          onClick={() => this.setChatOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.chatOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
          <i className="fas fa-comments"></i>
          Chat about a paper
        </Button>
        <Collapse in={this.state.chatOpen}>
        <Card bg='dark' key='dark' text='white' style={{ width: '50rem' }}  className="mb-2">
        <Card.Header>chat about an article to understand it better. </Card.Header>
        <Card.Body>
  
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} size="sm" controlId="formGridText">
            <Form.Control type="text" placeholder="Link for the article" id="myInput" />
          </Form.Group>
        </Row>
  
        <Button  onClick={() => this.setChats1Open()}>
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
          onClick={() => this.setFinderOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.finderOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
         <i className="fas fa-search"></i>
  
          Paper finder
        </Button>
        <Collapse in={this.state.finderOpen}>
        <Card bg='dark' key='dark' text='white' style={{ width: '50rem' }}  className="mb-2">
        <Card.Header>Use AI to find a list of articles related to a topic. </Card.Header>
        <Card.Body>.....</Card.Body>
      </Card>
        </Collapse>
        </Container>
  
  
  
      </Container>
    </Container>
  
  );
  
    }
  
  }

export default ScholarMate;