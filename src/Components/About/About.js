import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutDetails from '../AboutDetails/AboutDetails';
import './About.css';

const About = () => {
    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch("./AboutData.json")
        .then(res => res.json())
        .then(data => setAbout(data))
    }, [])

    return (

        <>
            <div className="about-title">
            <p>Specialist Doctors</p>
            <h1 className="about-us">About Us</h1>
            <p>It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
            </div>
             <div className="service-container">
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                about.map(ab => <AboutDetails about={ab}></AboutDetails>)
            }
            </Row>
            </Container>
        </div>
        </>
    );
};

export default About;