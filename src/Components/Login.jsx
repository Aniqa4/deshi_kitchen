import React from 'react'

function Login() {
  return (
    <div className='flex justify-center text-center'>
        <ul className='bg-slate-400 p-10 rounded'>
            <li className=' text-xl pb-5'>Choose an option to Log In</li>
            <li><button className=' bg-white rounded px-5 py-2 text-center'>Log In with Email/Password</button></li>
            <li><button className=' bg-white rounded px-5 py-2 my-5'>Log In with Gmail</button></li>
            <li><button className=' bg-white rounded px-5 py-2'>Log In with GitHub</button></li>
            <li>Do not have an account? Register.</li>
        </ul>
    </div>
  )
}

export default Login;