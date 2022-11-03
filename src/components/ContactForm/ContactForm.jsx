import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div>
          <div>
            <div>
              <label for='first_name'>First name</label>
              <input placeholder='Enter your first name ' id='first_name' />
            </div>
            <div>
              <label for='last_name'>Last name</label>
              <input placeholder='Enter your last name ' id='last_name' />
            </div>
          </div>
          <div>
            <label for='email'>Email</label>
            <input placeholder='yourname@email.com' id='email' />
          </div>
          <div>
            <label for='message'>Message</label>
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id='message'
            ></textarea>
          </div>
          <div>
            <input type='checkbox' />
            <p>You agree to providing your data to name who may contact you.</p>
          </div>
          <button id='btn__submit'>Send message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
