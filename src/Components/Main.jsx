import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
    </div>
  )
}

export default Main;