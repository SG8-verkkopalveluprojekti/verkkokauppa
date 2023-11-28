import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import axios from 'axios';


function Kortti() {
  return (
    <div className="container" style={{ maxWidth: '100em'}}>
    <div className="row justify-content-around">
      <Card className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img  variant="top" src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg" className='img-fluid'  style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Näytönohjaimet</Card.Title>
          <Card.Text>
            Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Naytonohjaimet">Näytönohjaimet</Button>
        </Card.Body>
      </Card>

      <Card className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img variant="top" src="https://www.pctekreviews.com/Reviews/STRIX_B550E/01.jpg" style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Emolevyt</Card.Title>
          <Card.Text>
          Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Emolevyt">Emolevyt</Button>
        </Card.Body>
      </Card>
      <Card  className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img variant="top" src="https://hh2.pigugroup.eu/colours/241/450/8/2414508/memory-d4-4266-32gb-c17-gskill-tz-d9af0_reference.jpg" style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Muistit</Card.Title>
          <Card.Text>
          Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Muistit">Muistit</Button>
        </Card.Body>
      </Card>
      <Card className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img variant="top" src="https://www.io-tech.fi/wp-content/uploads/2022/02/12400f-00.jpg" style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Prosessorit</Card.Title>
          <Card.Text>
          Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Prosessorit">Prosessorit</Button>
        </Card.Body>
      </Card>
      <Card className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img variant="top" src="https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg" style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Kotelot</Card.Title>
          <Card.Text>
          Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Kotelot">Kotelot ja oheistuotteet</Button>
        </Card.Body>
      </Card>
      <Card className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem'}}>
        <Card.Img variant="top" src="https://ic.jimms.fi/product/4/0/251749-ig800gg.jpg" style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
        <Card.Body>
          <Card.Title>Virtalähteet</Card.Title>
          <Card.Text>
          Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href="/Virtalahteet">Virtalähteet</Button>
        </Card.Body>
      </Card>
      <Container className="d-block d-sm-none">
      <Row className="justify-content-center">
      <Col xs={8} sm={6} md={4}>
      <ListGroup className="text-center" style={{marginTop:"10px"}}>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Naytonohjaimet">Näytönohjaimet</Button></ListGroup.Item>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Emolevyt">Emolevyt</Button></ListGroup.Item>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Muistit">Muistit</Button></ListGroup.Item>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Prosessorit">Prosessorit</Button></ListGroup.Item>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Kotelot">Kotelot ja oheistuotteet</Button></ListGroup.Item>
      <ListGroup.Item><Button className="btn btn-primary btn-lg" style={{width:"100%", margin:"10px", padding:"10px" }} variant="primary" href="/Virtalahteet">Virtalahteet</Button></ListGroup.Item>
    </ListGroup>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
   
   
  );
}

export default Kortti;


//TEHDÄÄN TÄMÄ OSIO EHKÄ TÄHÄN TYYLIIN ETTÄ HELPOMMIN YLLÄPIDETTÄVISSÄ (HAKEE TIEDOT TIETOKANNASTA)

/*export const Kortti = () => {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then(resp => setCategories(resp.data))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="row justify-content-center">
      {categories && categories.map(category => (
        <div key={category.id} className='col-md-3 mb-3 d-none d-sm-block'>
          <Card style={{ width: '250px', backgroundColor: 'grey', marginTop: '30px', margin: '10px' }}>
            <Card.Img variant="top" src={'https://www.io-tech.fi/wp-content/uploads/2022/02/12400f-00.jpg'} style={{ height: '15rem', marginTop: '5px', padding: '15px' }} />
            <Card.Body>
              <Card.Title>{category.categoryName}</Card.Title>
              <Card.Text>
                {category.description || 'Tuotteen kuvaus puuttuu'}
              </Card.Text>
              <Button className="btn btn-primary btn-md" style={{ width: "100%" }} variant="primary">
                Siirry tuotesivulle
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}*/