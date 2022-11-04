import React from 'react';
import './ContactForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      terms: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your first name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      message: Yup.string().required('Please enter a message'),
      terms: Yup.array().required('Terms of service must be checked'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert('form submitted');

      resetForm();
    },
  });

  return (
    <div className='contact-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='text-container'>
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className='input-container'>
          <div className='name-container'>
            <div className='column'>
              <label htmlFor='first_name'>First name</label>
              <input
                placeholder='Enter your first name '
                id='first_name'
                name='firstName'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              <p className='error'>
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : ''}
              </p>
            </div>
            <div className='column'>
              <label htmlFor='last_name'>Last name</label>
              <input
                placeholder='Enter your last name '
                id='last_name'
                name='lastName'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              <p className='error'>
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ''}
              </p>
            </div>
          </div>
          <div className='email-container column'>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='yourname@email.com'
              id='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <p className='error'>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''}
            </p>
          </div>
          <div className='textarea-container column'>
            <label htmlFor='message'>Message</label>
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id='message'
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            ></textarea>
            <p className='error'>
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : ''}
            </p>
          </div>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              name='terms'
              value={'checked'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor='terms'>
              You agree to providing your Adeniyi Abayomi data to name who may
              contact you.
            </label>
          </div>
          <button id='btn__submit' type='submit' disabled={!formik.isValid}>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
