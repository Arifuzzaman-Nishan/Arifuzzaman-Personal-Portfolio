import React from 'react';
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import mobiCare1 from '../../images/Mobi-Care/mobiCare1.png';
import mobiCare2 from '../../images/Mobi-Care/mobiCare2.png';
import mobiCare3 from '../../images/Mobi-Care/mobiCare3.png';

import ShowProject from '../ShowProjects/ShowProject';

import goMobile1 from '../../images/Go-Mobile/goMobile1.png';
import goMobile2 from '../../images/Go-Mobile/goMobile2.png';
import goMobile3 from '../../images/Go-Mobile/goMobile3.png';

import weMover1 from '../../images/We-Mover/weMover1.png';
import weMover2 from '../../images/We-Mover/weMover2.png';
import weMover3 from '../../images/We-Mover/weMover3.png';




const Projects = () => {
    const projectsData = [
        {
            image: [mobiCare1,mobiCare2,mobiCare3],
            projectName: 'Mobi Care',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quas.',
            technology: ['HTML','CSS3','Bootstrap','React Bootstrap','Javascript','React Js','React Router','Node Js','Express Js', 'MongoDB'],
            live: 'https://mobi-care-2a942.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/Mobi-Care-Client'
        },
        {
            image: [goMobile1,goMobile2,goMobile3],
            projectName: 'Go Mobile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quas.',
            technology: ['HTML','CSS3','Bootstrap','React Bootstrap','Javascript','React Js','React Router','Node Js','Express Js', 'MongoDB'],
            live: 'https://go-mobilee.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/Go-Mobile-Client'
        },
        {
            image: [weMover1,weMover2,weMover3],
            projectName: 'We Mover',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quas.',
            technology: ['HTML','CSS3','Bootstrap','React Bootstrap','Javascript','React Js','React Router','Firebase Authentication'],
            live: 'https://we-mover.web.app/home',
            github: 'https://github.com/Arifuzzaman-Nishan/We-Mover'
        }

    ]
    return (
        <section className='mt-5 mb-5'>
            <Container>
                <h1 className='text-center mb-5'>Projects</h1>
                <Row>
                    {
                        projectsData.map(projectData => <ShowProject projectData={projectData}/>)
                    }
                </Row>

            </Container>
        </section>
    );
};

export default Projects;