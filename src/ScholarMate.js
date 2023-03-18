import React, {useCallback} from 'react';

import {Container, Button, Row, Col, Card, Collapse, Form, Badge} from 'react-bootstrap';
import extract from './scripts/extract';
import { SayButton } from 'react-say';
import Say from 'react-say/lib/Say';
import logo from './logo.png';


import { fetchNewsCompletion, fetchDataCompletion } from './APIConnection';


class ScholarMate extends React.Component {


  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
       
       insightsOpen: false,
       chatOpen: false,
       storyOpen: false,
       generateOpen: true,
       generateKeywordOpen: true,
       generateKeywordChatOpen: true,
       playKeywordStoryOpen: false,
       playKeywordChatOpen: false,
       playOpen: false,
       keywords: ['ChatGPT', 'AI', 'OpenAI'],
       transript: "This is a test value.",
       keywordStoryTransript: "keyword.",
       keywordChatTransript: "keyword.",
       local: false,
       lang: voices => [...voices].find(v => v.lang === 'ar-SA'), // 'ar-SA'
       lang_s: 0,
       lang_s1:0,
       lang_s2: 0,
       cat : [],
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
    this.setState({ storyOpen: false });


  }

  setStoryOpen = () => {

    if(!this.state.storyOpen && this.state.insightsOpen){
      this.setState({ insightsOpen: false });
    }
    this.setState({ chatOpen: false });
    this.setState({ storyOpen: !this.state.storyOpen });
  }

  setChats1Open = async () =>
  {
    var strnew = ''; 
    var result = "1";

    if(this.state.storyOpen)
    {
      var lang_ = this.state.lang_s2

      var strnew = document.getElementById("story").value;

    result = await fetchDataCompletion(strnew , "story", lang_);
    this.setState({ keywordStoryTransript: result, playKeywordStoryOpen: true, generateKeywordOpen: false });
    }
    if(this.state.chatOpen)
    {
      var lang_ = this.state.lang_s1

      var strnew = document.getElementById("chat").value;

    result = await fetchDataCompletion(strnew, "chat", lang_);
    this.setState({ keywordChatTransript: result, playKeywordChatOpen: true, generateKeywordChatOpen: false });

    }


    //alert(res);
  }

  setFinderOpen(){}

  addKeyWord = () => {

  }

  generateTranscript = async () => {

    var local = this.state.local
    var result = '';
    var lang_ = this.state.lang_s
    var cats = this.state.cat
    result = await fetchNewsCompletion(local, cats, lang_ );

    this.setState({ transript: result, playOpen: true, generateOpen: false });

  }

  setLang = (lang) => {

    if(lang == 0){
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'en-US'), lang_s: 0 });
    }else{
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'ar-SA'),  lang_s: 1 });
    }

  }

  setLang1 = (lang) => {

    if(lang == 0){
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'en-US'), lang_s1: 0 });
    }else{
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'ar-SA'),  lang_s1: 1 });
    }

  }

  setLang2 = (lang) => {

    if(lang == 0){
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'en-US'), lang_s2: 0 });
    }else{
      this.setState({ lang: voices => [...voices].find(v => v.lang === 'ar-SA'),  lang_s2: 1 });
    }
  }

  setLocal = (loc) => {

      this.setState({ local: loc });


  }

  setCat = (catid) => {
      //alert(this.state.cat.includes(catid))
      if (this.state.cat.includes(catid) ){
          var arr = this.state.cat;
          var index = arr.indexOf(catid);
          //alert(arr)
  
          arr.splice(index, 1);
          //alert(arr)
  
          this.setState({ cat:arr} );
      }else{
        var arr = this.state.cat;
        arr.push(catid)
        this.setState(prevState => ({ cat: arr }));
        //alert(this.state.cat)

      }


  }

  render() {

    return(
    <Container fluid className="p-3  bg-dark">
      <Container className="p-5 mb-4 bg-dark rounded-3">

<img src={logo} className="App-logo" alt="logo" />
        <h1 className="header text-light" variant="light">UrPod.ai</h1>
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
            onClick={() => this.setLocal(false)}
            inline
            label="Global"
            name="group1"
            type='radio'
            id='inline-radio'
          />
          <Form.Check
          onClick={() => this.setLocal(true)}
            inline
            label="Local"
            name="group1"
            type='radio'
            id='inline-radio-2'
          />
        </div>

        <div key='inline-radio-lang' className="mb-3">
          <Form.Check
          onClick={() => this.setLang(1)}
            inline
            label="Arabic"
            name="group2"
            type='radio'
            id='inline-radio'
          />
          <Form.Check
            onClick={() => this.setLang(0)}
            inline
            label="English"
            name="group2"
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
            onChange={() => this.setCat(0)}
            inline
            label="Sports"
            name="group1"
            type='switch'
            id='inline-check'
          />
          <Form.Check
          onChange={() => this.setCat(1)}
            inline
            label="Politics"
            name="group1"
            type='switch'
            id='inline-check-2'
          />
            <Form.Check
            onChange={() => this.setCat(2)}
            inline
            label="Weather"
            name="group1"
            type='switch'
            id='inline-check-3'
          />

          <Form.Check
          onChange={() => this.setCat(3)}
            inline
            label="Economy"
            name="group1"
            type='switch'
            id='inline-check-4'
          />

            <Form.Check
            onChange={() => this.setCat(4)}
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
     voice={this.state.lang}
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
        </Row>
        <br>
        </br>
        <br>
        </br>
        <Row>
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
           Talk about 
        </Button>
        <Collapse in={this.state.chatOpen}>
        <Card bg='dark' key='dark' text='white' className="mb-2">
        <Card.Header>Enter keywords to explore a new topic and summarize it in a new Broadcast.. </Card.Header>
        <Card.Body>
        <div key='inline-radio-lang' className="mb-3">
          <Form.Check
          onClick={() => this.setLang1(1)}
            inline
            label="Arabic"
            name="group2"
            type='radio'
            id='inline-radio'
          />
          <Form.Check
            onClick={() => this.setLang1(0)}
            inline
            label="English"
            name="group2"
            type='radio'
            id='inline-radio-2'
          />
        </div>
        <br>
        </br>
        <br>
        </br>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} size="sm" controlId="formGridText">
            <Form.Control type="text" placeholder="Link for the article" id="chat" />
          </Form.Group>
        </Row>
        <Collapse in={this.state.generateKeywordChatOpen}>
        <Button  onClick={() => this.setChats1Open()}>
          Start
        </Button>
        </Collapse>
        <br>
        </br>
        <Collapse in={this.state.playKeywordChatOpen}>
     <div>
      <SayButton 
     onClick={ event => console.log(event) }
     speak={this.state.keywordChatTransript}
     pitch={ 1.1 }
     rate={ 0.9 }
     volume={ .8 }
     voice={this.state.lang}
   >
     Play Podcast
   </SayButton>
   </div>
   </Collapse>
      </Form>

        </Card.Body>
      </Card>
        </Collapse>
        </Container>
        </Col>
</Row>
<br>
</br>
<br>
        </br>

<Row>
        <Col>
        <Container>
      <Button
          onClick={() => this.setStoryOpen()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.storyOpen}
          variant= "secondary" style={{ width: '25rem', height: '3rem', textAlign: 'left' }} text='white'
          className="text-left"
        >
          <i className="fas fa-comments"></i>
           Story for Kids
        </Button>
        <Collapse in={this.state.storyOpen}>
        <Card bg='dark' key='dark' text='white' className="mb-2">
        <Card.Header>Enter keywords to generate stories for your kids. </Card.Header>
        <Card.Body>
        <div key='inline-radio-lang' className="mb-3">
          <Form.Check
          onClick={() => this.setLang2(1)}
            inline
            label="Arabic"
            name="group2"
            type='radio'
            id='inline-radio'
          />
          <Form.Check
            onClick={() => this.setLang2(0)}
            inline
            label="English"
            name="group2"
            type='radio'
            id='inline-radio-2'
          />
        </div>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} size="sm" controlId="formGridText">
            <Form.Control type="text" placeholder="Link for the article" id="story" />
          </Form.Group>
        </Row>
        <Collapse in={this.state.generateKeywordOpen}>
        <Button  onClick={() => this.setChats1Open()}>
          Start
        </Button>
        </Collapse>
        <br>
        </br>
        <Collapse in={this.state.playKeywordStoryOpen}>
     <div>
      <SayButton 
     onClick={ event => console.log(event) }
     speak={this.state.keywordStoryTransript}
     pitch={ 1.1 }
     rate={ 0.9 }
     volume={ .8 }
     voice={this.state.lang}
   >
     Play Podcast
   </SayButton>
   </div>
   </Collapse>
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