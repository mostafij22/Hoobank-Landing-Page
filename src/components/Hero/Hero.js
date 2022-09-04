import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import './Hero.css'
import robotHand from '../../assets/robot.png'
import discountSvg from '../../assets/Discount.svg'
import arrowSvg from '../../assets/arrow-up.svg'

const Hero = () => {
    return (
     
            <Row className='g-0'>
                <Col md={7} className="hero-details">

                    <div className='position-relative'>
                        <div className='discout-msg'>
                            <img src={discountSvg} alt="" />
                            <span>20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                        </div>
                        <div className='hero-text'>
                            <h1>The Next </h1>    
                            <h1>Generation</h1>    
                            <h1>Payment Method</h1> 
                        </div>   
                        <p className='hero-para'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                        <div className="get-start">
                            <a href="">Get <img src={arrowSvg} alt="" />Started</a>
                        </div>
                    </div>
                    
                </Col>
                <Col md={5} className="robot-image">
                    <img src={robotHand} alt="" />
                </Col>
             </Row>
        
    );
};

export default Hero;

