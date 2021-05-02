import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nishanPic2 from '../../images/nishan profile 2.png';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skill from '../Skill/Skill';
import ExperienceAndEducation from '../ExperienceAndEducation/ExperienceAndEducation';


const AboutMe = () => {
    return (
        <section id='about-me' className='mt-5 pt-5 mb-5'>
            <Container>
                <h1 className='text-center text-white mb-5'>ABOUT <span className='primary-color'>ME</span> </h1>
                <Row className='d-flex align-items-center'>
                    <Col md={6}>
                        <div className='img-div'>
                            <img className='img-fluid' src={nishanPic2} alt="" />
                        </div>
                    </Col>
                    <Col className='mt-5 text-white' md={6}>
                        <h5>First Name: Arifuzzaman</h5>
                        <h5>Last Name: Nishan</h5>
                        <h5>Address: Dhaka, Bangladesh</h5>

                        <h5>Language: Bangla, English</h5>
                        <h5>Phone: 01792159122</h5>
                        <h5>Email: arifuzzamannishan@gmail.com</h5>
                        <div className='mt-4'>
                            <a href="https://drive.google.com/uc?id=1ncyRyX0SF0VMdCcA-xOX8G3vliAYQn32" target='_blank'>
                                <button className='btn btn-danger btn-width'>
                                    <FontAwesomeIcon className='mr-2' icon={faArrowCircleDown} />
                                Download My Resume
                            </button>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Skill/>
                <ExperienceAndEducation/>
            </Container>
        </section>
    );
};

export default AboutMe;