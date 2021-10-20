import React from 'react';
import img1 from "../../images/banner.jpg";
import img2 from "../../images/ba.jpeg";
import img3 from "../../images/banner3.jpg";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                
  <Carousel.Item>
      
    <img
      className="d-block w-100 h-50"
      src={img1}
      alt="The Best Hostipal And Doctors."
    />
    <Carousel.Caption>
    <h3 style={{fontSize: '70px'}}>The Best Hostipal And Doctors.</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt=""
    />

    <Carousel.Caption>
      <h3 style={{fontSize: '70px'}}>Best Treatment And Happy Life</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt=""
      
    />

    <Carousel.Caption>
      <h3 style={{fontSize: '70px'}}>Healthy Tables And Medicine</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;







