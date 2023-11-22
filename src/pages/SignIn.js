import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  function login(){
    axios.postForm('http://localhost:3001/login',{username, pw})
      .then(resp => alert("logged in"))
      .catch(err => alert("wrong password or username"))
  }
  return (
    <Container style={{marginTop:'60px', maxwidth:'100%'}}>
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
      <Form style={{ border: '1px solid black', padding: '50px', borderRadius: '4px', backgroundColor:'#D3D3D3' }}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Käyttäjänimi</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Syötä käyttäjänimi"
            value={username}
            onChange={e => setUsername(e.target.value)}/>
            
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Salasana</Form.Label>
            <Form.Control 
            type={
              showPassword ? "text" : "password"
            }
            placeholder="Syötä salasana"
            value={pw}
            onChange={e => setPw(e.target.value)}/>
            <label htmlFor="check">Show Password</label>
            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() =>
                setShowPassword((prev) => !prev)
              }
            />
          </Form.Group>

          <Button onClick={login} style={{marginTop: '10px', backgroundColor:'green'}} variant="primary" type="submit">
           Kirjaudu
          </Button>
          <Button href="/register" style={{marginTop: '10px', marginLeft:'30px', backgroundColor:'green'}} variant="primary" type="submit">
           rekisteröidy
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
}