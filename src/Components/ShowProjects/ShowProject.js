import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './ShowProjects.css';

const ShowProject = ({ projectData }) => {
    console.log(projectData);
    const { description, github, image, live, projectName, technology } = projectData;
    return (
        <>
            <Col className='mt-5 mb-5' md={8}>
                <Carousel className='carousel'>
                    {
                        image.map(image => <Carousel.Item interval={1000}>
                            <div className=''>
                                <img
                                    className="w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Col>
            <Col className='mt-5 mb-5' md={4}>
                <h2>{projectName}</h2>
                <article className='mb-2'>
                    {description}
                </article>
                <h3>Technology</h3>
                {
                    technology.map(technology => <h5 className='d-inline'>
                        <span className='mr-2 mb-2 p-2 badge badge-secondary'>{technology}</span>
                    </h5>)
                }
                <div className='mt-2'>
                    <a href={live} target='_blank'>
                        <button className='btn btn-danger mr-3'>
                            <FontAwesomeIcon className='mr-2' icon={faGlobe} />
                        Website
                    </button>
                    </a>
                    <a href={github} target='blank'>
                        <button className='btn btn-danger'>
                            <FontAwesomeIcon className='mr-2' icon={faGithub} />
                        Github
                    </button>
                    </a>
                </div>
            </Col>
        </>
    );
};

export default ShowProject;