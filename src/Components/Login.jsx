import React from 'react'

function Login() {
  return (
    <div className='flex justify-center text-center m-20'>
        <ul className=' border p-20 rounded'>
            <li className=' text-xl pb-5'>Choose an option to Log In</li>
            <li><button className=' bg-black text-white rounded px-5 py-2'>Log In with Email/Password</button></li>
            <li><button className=' bg-black text-white rounded px-5 py-2 my-5'>Log In with Gmail</button></li>
            <li><button className=' bg-black text-white rounded px-5 py-2 mb-5'>Log In with GitHub</button></li>
            <li>Do not have an account?<span className=' underline'> Register.</span></li>
        </ul>
    </div>
  )
}

export default Login;