import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className=' text-center bg-white'>
      <ul className='flex justify-between items-center border p-5'>
        <li className=' font-bold text-3xl'>
          <span className=' text-green-950 '>Deshi</span>
          <span className=' text-red-800'>Kitchen</span>
        </li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><button className=' bg-black text-white rounded px-5 py-2'><Link to="/login">Log In</Link></button></li>
      </ul>
    </div>
  )
}

export default Main;