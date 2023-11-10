import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export const Carouselli = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg" alt='First slide' />
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.eckeroline.fi/media/catalog/product/cache/c6a153240b9d57769ada9a8b348b002a/k/a/karhu_export_24pack.png' alt='Second slide' />
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://library.avecmedia.fi/wp-content/uploads/2021/12/13593_2000x.jpg' alt='Third slide' />
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