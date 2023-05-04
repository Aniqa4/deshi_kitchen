import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

function Main() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error =>
        console.log(error)
      )
  }
  //console.log(user);

  return (
    <div className=' text-center bg-white'>
      <ul className='flex justify-between items-center border p-5'>
        <li className=' font-bold text-3xl'>
          <span className=' text-green-950 '>Deshi</span>
          <span className=' text-red-800'>Kitchen</span>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li className='flex'><span>
          {
            user && <img src={user.photoURL} className=' rounded-full w-6/12'/>
          }
        </span>
          {
            user ?
              <button onClick={handleLogOut} className=' bg-black text-white rounded px-5 py-2'>Log Out</button> :
              <button className=' bg-black text-white rounded px-5 py-2'><Link to="/login">Log In</Link></button>
          }
        </li>
      </ul>
    </div>
  )
}

export default Main;