import React from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form, Badge} from 'react-bootstrap';
import extract from './scripts/extract';

import { fetchDataCompletion } from './APIConnection';


class ScholarMate extends React.Component {


  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {

       insightsOpen: false,
       chatOpen: false,
       keywords: ['ChatGPT', 'AI', 'OpenAI'],
      };
  }
  componentDidMount() {
   // extract()

  }
  
  setInsightsOpen = () => {

    if(this.state.chatOpen && !this.state.insightsOpen){
      this.setState({ chatOpen: false });
    }

    this.setState({ insightsOpen: !this.state.insightsOpen });


  }

  setChatOpen = () => {

    if(!this.state.chatOpen && this.state.insightsOpen){
      this.setState({ insightsOpen: false });
    }

    this.setState({ chatOpen: !this.state.chatOpen });


  }

  setChats1Open = async () =>
  {
    var strnew = document.getElementById("myInput").value;
    alert(strnew);
    var res = "1";
     res = await fetchDataCompletion(strnew);
    alert(res);
  }

  setFinderOpen(){}

  addKeyWord = () => {

  }

  render() {

    return(
    <Container fluid className="p-3  bg-dark">
      <Container className="p-5 mb-4 bg-dark rounded-3">
        <h1 className="header text-light" variant="light">UrPod</h1>
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

        <Row>
          <Col>
        <Container>
      <Button
          onClick={() => this.setInsightsOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.insightsOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
          <i className="fas fa-lightbulb"></i>
            Latest News
        </Button>
        <Collapse in={this.state.insightsOpen}>
        <Card bg='dark' key='dark' text='white'  className="mb-2">
        <Card.Header>Generate your news podcast episode. </Card.Header>
        <Card.Body>
  
        <Form>
      <div key='inline-radio' className="mb-3">
          <Form.Check
            inline
            label="Global"
            name="group1"
            type='radio'
            id='inline-radio'
          />
          <Form.Check
            inline
            label="Local"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </div>
        <br>
        </br>
        <br>
        </br>

        <div key='inline-radio' className="mb-3">
          <Form.Check
            inline
            label="Sports"
            name="group1"
            type='switch'
            id='inline-check'
          />
          <Form.Check
            inline
            label="Politics"
            name="group1"
            type='switch'
            id='inline-check-2'
          />
                    <Form.Check
            inline
            label="Weather"
            name="group1"
            type='switch'
            id='inline-check-3'
          />

<Form.Check
            inline
            label="Economy"
            name="group1"
            type='switch'
            id='inline-check-4'
          />

<Form.Check
            inline
            label="Breaking News"
            name="group1"
            type='switch'
            id='inline-check-5'
          />
        </div>




        <Button variant="light" type="submit">
          Generate
        </Button>
      </Form>
        </Card.Body>
      </Card>
        </Collapse>
  
        </Container>
        </Col>
  
        <br>
        </br>
        <Col>
        <Container>
      <Button
          onClick={() => this.setChatOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.chatOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
          <i className="fas fa-comments"></i>
          Explore a topic
        </Button>
        <Collapse in={this.state.chatOpen}>
        <Card bg='dark' key='dark' text='white' className="mb-2">
        <Card.Header>Enter keywords to explore a new topic and summarize it in a new Broadcast. </Card.Header>
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
        </Col>

        </Row>
  
  
        <br>
        </br>

  
  
  
      </Container>
    </Container>
  
  );
  
    }
  
}

export default ScholarMate;