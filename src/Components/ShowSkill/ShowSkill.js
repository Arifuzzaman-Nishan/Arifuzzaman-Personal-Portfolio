import React from 'react';
import { Col } from 'react-bootstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ShowSkill = ({ data }) => {
    return (
        <Col className='mb-5' md={3}>
            <div className='m-auto' style={{width:'10rem'}}>
                <CircularProgressbar value={data.percentage} text={`${data.percentage}%`}
                 styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#FFB400",
                    // trailColor: "gold"
                  })} 
                />
            </div>
            <h5 style={{textTransform:'uppercase'}} className='text-center mt-3'>{data.name}</h5>
        </Col>
    );
};

export default ShowSkill;