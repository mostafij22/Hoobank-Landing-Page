import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Rewards.css'
import star from '../../assets/Star.svg'
import Shield from '../../assets/Shield.svg'
import send from '../../assets/Send.svg'


const Rewards = () => {
    return (
        <section>
            <Container className='py-5'>
                <Row>
                    <Col md={6} className="rewardLeftText">
                        <h2 className='w-75 mb-5'>You do the business, we’ll handle the money.</h2>
                        <p className='w-75 mb-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                        <button className='main-btn'>Get Started</button>
                    </Col>
                    <Col md={6}>
                        <div className='rewards'>
                            <div className="icon">
                                <img src={star} alt="" className='me-2' />
                            </div>
                            <div className="rewards-text">
                                <h5>Rewards</h5>
                                <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                        <div className='secure'>
                            <div className="icon">
                                <img src={Shield} alt="" className='me-2' />
                            </div>
                            <div className="rewards-text">
                                <h5>100% Secured</h5>
                                <p>We take proactive steps make sure your information and transactions are secure.</p>
                            </div>
                        </div>
                        <div className='transfer'>
                            <div className="icon">
                                <img src={send} alt="" className='me-2' />
                            </div>
                            <div className="rewards-text">
                                <h5>Balance Transfer</h5>
                                <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Rewards;