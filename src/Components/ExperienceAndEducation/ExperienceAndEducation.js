import React from 'react';
import { Row } from 'react-bootstrap';
import ShowExperienceAndEducationData from '../ShowExperienceAndEducationData/ShowExperienceAndEducationData';

const ExperienceAndEducation = () => {
    const educationData = [
        {
            name: 'Under Graduation',
            degree: 'B.Sc in CSE',
            varsityName: 'Daffodil International University',
            gpa: '3.91',
            year: '2019 - current'
        },
        {
            name: 'Higher Secondary',
            degree: 'HSC',
            varsityName: 'Govt Bangla College',
            gpa: '4.25',
            year: '2015 - 2017'
        },
        {
            name: 'Secondary',
            degree: 'SSC',
            varsityName: "Carew's High School",
            gpa: '4.83',
            year: '2010 - 2015'
        }
    ]
    return (
        <div className='pb-5'>
            <h2 className='my-5 text-center text-warning'>EDUCATION</h2>
            <Row>
                {
                    educationData.map(education => <ShowExperienceAndEducationData
                        education={education} 
                    />)
                }
            </Row>
        </div>
    );
};

export default ExperienceAndEducation;