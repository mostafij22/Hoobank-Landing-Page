import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css'

const Service = () => {
    return (
        <Container>
            <Row className='service'>
                <Col md={8}>
                    <div className="service-text">
                        <h1>Let’s try our service now!</h1>
                        <p>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
                    </div>
                </Col>
                <Col>
                    <button className='main-btn service-btn'>Get Started</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;



