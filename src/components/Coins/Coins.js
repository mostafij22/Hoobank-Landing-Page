import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Coins.css'
import airbnb from '../../assets/airbnb.png'
import binance from '../../assets/binance.png'
import coinbase from '../../assets/coinbase.png'
import dropbox from '../../assets/dropbox.png'

const Coins = () => {
    return (
        <Container>
            <Row className='g-3 my-5'>
                <Col md={3}>
                    <div className="coin-image">
                        <img src={airbnb} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="coin-image">
                        <img src={binance} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="coin-image">
                        <img src={coinbase} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="coin-image">
                        <img src={dropbox} alt="" />
                    </div>
                </Col>
            </Row>
        </Container> 
    );
};

export default Coins;