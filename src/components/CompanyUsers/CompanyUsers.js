import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CompanyUsers.css'

const CompanyUsers = () => {
    return (
        <Container>
            <Row className='g-0'>
                <Col sm={6} md={4}>
                    <div className="active-user">
                        <h2 className='me-2'>3800+</h2>
                        <p className='mb-0'>User Active</p>
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <div className="trusted-company">
                        <h2 className='me-2'>230+</h2>
                        <p className='mb-0'>TRUSTED BY COMPANY</p>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="transaction">
                        <h2 className='me-2'>$230M+</h2>
                        <p className='mb-0'>TRANSACTION</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyUsers;