import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Rewards/Rewards.css'
import '../Payouts/Payouts.css'
import card from '../../assets/card.png'



const BetterDeal = () => {
    return (
        <section>
            <Container className='py-5'>
                <Row>
                    <Col md={6} className="rewardLeftText">
                        <h2 className='w-75 mb-5'>Find a better card deal in few easy steps.</h2>
                        <p className='w-75 mb-5'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                        <button className='main-btn'>Get Started</button>
                    </Col>
                    <Col md={6}>
                        <div className="bill-img">
                            <img src={card} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BetterDeal;