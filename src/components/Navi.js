import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './navi.css';

export const Navi = () => {
    return (
      <Navbar expand="lg" className="navibar">
        <Container>
          <Navbar.Brand href="#home" className="text-light">Nettikaubba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"className="text-light">Home</Nav.Link>
              <Nav.Link href="#link"className="text-light">Apua?</Nav.Link>
              <NavDropdown title="Näytä lisää" className="text-light" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item> 
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex " >
            <Form.Control type="text" placeholder="Sähköposti" style={{marginRight: "10px"}} />
          </Form>
          <Form className="d-flex">
            <Form.Control type="password" placeholder="Salasana" style={{marginRight: "10px"}}/>
            <Link to='/login'>
            <Button variant="secondary" style={{color:'white',}}>Kirjaudu</Button>
            </Link>
          </Form>
        </Container>
      </Navbar>
    );
  }


