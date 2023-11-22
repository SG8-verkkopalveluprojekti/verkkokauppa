import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export const Carouselli = () => {
  const carouselItemStyle = {
    width: '100%', 
    height: '400px', // Set a fixed height
  };

  const imageStyle = {
    objectFit: 'contain', // tai 'cover'
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  };

  return (
    <Carousel className="text-center" style={{ marginTop: '20px' }}>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src="https://www.io-tech.fi/wp-content/uploads/2022/10/rtx4090-00.jpg"
          alt="First slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src="https://www.io-tech.fi/wp-content/uploads/2023/10/14900k-01.jpg"
          alt="Second slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src="https://www.io-tech.fi/wp-content/uploads/2023/11/scythe-fuma3-otsikko-221123.jpg"
          alt="Third slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
