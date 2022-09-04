import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Reviews.css'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import quotes from '../../assets/quotes.svg';
import people01 from '../../assets/people01.png';

const Reviews = () => {
    return (
        <Container className='py-5'>
            <Row className='py-5'>
                <Col md={6}>
                    <h3 className='w-50'>What people are saying about us</h3>
                </Col>
                <Col md={6}>
                    <p className='w-75'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </Col>
            </Row>

            <Swiper className='swiper-container'
                // slidesPerView={3} 
                spaceBetween={20}
                // className="mySwiper"
                loop={true}

                breakpoints={{
                    // when window width is >= 400px
                    400: {
                      width: 400,
                      slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                      },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 3,
                    },
                    // when window width is >= 992px
                    992: {
                        width: 992,
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide >
                    <div className="SlideCard">
                        <img src={quotes} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='user-details'>
                            <img src={people01} alt="" />
                            <div className="name-title">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>  
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="SlideCard">
                        <img src={quotes} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='user-details'>
                            <img src={people01} alt="" />
                            <div className="name-title">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="SlideCard">
                        <img src={quotes} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='user-details'>
                            <img src={people01} alt="" />
                            <div className="name-title">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="SlideCard">
                        <img src={quotes} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='user-details'>
                            <img src={people01} alt="" />
                            <div className="name-title">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="SlideCard">
                        <img src={quotes} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='user-details'>
                            <img src={people01} alt="" />
                            <div className="name-title">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </Container>
    );
};

export default Reviews;
