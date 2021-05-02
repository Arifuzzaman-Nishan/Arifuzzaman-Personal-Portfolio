import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo1.png';
import './NavigationBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavigationBar = () => {
    return (
        <Navbar className='background' sticky="top" expand="lg">
            <Container>
                <AnchorLink offset='100' className='brand' href="#home">
                    <img className='logo' src={logo} alt="logo.." />
                </AnchorLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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