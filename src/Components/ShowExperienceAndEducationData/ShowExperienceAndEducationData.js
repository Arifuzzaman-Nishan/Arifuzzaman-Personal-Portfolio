import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './ShowExpericeneAndEducationData.css';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const ShowExperienceAndEducationData = ({ education }) => {
    const { name, degree, varsityName, gpa, year } = education;
    return (
        <Col md={4} className='mt-2 mb-5 '>
            <div className='icon-div'>
                <FontAwesomeIcon className='icon' icon={faGraduationCap}/>
            </div>
            <div className='text-center education-style'>
                <h3>{name}</h3>
                <h4>{degree}</h4>
                <h5>{varsityName}</h5>
                <h6>{gpa}</h6>
                <h6>{year}</h6>
            </div>
        </Col>
    );
};

export default ShowExperienceAndEducationData;