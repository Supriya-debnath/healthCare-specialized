import React from 'react';
import img1 from "../../images/banner.jpg";
import img2 from "../../images/ba.jpeg";
import img3 from "../../images/banner3.jpg";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

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






// import React from 'react'
// import Slider from 'react-touch-drag-slider'
// import images from './images';


// const Banner = () => {
//   return (
//     <Slider
//           onSlideComplete={(i) => {
//             console.log('finished dragging, current slide is', i)
//           }}
//           onSlideStart={(i) => {
//             console.log('started dragging on slide', i)
//           }}
//           activeIndex={0}
//           threshHold={100}
//           transition={0.5}
//           scaleOnDrag={true}
//         >
//           {images.map(({ url, title }, index) => (
//             <img src={url} key={index} alt={title} />
//           ))}
//         </Slider>
//   );
// };

// export default Banner;







