import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Jump from 'react-reveal/Jump';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5kim51j', 'template_9jd56wq', e.target, 'user_SsYUO8eFOwctYaInq3vkc')
            .then((result) => {
                console.log(result.text);
                alert('successfully email send');
            }, (error) => {
                console.log(error.text);
                alert(error.text);
            });
        e.target.reset();
    }

    return (
        <Jump>
            <section id='contacts' className='mt-5 mb-5 pb-5 pt-5'>
                <Container className='text-white'>
                    <h1 className='title text-center my-5'> <span className='primary-color'>CONTACT </span> WITH ME</h1>
                    <form className='m-auto' style={{ maxWidth: '40rem' }} onSubmit={sendEmail}>
                        <div className='mb-3'>
                            <label htmlFor="name">Your Name</label>
                            <input placeholder='Full Name' className='form-control' name='name' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Email">Your Email</label>
                            <input placeholder='Your Email' className='form-control' name='email' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="message">Your Message</label>
                            <textarea spellCheck='false' rows='5' placeholder='Your message' className='form-control' name='message' required />
                        </div>
                        <input value='send message' className='btn btn-danger' type="submit" />
                    </form>
                </Container>
            </section>
        </Jump>
    );
};

export default Contact;