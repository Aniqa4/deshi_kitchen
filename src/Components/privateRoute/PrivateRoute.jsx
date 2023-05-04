import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
    const {user, loading}=useContext(AuthContext);

    const location=useLocation();
    console.log(location);

    if(loading){
      return <div></div>
    }

    console.log(user);
    if(user){
        return children;
    }
  return <Navigate state={{from:location}} to="/login" replace></Navigate>
}

export default PrivateRoute;