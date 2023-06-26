import logo from './self.jpg';
import './App.css'; 
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';


function App() {
  return (
    
    <div>
<header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </header>
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Welcome to this page</h1>
        </p>
        <a
          className="App-link"
          href="https://sapinderjit-kaur.github.io/React_Hello/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to view the second page
        </a>
      
      <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>

    
      </body>
      <div class="divcss">
      <center>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <button>Submit</button>
    </Form></center>
      </div>
    </div>

    
  );
}

export default App;
