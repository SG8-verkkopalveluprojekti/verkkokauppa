import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Card, Button} from 'react-bootstrap'

export const  Muistit = () => {

 
    const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3001/products?category=Muistit')
        .then(resp => setProducts(resp.data))
        .catch(error => console.log(error.message));
    }, []);

    return (
<div className="row justify-content-center">
        {products && products.map(product => (
          <Card key={product.id} className='col-3' style={{ width: '250px', backgroundColor: 'grey', marginTop: '30px', margin:'10px'}}>
            <Card.Img variant="top" src={product.imageUrl || 'https://hh2.pigugroup.eu/colours/241/450/8/2414508/memory-d4-4266-32gb-c17-gskill-tz-d9af0_reference.jpg'} style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                {/* Tähän voit lisätä tuotteen kuvaus */}
                {product.description || 'Tuotteen kuvaus puuttuu'}
              </Card.Text>
              <Card.Text style={{fontSize:"25px"}}>
                {product.price + "€" || 'ei hintaa'}
              </Card.Text>
              <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary">
              Lisää ostoskoriin
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  