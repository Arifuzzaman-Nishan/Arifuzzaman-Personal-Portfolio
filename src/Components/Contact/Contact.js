import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='my-5 pt-5'>
            <Container>
                <h1 className='text-center my-5'>Contact</h1>
                <form className='m-auto' style={{ width: '40rem' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="name">Your Name</label>
                        <input placeholder='Full Name' className='form-control'  {...register("name")} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Email">Your Email</label>
                        <input placeholder='Your Email' className='form-control'  {...register("email")} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Email">Your Message</label>
                        <textarea spellCheck='false' rows='5' placeholder='Your Description' className='form-control'  {...register("description")} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                    <input value='send message' className='btn btn-danger' type="submit" />
                </form>
            </Container>
        </section>
    );
};

export default Contact;