
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col , Navbar, Nav, NavDropdown, Form, Button}from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className="fixed-top">
  <Container fluid>
    <Navbar.Brand href="#">AppBlast</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Team</Nav.Link>
        <NavDropdown title="Projects" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3" >Project1</NavDropdown.Item>
          <NavDropdown.Item href="#action4" >Project2</NavDropdown.Item>
          <NavDropdown.Item href="#action5" >Project3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  <Container className='mt-0'>

   <div className="mt-20 body1">

    <Row >
      <Col>
      <img src="20220710_144542.jpg" className="image"></img>
      </Col>
      <Col>
      <div class="intro">
      <p class="hey">Hey there, I am</p>
      <br/><br/><br/>
        <p class="name"><span class="ujjwal">UJJWAL</span><span class="tiw"> TIWARY</span></p>
        <p class="web">I am a web developer.</p>
        <span style={{color: "White", fontSize: "25px"}}>mail: kumarujjwal603@gmail.com</span>
        </div>
      </Col>
    </Row>
   </div> 


   <div class="body2">
    <Row>
      <Col><iframe src="Untitled document (2).pdf" width="80%" height="630px" className="Iframe"></iframe>
      <p className="resume"><h2>resume</h2></p></Col>
      <Col>
      <div className="main">
      <p><span class="about">About</span><span class="me"> Me</span></p>
      <p><span class="developer">Developer</span><span class="and"> & </span><span class="designer">Designer</span></p>
      <p class="content">
          I am a web designer and deveoper. I can create great websites and animations by making them more and more interactive. I can create 
          pixel perfect designs and neat code for your website. Contact me for more insights of my works.
      </p>
      </div>
      </Col>
    </Row>
   </div>
   
   <div class="website">
    <p class="services">Our Services</p>
    <div class="mainblock">
      <Row>
        <Col>
    <a>
    <div class="block">
        
        <p class="subblock1">Web Development</p>
        <p class="subblock2">
            Let me create you a beautiful website.It will be fast and effective.Contact me for hiring.
            Contacts are at the bottom of the page.
        </p>
    </div>
    </a>
    </Col>
    <Col>
    <a>
    <div class="block">
        
        <p class="subblock1">Web Development</p>
        <p class="subblock2">
            Let me create you a beautiful website.It will be fast and effective. Contact me for hiring.
            Contacts are at the bottom of the page.
        </p>
    </div>
    </a>
    </Col>
    <Col>
    <a>
    <div class="block">
        <p class="subblock1">Web Development</p>
        <p class="subblock2">
            Let me create you a beautiful website. Contact me for hiring.It will be fast and effective.
            Contacts are at the bottom of the page.
        </p>
    </div>
    </a>
    </Col>
    </Row>
    </div>
</div>
  </Container>

      </div>
  );
}

export default App;
