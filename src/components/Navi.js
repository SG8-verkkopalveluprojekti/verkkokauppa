import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navi.css';
import { Link } from "react-router-dom";

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
              <NavDropdown title="Kirjaudu"  className="text-light" id="basic-nav-dropdown">
              <Link to="/signin">
              <i class="fa fa-user-secret">  Kirjaudu &nbsp; </i>
            </Link>
            <Link to="/register">
              <i class="fa fa-user-secret-hidden">  &nbsp; Luo uusi tili</i>
            </Link>
                
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
           {/* <Form className="d-flex " >
            <Form.Control type="text" placeholder="Sähköposti" style={{marginRight: "10px"}} />
          </Form>
          <Form className="d-flex">
            <Form.Control type="password" placeholder="Salasana" style={{marginRight: "10px"}}/>
            <Link to='/signin'>
            <Button variant="secondary" style={{color:'white',}}>Kirjaudu</Button>
            </Link>
          </Form> */}
        </Container>
      </Navbar>
    );
  }


