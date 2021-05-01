import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from '../ChangingProgressProvider/ChangingProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import { Row } from 'react-bootstrap';
import ShowSkill from '../ShowSkill/ShowSkill';

const Skill = () => {
    // const percentage = 66;
    const skillData = [
        {
            name: 'HTML',
            percentage: '80'
        },
        {
            name: 'CSS',
            percentage: '70'
        },
        {
            name: 'Bootstrap',
            percentage: '60'
        },
        {
            name: 'Javascript',
            percentage: '60'
        },
        {
            name: 'React Js',
            percentage: '60'
        },
        {
            name: 'Node Js',
            percentage: '40'
        },
        {
            name: 'MongoDB',
            percentage: '40',
        },
        {
            name: 'C++',
            percentage: '80',
        },

    ]
    return (
        <div className='mt-5 pt-5'>
            <h2 className='text-center mb-5 pb-5'>My Skills</h2>
            <Row>
                {
                    skillData.map(data => <ShowSkill data={data}></ShowSkill>)
                }
            </Row>
        </div>
    );
};

export default Skill;