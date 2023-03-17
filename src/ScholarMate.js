import React, {useCallback} from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form, Badge} from 'react-bootstrap';
import extract from './scripts/extract';
import { SayButton } from 'react-say';
import Say from 'react-say/lib/Say';


class ScholarMate extends React.Component {


  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {

       insightsOpen: false,
       chatOpen: false,
       generateOpen: true,
       playOpen: false,
       keywords: ['ChatGPT', 'AI', 'OpenAI'],
       transript: "This is a test value."
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


  addKeyWord = () => {

  }

  generateTranscript = () => {


    this.setState({ transript: "This is a generated text." , playOpen: true, generateOpen: false});


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
        <h6 className="header text-light" variant="light">Customize your daily podcast</h6> 
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



        <Collapse in={this.state.generateOpen}>
        <Button onClick={() => this.generateTranscript()} variant="light" type="submit">
          Generate
        </Button>
        </Collapse>
        <br>
        </br>
        <Collapse in={this.state.playOpen}>
     <div>
      <SayButton
     onClick={ event => console.log(event) }
     speak={this.state.transript}
     pitch={ 1.1 }
     rate={ 0.9 }
     volume={ .8 }
   >
     Play Podcast
   </SayButton>
   </div>
   </Collapse>
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
          <Form.Group as={Col} size="sm" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Keywords" />
          </Form.Group>
        </Row>

        <div>



      <Badge pill bg="primary">
        Primary
      </Badge>{' '}
      <Badge pill bg="secondary">
        Secondary
      </Badge>{' '}
      <Badge pill bg="success">
        Success
      </Badge>{' '}
      <Badge pill bg="danger">
        Danger
      </Badge>{' '}
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge pill bg="info">
        Info
      </Badge>{' '}
      <Badge pill bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge pill bg="dark">
        Dark
      </Badge>
    </div>
    <br>
        </br>
        <Button variant="light" type="submit">
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