import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page', location);
  const from = location.state?.from?.pathname || "/";
  const google= new GoogleAuthProvider();

  const handleLogIn = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })

  }
  
  const handleGoogleSignIn=()=>{
    googleSignIn(google)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true })
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  }

  return (
    <div className='w-4/12 mx-auto p-20 border my-20'>
      <form onSubmit={handleLogIn} className='grid grid-cols-1'>
        <input type="email" name="email" placeholder='Email ' className='border border-black p-2 ' />
        <input type="password" name="password" placeholder='Password' className='border border-black p-2 my-2' />
        <input type="submit" value="Sign In" className='border border-black p-2 font-semibold' />
      </form>
      <div className='my-5'>
        <hr />
      </div>
      <div className='grid grid-cols-1'>
        <button onClick={handleGoogleSignIn} className=' bg-black text-white rounded px-5 py-2 mb-2'>Sign In with Google</button>
        <button className=' bg-black text-white rounded px-5 py-2'>Sign In with GitHub</button>
      </div>
      <p className=' text-center pt-5'>Do not have an account?<span className=' underline'><Link to="/registration">Register</Link></span></p>
      <p className=' text-center pt-2 text-red-700'>{error}</p>
    </div>
  )
}

export default Login;