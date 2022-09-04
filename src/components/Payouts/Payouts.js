import React from 'react';
import './Payouts.css';
import bill from '../../assets/bill.png'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import { Col, Container, Row } from 'react-bootstrap';

const Payouts = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className="bill-img">
                        <img src={bill} alt="" />
                    </div>
                </Col>
                <Col md={6} className="payout-content">
                    <h2 className='mb-4'>Easily control your billing & invoicing.</h2>
                    <p  className='mb-4'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <div className="apps">
                        <img src={apple} alt="" />
                        <img src={google} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Payouts;