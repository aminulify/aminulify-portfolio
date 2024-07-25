import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
    return (
        <div className='relative max-w-2xl mx-16 md:mx-auto top-aos'>
            <h1 className='text-2xl md:text-3xl text-white text-center font-semibold mt-10 mb-5 border-b-[1.5px] border-[var(--mainColor)] pb-1 w-fit mx-auto'>Contact Me</h1>

            <div>
                <label className='text-[var(--mainColor)]'>Name</label>
                <input type="text" name='name' placeholder='Enter your name' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' />
            </div>
            <section className='grid md:grid-cols-2 grid-cols-1 md:gap-8'>
            <div className='py-2'>
                <label className='text-[var(--mainColor)]'>Email</label>
                <input type="text" name='email' placeholder='example@example.com' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' />
            </div>
            <div className='pb-2 md:py-2'>
                <label className='text-[var(--mainColor)]'>Contact</label>
                <input type="text" name='contact' placeholder='Enter your phone number' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' />
            </div>
            </section>

            <div className=''>
                <label className='text-[var(--mainColor)]'>Message</label>
                <textarea type="text" name='message' rows={3} placeholder='Write here ...' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' />
            </div>

            <a href="mailto: mdfahad1024@gmail.com ? Subject = Please follow us"><button className='icon-style flex gap-[1px] items-center bg-[var(--mainColor)] btn px-8 py-3 mt-4 rounded-sm text-white md:mb-0 mb-32'>Send <GoArrowRight className='icon'/></button></a>
        </div>
    );
};

export default Contact;