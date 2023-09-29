import React from 'react'
import Main from './Main';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div className=' md:mx-auto mx-5'>
        <Main></Main>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout;