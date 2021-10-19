import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./servicesData.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
            

        <div>
            <h2 className="service-title">Services</h2>
             <h1>Our Departments</h1>
             <p className="service-title">It has survived not only five centuries, but also the leap  <br />
              into electronic typesetting, remaining essentially unchanged.</p>
       
        <div className="service-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Service service={service}></Service>)
            }
            </Row>
            </Container>
        </div>
        </div>

    );

};

export default Services;