import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import the hook
import axios from 'axios';
import { jwtToken } from "../components/signals/TokenSignal";



export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the hook
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information when the component mounts (assuming user is already logged in)
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

  function login() {
    if (isButtonDisabled) {
      return;
    }

    setButtonDisabled(true);
    setLoading(true);

  
    axios.postForm('http://localhost:3001/login', {username, pw})
            .then(resp => jwtToken.value = resp.data.jwtToken)
            .catch(error => alert("Väärä käyttäjänimi tai salasana"))
            .finally(() => {
              // Nollaa tilat, jotta käyttäjä voi kirjautua uudelleen
              setButtonDisabled(false);
              setLoading(false);
            });
     
  }

  function logout() {
    // Tässä voit toteuttaa kirjaudu ulos -toiminnallisuuden
    // Esimerkiksi poistamalla JWT-tokenin, nollaamalla käyttäjätiedot ja ohjaamalla käyttäjän kirjautumissivulle.
    jwtToken.value = ''; // Poista JWT-token
    setUserInfo(null); // Nollaa käyttäjätiedot
    setLoading(false);
    // Voit ohjata käyttäjän esimerkiksi kirjautumissivulle tai etusivulle
    navigate('/signin'); 
  }
  

  return (
    
    <Container style={{ marginTop: '60px', maxWidth: '100%' }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        {jwtToken.value.length !== 0 ? (
            <div>
              <h3>Kirjautuminen onnistui!</h3>
              {userInfo && (
                <div>
                  <p>Tervetuloa, {userInfo.fname} {userInfo.lname}  /  {userInfo.username}!</p>
                  {/* Additional content for logged-in user */}
                  <Button
                    onClick={logout}
                    style={{ marginTop: '10px', backgroundColor: 'red' }}
                    variant="danger"
                  >
                    Kirjaudu ulos
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Form
              style={{
                border: '1px solid black',
                padding: '50px',
                borderRadius: '4px',
                backgroundColor: '#D3D3D3',
              }}
            >
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Käyttäjänimi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Syötä käyttäjänimi"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Salasana</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Syötä salasana"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
                <label htmlFor="check">Show Password</label>
                <input
                  id="check"
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                  style={{ marginLeft: '5px' }}
                />
                <a href="/" style={{ marginLeft: '10px' }}>
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
              <Button
                href="/register"
                style={{ marginTop: '10px', marginLeft: '30px', backgroundColor: 'green' }}
                variant="primary"
                type="submit"
              >
                Rekisteröidy
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  )
};
