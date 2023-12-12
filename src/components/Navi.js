import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { jwtToken } from '../components/signals/TokenSignal'; // Tuodaan mukanaan JWT-tokenin tila
import axios from 'axios'
import './navi.css';
import { useNavigate } from 'react-router-dom';

export const Navi = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (jwtToken.value) {
      const fetchUserInfo = async () => {
        try {
          const userResponse = await axios.get('http://localhost:3001/customer', {
            headers: { Authorization: `Bearer ${jwtToken.value}` },
          });

          setUserInfo(userResponse.data);
        } catch (error) {
          console.error('Error fetching user information', error);
        }
      };

      fetchUserInfo();
    }
  }, [jwtToken.value]);

  const isLoggedIn = jwtToken.value.length !== 0;
  const isAdmin = userInfo?.is_admin === 1;
  

  const handleLogout = () => {
    jwtToken.value = '';
    setUserInfo(null);
    alert("Kiitos käynnistä!")
    navigate('/signin');
  };

  return (
    <Navbar expand="lg" className="navibar">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img src='https://www.students.oamk.fi/~n2tyto00/Kevat23/img/logo2.2.png' style={{ height: "50px" }} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            <Nav.Link href="/help" className="text-light">Apua?</Nav.Link>
            <Nav.Link href="/feedback" className="text-light">Asiakaspalaute</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
              <Nav.Link href='/changepw' className="text-light">{userInfo && userInfo.username}</Nav.Link>
              {isAdmin && (
                  <Nav.Link href="/Admin" className="text-light">Ylläpito</Nav.Link>
                )}
              <Nav.Link onClick={handleLogout} className="text-light">Kirjaudu ulos</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/signin" className="text-light">Kirjaudu</Nav.Link>
                <Nav.Link href="/register" className="text-light">Rekisteröidy</Nav.Link>
              </>
            )}
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};