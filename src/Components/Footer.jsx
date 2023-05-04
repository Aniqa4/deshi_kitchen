import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className='flex justify-between mx-10 text-gray-700'>
        <div>
          <h1 className=' font-semibold'>Contact Us</h1>
          <ul>
            <li>Mobile:</li>
            <li>+8801500000000</li>
            <li>+8801800000000</li>
            <li>Email:</li>
            <li>deshikitchen@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='underline'><Link to="/blog">Blog</Link></li>
            <li className='py-10 underline'><Link to="/login">Sign In</Link></li>
            <li className='underline'><Link to="/registration">Register</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <p className="text-gray-600 text-sm">&copy; 2023
          <span className=' text-green-950 '> Deshi</span>
          <span className=' text-red-800'>Kitchen</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
