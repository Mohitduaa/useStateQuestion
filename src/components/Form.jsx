import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('All fields are required');
    } else {
      setError('');
      console.log('Form submitted:', { name, email });
      
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <form className='my-5 mx-5' onSubmit={handleSubmit} >
        <div>
          <label>Name:</label>
          <input
            className='border border-black px-2'
            placeholder='Enter your name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className='border border-black px-2'
            placeholder='Enter your Email id'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
