import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <div className='text-container'>
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className='input-container'>
          <div className='name-container'>
            <div className='column'>
              <label for='first_name'>First name</label>
              <input placeholder='Enter your first name ' id='first_name' />
            </div>
            <div className='column'>
              <label for='last_name'>Last name</label>
              <input placeholder='Enter your last name ' id='last_name' />
            </div>
          </div>
          <div className='email-container column'>
            <label for='email'>Email</label>
            <input placeholder='yourname@email.com' id='email' />
          </div>
          <div className='textarea-container column'>
            <label for='message'>Message</label>
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id='message'
            ></textarea>
          </div>
          <div className='checkbox-container'>
            <input type='checkbox' />
            <label>
              You agree to providing your data to name who may contact you.
            </label>
          </div>
          <button id='btn__submit'>Send message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
