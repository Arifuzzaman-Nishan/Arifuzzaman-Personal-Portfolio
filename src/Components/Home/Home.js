import React from 'react';

import { 
    BrowserRouter as Router,
 } from 'react-router-dom';
import particlesConfiq from '../../Confiq/ParticalConfiq';

import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../NavigationBar/NavigationBar';
import Projects from '../Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div id='home' className='bg'>
            <NavigationBar />
            <HeaderMain />
            <AboutMe />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;