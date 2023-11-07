import React, { useState } from 'react';
import Error from './Error'; // Import the Error component

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // State to store the error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Email validation using regex
    if (e.target.name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValid = emailPattern.test(e.target.value);
      setEmailValid(isValid);
      setErrorMessage(isValid ? '' : 'Please enter a valid email address');
    }

    // Name validation (example: name must be at least 3 characters)
    if (e.target.name === 'name') {
      const isValid = e.target.value.length >= 3;
      setNameValid(isValid);
      setErrorMessage(isValid ? '' : 'Name must be at least 3 characters');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any errors exist before handling form submission
    if (emailValid && nameValid) {
      // Handle form submission with formData
      console.log('Form data:', formData);
    }
  };

  return (
    <div className='contact-container'>
      <h2 className='contact-h2'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errorMessage && <Error message={errorMessage} />} {/* Display error if present */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
