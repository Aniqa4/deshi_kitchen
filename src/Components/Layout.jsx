import React from 'react'
import Main from './Main';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
    <Main></Main>
    <Outlet></Outlet>
    </>
  )
}

export default Layout;