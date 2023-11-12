import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';



export const Carouselli = () => {
  return (
    
    <Carousel className='text-center'>
      <Carousel.Item>
        <Image src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg" alt='First slide' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', borderRadius:'5px' }} />
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg' alt='Second slide' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', borderRadius:'5px' }}/>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg' alt='Third slide' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', borderRadius:'5px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}