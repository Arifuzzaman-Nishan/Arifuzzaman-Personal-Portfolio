import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo1.png';
import './NavigationBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
    const [colorChange, setColorChange] = useState(false);
    const [navIcon,setNavIcon] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor);

    // const handleChangeIcon = (value) => {
    //     console.log(value);
    //     setNavIcon(value);
    // }

    console.log(navIcon)

    return (
        <Navbar className={`${colorChange && 'background'} navbar-dark`} sticky="top" expand="lg">
            <Container>
                <AnchorLink offset='100' className='brand' href="#home">
                    <img className='logo' src={logo} alt="logo.." />
                </AnchorLink>

                <Navbar.Toggle className='' onClick={() => setNavIcon(!navIcon)} aria-controls="basic-navbar-nav">
                    {navIcon && <FontAwesomeIcon className='text-danger font-icon' icon={faTimes} />}
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <AnchorLink offset='100' className='nav-link' href="#home">Home</AnchorLink>
                        <AnchorLink offset='100' className='nav-link' href="#about-me">About me</AnchorLink>

                        <AnchorLink offset='100' className='nav-link' href="#blog">Blog</AnchorLink>
                        <AnchorLink offset='100' className='nav-link' href="#projects">Portfolio</AnchorLink>
                        <AnchorLink offset='100' className='nav-link' href="#contacts">Contacts</AnchorLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;