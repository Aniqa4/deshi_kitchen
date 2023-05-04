import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';

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
      <ul className='md:flex justify-between items-center border p-5'>
        <li className=' font-bold text-3xl'>
          <span className=' text-green-950 '>Deshi</span>
          <span className=' text-red-800'>Kitchen</span>
        </li>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
        <li className='flex justify-center'><span>
          {
            user && <img src={user.photoURL} className=' rounded-full' style={{width:"46px"}} title={user.displayName}/>
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