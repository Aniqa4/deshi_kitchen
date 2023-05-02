import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-center">
        <p className="text-gray-600 text-sm">&copy; 2023
          <span className=' text-green-950 '> Deshi</span>
          <span className=' text-red-800'>Kitchen</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
