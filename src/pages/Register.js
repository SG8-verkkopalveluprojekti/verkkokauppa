import React from 'react'
import axios from "axios"
import { useState } from 'react';



import { Container, Form, Button, Col, Row } from 'react-bootstrap';



export const Register = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  function registerPost(){
    if (!email || !fname || !lname || !username || !pw) {
      alert("Täytä kaikki pakolliset kentät ennen rekisteröitymistä.");
      return;
    }
    if(cpw !== pw){
      alert("Salasanat eivät täsmää!")
      return;
    }

    axios.postForm('http://localhost:3001/register',{fname,lname,username,pw})
      .then(resp => alert("Kiitos rekisteröitymisestä!"))
      .catch(err => alert("Jotain meni pieleen"))
  }

          return (
            <>
            <Container style={{border:"3px solid grey",maxWidth:'80%',height:'80%', marginTop:"100px", borderRadius:"5px", background:"#d3d3d3" }}>
              <Row className="justify-content-md-center">
                <Col md={12}>
                  <Form style={{margin:"25px",height:'80%'}}>
                  <Row>
                      <Col>
                        <Form.Group controlId="email">
                          <Form.Label>Sähköposti</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Syötä sähköpostiosoite"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="uname">
                          <Form.Label>Käyttäjänimi</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Syötä käyttäjänimesi"
                            name="uname"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="pw">
                          <Form.Label>Salasana</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                            type={
                              showPassword ? "text" : "password"
                            }
                            placeholder="Syötä salasana"
                            name="pw"
                            value={pw}
                            onChange={e => setPw(e.target.value)}
                            required
                          />
                            <label for="check">Show Password</label>
                            <input
                                id="check"
                                type="checkbox"
                                value={showPassword}
                                onChange={() =>
                                    setShowPassword((prev) => !prev)
                                }
                            />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="cpw">
                          <Form.Label>Vahvista salasana</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                             type={
                              showPassword ? "text" : "password"
                            }
                            placeholder="Vahvista salasana"
                            name="cpw"
                            value={cpw}
                            onChange={e => setCpw(e.target.value)}
                            required
                          />
                        </Form.Group><br></br>
                        </Col><hr></hr>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="fname">
                          <Form.Label>Etunimi</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Syötä etunimesi"
                            name="fname"
                            value={fname}
                            onChange={e => setFname(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="lname">
                          <Form.Label>Sukunimi</Form.Label><Form.Label style={{ color: 'red' }}> *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Syötä sukunimesi"
                            name="lname"
                            value={lname}
                            onChange={e => setLname(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="pnumber">
                          <Form.Label>Puhelinnumero</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Syötä puhelinnumerosi" 

                          />
                        </Form.Group><br></br>
                      </Col>
                      </Row>
                      <Row>
                      <Col>
                        <Form.Group controlId="katuosoite">
                          <Form.Label>Katuosoite</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Katuosoite"
                            //value={osoite}
                            //onChange={e => setOsoite(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="kunta">
                          <Form.Label>Kunta</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Kunta"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="postitmn">
                          <Form.Label>Postinumero</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Postinumerosi"
                          
                          />
                        </Form.Group><br></br>
                      </Col>
                    </Row>
                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      required
                      //tähän pitää saada linkki niin ettei päivitä sivua uudelleen kun menee tietosuojaselosteeseen
                      label={
                        <span> Olen lukenut ja hyväksyn&nbsp;<a href="/Help" target="_blank" rel="noopener noreferrer">tietosuojaselosteen</a><Form.Label style={{ color: 'red' }}> *</Form.Label></span>
                      }
                      
                      //onChange={() => setCheck(!check)}
                    />
                    <div>
                      <span>Pakolliset kentät on merkitty tähdellä:</span><span> </span><span style={{ color: 'red' }}>*</span>
                    </div>
                    <Button onClick={registerPost} variant="success" type="submit" style={{ marginTop: '10px', marginBottom:"10px"}}>
                      Rekisteröidy
                    </Button>
                    
                  </Form>
                </Col>
              </Row>
            </Container>
            </>
          );
        };