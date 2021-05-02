import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo1.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar bg='dark' className='background' sticky="top" expand="lg">
            <Container>
                <Navbar.Brand className='brand' href="#home">
                    <img className='logo' src={logo} alt="logo.." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-link' href="#about-me">About me</Nav.Link>
                        {/* <Nav.Link className='nav-link text-white' href="#home">Services</Nav.Link> */}
                        <Nav.Link className='nav-link' href="#blog">Blog</Nav.Link>
                        <Nav.Link className='nav-link' href="#projects">Portfolio</Nav.Link>
                        <Nav.Link className='nav-link' href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;