import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'

export const  Naytonohjaimet = () => {

 
    const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3001/products?category=Naytonohjaimet')
        .then(resp => setProducts(resp.data))
        .catch(error => console.log(error.message));
    }, []);

    return (
      <div className="row">
        {products && products.map(product => (
          <Card key={product.id} className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem', marginLeft:'10px'}}>
            <Card.Img variant="top" src={product.imageUrl || 'https://www.io-tech.fi/wp-content/uploads/2022/02/12400f-00.jpg'} style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                {/* Tähän voit lisätä tuotteen kuvaus */}
                {product.description || 'Tuotteen kuvaus puuttuu'}
              </Card.Text>
              <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" href={`/${product.category}/${product.id}`}>
                Katso lisää
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  