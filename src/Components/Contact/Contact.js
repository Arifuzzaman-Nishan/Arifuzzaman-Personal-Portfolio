import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

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
        <section className='my-5 pt-5'>
            <Container>
                <h1 className='text-center my-5'>Contact With Me</h1>
                <form className='m-auto' style={{ maxWidth: '40rem' }} onSubmit={sendEmail}>
                    <div className='mb-3'>
                        <label htmlFor="name">Your Name</label>
                        <input placeholder='Full Name' className='form-control'  {...register("name")} />
                        {errors.name && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Email">Your Email</label>
                        <input placeholder='Your Email' className='form-control'  {...register("email")} />
                        {errors.email && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="message">Your Message</label>
                        <textarea spellCheck='false' rows='5' placeholder='Your message' className='form-control'  {...register("message")} />
                        {errors.message && <span className='text-danger'>This field is required</span>}
                    </div>
                    <input value='send message' className='btn btn-danger' type="submit" />
                </form>
            </Container>
        </section>
    );
};

export default Contact;