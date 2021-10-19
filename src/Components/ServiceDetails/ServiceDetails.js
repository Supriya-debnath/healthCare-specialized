import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ServiceDetails = ({service}) => {
    console.log(service);
    const { name, description, img } = service;
    const {setCart} = useContext(UserContext)

    return (
      <Col>
        <Card className="shadow mb-4">
          <div className="d-flex align-items-center p-2">
            <Card.Img
              className="w-100 pt-3"
              style={{ objectFit: "contain", height: "300px" }}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button as={Link} to="/detailsInfo" onClick={()=>setCart(service)} className="service-btn">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServiceDetails;