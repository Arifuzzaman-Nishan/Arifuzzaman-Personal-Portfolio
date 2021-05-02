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
        <div className='d-md-flex border border-white mb-5 p-5'>
            <Col className='mt-5 mb-5' md={7}>
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
                <div className='mt-5 text-white'>
                    <h3>Technology</h3>
                    {
                        technology.map(technology => <h5 className='d-inline'>
                            <span className='mr-2 mb-2 p-2 badge badge-secondary'>{technology}</span>
                        </h5>)
                    }
                    <div className='mt-2 d-md-flex'>
                        <div className='mb-3'>
                            <a href={live} target='_blank'>
                                <button className='btn btn-danger mr-3'>
                                    <FontAwesomeIcon className='mr-2' icon={faGlobe} />
                                Website
                            </button>
                            </a>
                        </div>
                        <div>
                            <a href={github} target='blank'>
                                <button className='btn btn-danger'>
                                    <FontAwesomeIcon className='mr-2' icon={faGithub} />
                                Github
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className='mt-5 mb-5 text-white' md={5}>
                <h2 className='text-center'>{projectName}</h2>
                <article className='mb-2'>
                    {
                        description.map(text => <ul>
                            <li className='text-justify'>{text}</li>
                        </ul>)
                    }
                </article>
            </Col>
        </div>
    );
};

export default ShowProject;