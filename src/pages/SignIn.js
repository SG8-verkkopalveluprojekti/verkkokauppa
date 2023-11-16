import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const SignIn = () => {
  return (
    <Container style={{marginTop:'30px', width:'60%'}}>
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
      <Form style={{ border: '1px solid black', padding: '50px', borderRadius: '4px', backgroundColor:'#D3D3D3' }}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Käyttäjänimi</Form.Label>
            <Form.Control type="text" placeholder="ookko nää" />
            
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Salasana</Form.Label>
            <Form.Control type="password" placeholder="kännissä" />
          </Form.Group>

          <Button style={{marginTop: '10px', backgroundColor:'black'}} variant="primary" type="submit">
           Kirjaudu
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
}