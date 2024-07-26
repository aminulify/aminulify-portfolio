import React from 'react';
import leftSide from '../../public/aside-left.png';
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { PiToolboxFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { AiFillProject } from "react-icons/ai";
import { PiShootingStarFill } from "react-icons/pi";

import bgImg from '../../public/bg.png';
import rightSide from '../../public/aside-right.png';
import './Navbar.css';
import { Tooltip } from 'react-tooltip';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {

    const handleTop = () =>{
        window.scrollTo(0,0);
    }

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <nav className='relative'>
            <img src={leftSide} className='opacity-design w-28 absolute opacity-60 -z-10' alt="left style image" />

            <img src={rightSide} className='opacity-design w-28 fixed bottom-0 right-0 opacity-60 -z-10' alt="left style image" />

            <img src={bgImg} className='fixed bottom-10 md:bottom-0 -z-10' alt="left style image" />

            {/* show this image when website view in small screen  */}
            <img src={bgImg} className='absolute hidden top-0 -z-10 rotate' alt="left style image" />

            {/* left side  */}
           <section className='w-[85%] mx-auto py-3 flex justify-between items-center'>
            <aside>
                    <Link to={'/'}><h2 className='text-white font-semibold text-2xl'>Aminulify<span className='text-[var(--mainColor)] pl-[2px] text-3xl'>.</span></h2></Link>
            </aside> 

                {/* right side  */}
            <aside>
                <ul className='[&_li]:cursor-pointer text-white flex text-[18px] [&_li]:text-white'>
                    <Link to={'https://www.facebook.com/aminulify/'} target='_blank'><li className='hover:text-[var(--mainColor)] duration-300 animate-bounce px-2 md:px-3'><FaFacebookF/></li></Link>
                    <Link to={'https://dribbble.com/aminulify'} target='_blank'><li className='hover:text-[var(--mainColor)] duration-300 animate-bounce px-2 md:px-3'><FaDribbble/></li></Link>
                    <Link to={'https://www.behance.net/aminulify'} target='_blank'><li className='hover:text-[var(--mainColor)] duration-300 animate-bounce px-2 md:px-3'><FaBehance/></li></Link>
                    <Link to={'https://www.linkedin.com/in/aminulify/'} target='_blank'><li className='hover:text-[var(--mainColor)] duration-300 animate-bounce px-2 md:px-3'><FaLinkedinIn/></li></Link>
                    <Link to={'https://github.com/aminulify'} target='_blank'><li className='hover:text-[var(--mainColor)] duration-300 animate-bounce px-2 md:px-3'><FaGithub/></li></Link>
                </ul>
            </aside>  
           </section>

           {/* right side navbar  */}
           <section className='left-aos fixed nav-bar-phone-screen md:top-[35%] md:right-10'>
           <ul onClick={handleTop} className='[&_li]:cursor-pointer text-white flex justify-center md:flex-col items-center md:p-3 text-[20px] [&_li]:text-white md:bg-[var(--smartBg)] backdrop-blur-md md:border-none border-t-[2px] border-[var(--mainColor)] rounded-lg nav-icons z-20'>
                    <Link to="/" data-tooltip-id="my-tooltip" data-tooltip-content="Home" data-tooltip-offset={15} ><li className='hover:text-[var(--mainColor)] duration-300 px-1 py-3'><FaHome/></li></Link>
                    <Link to="/about" data-tooltip-id="my-tooltip" data-tooltip-content="About" data-tooltip-offset={15}><li className='hover:text-[var(--mainColor)] duration-300 px-1 py-3'><FaUser/></li></Link>
                    <Link to="/services" data-tooltip-id="my-tooltip" data-tooltip-content="Services" data-tooltip-offset={15}><li className='hover:text-[var(--mainColor)] duration-300 px-1 py-3'><PiToolboxFill/></li></Link>
                    <Link to="/projects" data-tooltip-id="my-tooltip" data-tooltip-content="Projects" data-tooltip-offset={15}><li className='hover:text-[var(--mainColor)] duration-300 px-1 py-3'><AiFillProject/></li></Link>
                    <Link to="/testimonials" data-tooltip-id="my-tooltip" data-tooltip-content="Testimonials" data-tooltip-offset={15}><li className='hover:text-[var(--mainColor)] duration-300 px-1 py-3'><PiShootingStarFill/></li></Link>
                    <Link to="/contact" data-tooltip-id="my-tooltip" data-tooltip-content="Contact" data-tooltip-offset={15}><li className='hover:text-[var(--mainColor)] duration-300 px-1 pt-2 pb-3'><MdPermPhoneMsg/></li></Link>
                </ul>
           </section>

           <Tooltip id="my-tooltip" style={{ border: "1px solid var(--mainColor)" , fontWeight: 600, background: 'var(--mainColor)', transition: "all 0.3s"}} place={isMobile ? 'top': 'left'} className='z-10'/>

           <Outlet/>
        </nav>
    );
};

export default Navbar;