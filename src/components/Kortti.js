import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Kortti() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }} >
        <Card.Img variant="top" src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg"  style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Näytönohjaimet</Card.Title>
          <Card.Text>
            Pitää tähän joku myyntipuhe keksiä
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://www.pctekreviews.com/Reviews/STRIX_B550E/01.jpg" style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Emolevyt</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://hh2.pigugroup.eu/colours/241/450/8/2414508/memory-d4-4266-32gb-c17-gskill-tz-d9af0_reference.jpg" style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Muistit</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://www.io-tech.fi/wp-content/uploads/2022/02/12400f-00.jpg" style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Prosessorit</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg" style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Kotelot ja oheistuotteet</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', backgroundColor: 'grey', marginTop: '20px' }}>
        <Card.Img variant="top" src="https://ic.jimms.fi/product/4/0/251749-ig800gg.jpg" style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>Virtalähteet</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      
    </div>
  );
}

export default Kortti;