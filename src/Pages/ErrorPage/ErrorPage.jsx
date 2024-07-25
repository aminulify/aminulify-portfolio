import React from 'react';
import errorImg from '../../../public/404page.png';
import { GoArrowLeft } from 'react-icons/go';
import logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-white md:h-full h-screen'>
            <Link to={'/'}><img src={logo} className='pt-8 mx-auto w-48 left-aos'  alt="error page image" /></Link>
            <img src={errorImg} className='md:w-[50%] w-[80%] mx-auto right-aos'  alt="error page image" />
            <h2 className='text-center letter text-lg font-medium text-[var(--mainColor)] left-aos'>PAGE NOT FOUND</h2>
            <Link to={'/'} className='flex justify-center'>
            <button className='right-aos rounded-full mt-3 mb-10 py-3 px-9 gap-3 items-center bg-[var(--mainColor)] text-white flex leading-[10px] hover:gap-0 duration-500'>Back <GoArrowLeft /></button>
            </Link>
        </div>
    );
};

export default ErrorPage;