import React from 'react';
import {Container, Row } from 'react-bootstrap';
import ShowProject from '../ShowProjects/ShowProject';
import Zoom from 'react-reveal/Zoom';
const Projects = () => {
    const projectsData = [
        {
            image: ['https://i.ibb.co/MBY6wNc/mobi-Care1.png', 'https://i.ibb.co/vzzbJvQ/mobi-Care2.png', 'https://i.ibb.co/PFCGck7/mobi-Care3.png'],
            projectName: 'Mobi Care',
            technology: ['HTML', 'CSS3', 'Bootstrap', 'React Bootstrap', 'Javascript', 'React Js', 'React Router', 'Node Js', 'Express Js', 'MongoDB'],
            live: 'https://mobi-care-2a942.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/Mobi-Care-Client',

            description: ['This is mainly a full-stack mobile repairing website.', 'For Log-in, Here I am using Google sign-in from firebase Authentication.', 'Here I am using private Routing', "After the login, it redirects to the payment gateway section.", 'Here I am using the stripe payment gateway. After the payment user orders the service successfully.', "In the user dashboard, the user can see all the order lists and order status, and also user can review this website and it's dynamically showing on this website's home page testimonial section.", 'On this website, there is added another feature and that is the Admin panel.', 'Admin can show all the order lists and Admin can update the order status.', 'Admin can Add another service to the website. Admin can make someone admin to the website.', 'Also Admin can delete the order and delete the service.']
        },
        {
            image: ['https://i.ibb.co/c26v5Pq/go-Mobile1.png', 'https://i.ibb.co/GvM7WYJ/go-Mobile2.png', 'https://i.ibb.co/47R63nL/go-Mobile3.png'],
            projectName: 'Go Mobile',

            technology: ['HTML', 'CSS3', 'Bootstrap', 'React Bootstrap', 'Javascript', 'React Js', 'React Router', 'Node Js', 'Express Js', 'MongoDB'],
            live: 'https://go-mobilee.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/Go-Mobile-Client',

            description: ['This is a full-stack mobile buying website.', 'For Log-in, Here I am using Google sign-in from firebase Authentication.', 'Here I am using private Routing', 'On the Home page, the user can see different kinds of mobiles, and when the user orders mobile then it goes to the login page.', 'After the login, it redirects to the Check out page and here user can confirm the order.', 'in the website user can see all the order lists.', 'in the admin page user can add some mobile products and also user can delete the mobile product.', "Here users can easily log out from this website."]
        },
        {
            image: ['https://i.ibb.co/fdNf3Xn/weMover1.png', 'https://i.ibb.co/pR3YZs7/weMover2.png', 'https://i.ibb.co/KzhCG5B/weMover3.png'],
            projectName: 'We Mover',
            technology: ['HTML', 'CSS3', 'Bootstrap', 'React Bootstrap', 'Javascript', 'React Js', 'React Router', 'Firebase Authentication'],
            live: 'https://we-mover.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/We-Mover',

            description: ['This is a Ride-Sharing website.', 'For Log-in, Here I am using Google sign-in from firebase Authentication.', 'Here I am using private Routing', 'Also users can log in with register an account on this website.', 'On the Home page, the user can see different kinds of vehicles, and when the user book the vehicle then goes to the login page.', 'After the login, it redirects to another page and here user can search a location by fill up a form.', 'After searching, users can see available vehicles and their prices also see the location on the map.', 'Here users can easily log out from this website.'],
        }

    ]
    return (
        <section id='projects' className='mt-5 pt-5 mb-5'>
            <Container>
                <Zoom right>
                    <h1 className='title text-center text-white mb-5'>PROJ<span className='primary-color'>ECTS</span></h1>
                </Zoom>
                <Row className='mt-5 mb-5 pb-5'>
                    {
                        projectsData.map(projectData => <ShowProject projectData={projectData} />)
                    }
                </Row>

            </Container>
        </section>
    );
};

export default Projects;