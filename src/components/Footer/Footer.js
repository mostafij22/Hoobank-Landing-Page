import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col className='col-align' md={3}>
                    <img src={logo} alt="" />
                    <p className='mt-2'>A new way to make the payments <br /> easy, reliable and secure.</p>
                </Col>
                <Col className='col-align' md={3}>
                    <h5>Usefull Links</h5>
                    <p>Content</p>
                    <p>How it Works</p>
                    <p>Create</p>
                    <p>Explore</p>
                    <p>Terms & Service</p>
                </Col>
                <Col className='col-align' md={3}>
                    <h5>Community</h5>
                    <p>Help Center</p>
                    <p>Partners</p>
                    <p>Suggestions</p>
                    <p>Blog</p>
                    <p>Newsletters</p>
                </Col>
                <Col className='col-align' md={3}>
                    <h5>Partne</h5>
                    <p>Our Partner</p>
                    <p>Become a Partne</p>
                </Col>
            </Row>
            <Row className='border-top border-secondary'>
               <div className="footer-bottom">
                <p>Copyright 2022 HooBank. All Rights Reserved.</p>
                    <div className="social-icon">
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""> <i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
               </div>
            </Row>
        </Container>
    );
};

export default Footer;

