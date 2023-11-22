import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'
import Corsair from "./Kuvat/Corsair 32GB.jpg"

export const  Cpu = () => {

 
    const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3001/products?category=Prosessorit')
        .then(resp => setProducts(resp.data))
        .catch(error => console.log(error.message));
    }, []);

    return (
      <div className="row">
        {products && products.map(product => (
          <Card key={product.id} className='col-md-3 mb-3 d-none d-sm-block' style={{ width: '250px', backgroundColor: 'grey', marginTop: '60px', marginBottom:'10rem', marginLeft:'10px'}}>
            <Card.Img src={Corsair} style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                {/* Tähän voit lisätä tuotteen kuvaus */}
                {product.description || 'Tuotteen kuvaus puuttuu'}
              </Card.Text>
              <Card.Text>
                {product.price + "€" || 'ei hintaa'}
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
  