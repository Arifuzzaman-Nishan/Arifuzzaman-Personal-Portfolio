import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

import { faLinkedin, faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='mt-5 mb-5 pt-5 pb-5'>
            <Container className='text-center'>
                <div className='mb-5 text-white'>
                    <h5>Copyright © 2021 | Arifuzzaman Nishan</h5>
                    <h5>Address: Kollanpur, Dhaka</h5>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/arifuzzaman-nishan-675b97189/" target="_blank">
                        <FontAwesomeIcon className='mr-3 icon2 text-white' icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Arifuzzaman-Nishan" target="_blank">
                        <FontAwesomeIcon className='mr-3 icon2 text-white' icon={faGithub} />
                    </a>
                    <a href="https://www.facebook.com/nishanshathii/" target="_blank">
                        <FontAwesomeIcon className='mr-3 icon2 text-white' icon={faFacebook} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCYi1mQdVjq3ZfEkff_AL_ZA" target="_blank">
                        <FontAwesomeIcon className='mr-3 icon2 text-white' icon={faYoutube} />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;