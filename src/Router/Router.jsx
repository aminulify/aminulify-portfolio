import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Navbar from '../Shared/Navbar';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Projects from '../Pages/Projects/Projects';
import Testimonials from '../Pages/Testimonials/Testimonials';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/projects',
            element: <Projects/>
        },
        {
            path: '/testimonials',
            element: <Testimonials/>
        },
        
      ],
      errorElement: <ErrorPage/>
    },
    {
      path: '/*',
      element: <ErrorPage/>
    },
  ]);

export default router;