import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nishanPic from '../../images/nishan profile1.png';
import './HeaderMain.css';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import nishan5 from '../../images/nishan5 (1).jpg';
import nishan4 from '../../images/nishan4.jpg';
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

const HeaderMain = () => {
    return (
        <>
            <Particles
                canvasClassName="example"
                />
            <Fade top big>
                <Container  className='mt-5 pt-5 pb-5 mb-5  main-section'>
                    <Row className='align-items-center'>
                        <Col className='mb-5' md={6}>
                            <h1 className='name-style'>Hello,<span></span></h1>
                            <h1 className='name-style'>My Name is<span></span></h1>
                            <h1 className='name-style name-color'>Arifuzzaman Nishan<span></span></h1>
                            <Typed
                                className='typed-text'
                                strings={[
                                    'React Developer',
                                    'Front End Developer',
                                    'Programmer'
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                            <article className='text-white'>
                                <p>I am Web developer with knowing some framework for the frontend and the backend. I know Basic MongoDB Database but basically I am a MERN developer and also I am a competitive programmer.</p>
                            </article>
                            <div className='mt-5'>
                                <a href="https://www.linkedin.com/in/arifuzzaman-nishan-675b97189/" target='_blank'>
                                    <button className='btn btn-danger btn-width'>
                                        <FontAwesomeIcon className='mr-2' icon={faLinkedin} />
                                Hire Me
                            </button>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='img-div'>
                                <img className='img-fluid img-style' src={nishan4} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fade >
        </>
    );
};

export default HeaderMain;