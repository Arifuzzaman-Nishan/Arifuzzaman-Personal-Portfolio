import React from 'react';
import { Container } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';

const Blog = () => {
    return (
        <LightSpeed right>
            <section id='blog' className='mt-5 mb-5 pb-5 pt-5'>
                <Container>
                    <h1 className='title text-center text-white'><span className='primary-color'>BL</span>OGS</h1>
                    <h3 className='text-center text-white'>Blog coming soon...</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sit vero vitae eaque ut veritatis nihil rerum qui expedita perferendis error quisquam, natus eius, aliquam quasi sequi ipsum. Consequuntur saepe illo iure rem veniam id totam quam, corporis numquam consequatur nisi placeat molestias ratione dicta animi cumque reiciendis architecto modi rerum esse minus, soluta praesentium. Omnis placeat quasi molestias obcaecati dolorem nemo, eum consequatur quia officiis, ratione unde non fuga?</p>
                </Container>
            </section>
        </LightSpeed>
    );
};

export default Blog;