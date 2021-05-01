import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../NavigationBar/NavigationBar';
import Projects from '../Projects/Projects';
// import './Home.css';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <HeaderMain />
            <AboutMe />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;