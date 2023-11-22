import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import the hook
import axios from 'axios';


export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the hook

  function login() {
    if (isButtonDisabled) {
      return;
    }

    setButtonDisabled(true);
    setLoading(true);

    axios.post('http://localhost:3001/login', { username, pw })
      .then(resp => {
        alert("Kirjauduttu sisään");
        navigate('/');           // Redirect to a different page after successful login
      })
      .catch(err => {
        alert("Väärä salasana tai käyttäjätunnus");
      })
      .finally(() => {
        setButtonDisabled(false);
        setLoading(false);
      });
  }

  return (
    <Container style={{ marginTop: '60px', maxWidth: '100%' }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form style={{ border: '1px solid black', padding: '50px', borderRadius: '4px', backgroundColor: '#D3D3D3' }}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Käyttäjänimi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Syötä käyttäjänimi"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Salasana</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Syötä salasana"
                value={pw}
                onChange={e => setPw(e.target.value)} />
              <label htmlFor="check" >Show Password</label>
              <input
                id="check"
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword(prev => !prev)} 
                style={{marginLeft:"5px"}}/>
                 <a href="/changepw" style={{marginLeft: "10px"}}>  
                      Unohditko salasanasi?
                </a>
            </Form.Group>

            <Button
              onClick={login}
              style={{ marginTop: '10px', backgroundColor: 'green' }}
              variant="primary"
              type="submit"
              disabled={isButtonDisabled}
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                'Kirjaudu'
              )}
            </Button>
            <Button href="/register" style={{ marginTop: '10px', marginLeft: '30px', backgroundColor: 'green' }} variant="primary" type="submit">
              Rekisteröidy
            </Button>
           

          </Form>
        </Col>
      </Row>
    </Container>
  );
};
