import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';


function Registration() {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleRegistration = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;


    let errors = '';

    if (password.length < 6 && password.length != 0) {
      errors += 'Password must have at least 6 characters.';
    }

    if (!email) {
      errors += 'Email field cannot be empty.';
    }

    if (!password) {
      errors += 'Password field cannot be empty.';
    }

    setError(errors.trim());

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })


  }
  return (
    <div>
      <div className='w-4/12 mx-auto p-20 border my-20'>
        <form onSubmit={handleRegistration} className='grid grid-cols-1'>
          <input type="text" name="name" placeholder='Enter your name' className='border border-black p-2 mb-2'/>
          <input type="email" name="email" placeholder='Email ' className='border border-black p-2 ' />
          <input type="password" name="password" placeholder='Password' className='border border-black p-2 my-2' />
          <input type="text" name="photo" placeholder='Enter your photo url' className='border border-black p-2 '/>
          <input type="submit" value="Register" className='border border-black p-2 font-semibold mt-2' />
        </form>
        <p className=' text-center pt-5'>Already have an account?<span className=' underline'><Link to="/login">Log In</Link></span></p>
        <p className=' text-center pt-2 text-red-700'>{error}</p>
      </div>
    </div>
  )
}

export default Registration;