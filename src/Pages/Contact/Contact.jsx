import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GoArrowRight } from "react-icons/go";
  import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICES, import.meta.env.VITE_EMAILJS_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
      })
      .then(
        () => {
            e.target.reset();
            // console.log('done');
            toast.success('Send Successfully');  

        },
        (error) => {
            // console.log(error);
            toast.error('Something went wrong!');  
        },
      );
    }
    return (
        <section>
            {/* toast  */}
            <ToastContainer style={{width: '250px'}}/>
        

            <form onSubmit={handleSubmit} ref={form} className='relative max-w-2xl mx-16 md:mx-auto top-aos'>
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

            <button type='submit' className='icon-style flex gap-[1px] items-center bg-[var(--mainColor)] btn px-8 py-3 mt-4 rounded-sm text-white md:mb-0 mb-32'>Send <GoArrowRight className='icon'/></button>

        </form>
        </section>
    );
};

export default Contact;