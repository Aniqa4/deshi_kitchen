import React from 'react'
import { NavLink } from 'react-router-dom';

function ActiveLink({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? " bg-blue-300 px-5 py-2" : ""}
        >
            {children}
        </NavLink>
    )
}

export default ActiveLink;