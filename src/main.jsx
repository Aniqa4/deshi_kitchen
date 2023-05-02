import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:"/",
    element:<Footer></Footer>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
