import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Card, Button, Modal} from 'react-bootstrap'
import ProductDetails from '../components/ProductDetails';

export const  Naytonohjaimet = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

 
    const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3001/products?category=Naytonohjaimet')
        .then(resp => setProducts(resp.data))
        .catch(error => console.log(error.message));
    }, []);

    return (
      <div className="row justify-content-center">
        {products && products.map(product => (
          <Card key={product.id} className='col-3' style={{ width: '250px', backgroundColor: 'grey', marginTop: '30px', margin:'10px'}}>
            <Card.Img variant="top" src={product.imageUrl || 'https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg'} style={{height:'15rem', marginTop:'5px', padding:'15px'}}/>
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
            
              </Card.Text>
              <Card.Text style={{fontSize:"25px"}}>
                {product.price + "€" || 'ei hintaa'}
              </Card.Text>
              <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary">
              Lisää ostoskoriin
              </Button>
              <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary" onClick={() => openModal(product)}>
          
              Lisätietoa
              </Button>
            </Card.Body>
          </Card>
        ))}
          <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && <ProductDetails product={selectedProduct} />}
          <Button className="btn btn-primary btn-md" style={{width:"100%"}} variant="primary">
              Lisää ostoskoriin
              </Button>
              <div>
            tähän tulis arvostelujuttu alle
          </div>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
  