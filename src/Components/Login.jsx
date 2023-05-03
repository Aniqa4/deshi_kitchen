import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='w-4/12 mx-auto p-20 border my-20'>
      <form action="" className='grid grid-cols-1'>
        <input type="email" name="email" placeholder='Email ' className='border border-black p-2 ' />
        <input type="password" name="password" placeholder='Password' className='border border-black p-2 my-2' />
        <input type="submit" value="Log In" className='border border-black p-2 font-semibold' />
      </form>
      <p className='text-center py-10'> <hr /></p>
      <div className='grid grid-cols-1'>
        <button className=' bg-black text-white rounded px-5 py-2 mb-2'>Log In with Google</button>
        <button className=' bg-black text-white rounded px-5 py-2'>Log In with GitHub</button>
      </div>
      <p className=' text-center pt-5'>Do not have an account?<span className=' underline'><Link to="/registration">Register</Link></span></p>
    </div>
  )
}

export default Login;