import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../pages/phonenavbar.css';

const BottomNavbar = () => {
  return (
    <Navbar className="bottom-navbar" fixed="bottom" bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="/help">help</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export { BottomNavbar };