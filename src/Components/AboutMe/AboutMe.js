import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import nishanPic2 from '../../images/nishan profile 2.png';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skill from '../Skill/Skill';
import ExperienceAndEducation from '../ExperienceAndEducation/ExperienceAndEducation';
import './AboutMe.css';
import Bounce from 'react-reveal/Bounce';

const AboutMe = () => {
    const nishanPic2 = 'https://i.ibb.co/PM4ywV6/nishan-profile-2.png';
    
    return (
        <section id='about-me' className='mt-5 pt-5 mb-5'>
            <Container>
                <Bounce>
                    <h1 className='title text-center text-white mb-5'>ABOUT <span className='primary-color'>ME</span> </h1>
                    <Row className='d-flex align-items-center'>
                        <Col md={6}>
                            <div className='img-div'>
                                <img className='img-fluid' src={nishanPic2} alt="" />
                            </div>
                        </Col>
                        <Col className='mt-5' md={6}>
                            <h5 className='text-white'> <span className='name'>First Name:</span> <span className='font-style'>Arifuzzaman</span> </h5>
                            <h5 className='text-white'> <span className='name'>Last Name:</span> <span className='font-style'>Nishan</span> </h5>
                            <h5 className='text-white'> <span className='name'>Address:</span> <span className='font-style'>Dhaka, Bangladesh</span> </h5>
                            <h5 className='text-white'> <span className='name'>Language:</span> <span className='font-style'>Bangla, English</span> </h5>
                            <h5 className='text-white'> <span className='name'>Phone:</span> <span className='font-style'>07192159122</span> </h5>
                            <h5 className='text-white'> <span className='name'>Email:</span> <span className='font-style'>arifuzzamannishan@gmail.com</span> </h5>
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
                    <Skill />
                    <ExperienceAndEducation />
                </Bounce>
            </Container>
        </section>
    );
};

export default AboutMe;