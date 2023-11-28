import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navi.css';

export const Navi = () => {
    return (
      <Navbar expand="lg" className="navibar">
        <Container>
          <Navbar.Brand href="/" className="text-light">Nettikaubba</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"className="text-light">Home</Nav.Link>
              <Nav.Link href="/help"className="text-light">Apua?</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/signin" className="text-light">Kirjaudu</Nav.Link>
              <Nav.Link href="/register" className="text-light">Rekisteröidy</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Admin" className="text-light">Ylläpito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
  }