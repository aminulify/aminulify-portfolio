import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { GoArrowRight } from "react-icons/go";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {

    const [selectedService, setSelectedService] = useState("");

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const name= e.target.name.value;
        const email= e.target.email.value;
        const contact= e.target.contact.value; 
        const message= e.target.message.value; 
        const service= selectedService;

        const formData = {name, email, contact, message, service};

        emailjs
      .send('service_93mlf7b','template_b1ywtdh', formData, 'zD29NRoqRu1DD1tM9')

      .then(
        () => {
            e.target.reset();
            console.log('done');
            toast.success('Send Successfully');  

        },
        (error) => {
            console.log(error);
            toast.error('Something went wrong!');  
        },
      );
    }
    return (
        <section>
            {/* toast  */}
            <ToastContainer style={{width: '250px'}}/>
        

            <form onSubmit={handleSubmit} className='relative max-w-2xl mx-16 md:mx-auto top-aos md:my-16 my-10'>
            <h2 className='text-center text-white text-[26px] md:text-3xl my-5 font-semibold'>Contact <span className='text-[var(--mainColor)]'>Me<span className='pl-[1px] font-bold text-3xl md:text-[35px]'>.</span></span></h2>

            <div>
                <label className='text-[var(--mainColor)]'>Name</label>
                <input type="text" name='name' placeholder='Enter your name' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md'
                
                />
            </div>
            <section className='grid md:grid-cols-2 grid-cols-1 md:gap-8'>
            <div className='py-2'>
                <label className='text-[var(--mainColor)]'>Email</label>
                <input type="text" name='email' placeholder='example@example.com' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' 
             
               
                 />
            </div>
            <div className='pb-2 md:py-2'>
                <label className='text-[var(--mainColor)]'>Contact</label>
                <input type="text" name='contact' placeholder='Enter your phone number' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md'
                
            
                 />
            </div>
            </section>

            <div className='pb-2 md:py-2'>
                <label className='text-[var(--mainColor)]'>Select a Service:</label>
                <select
                    value={selectedService}
                    onChange={handleServiceChange}
                    className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md cursor-pointer"
                    required
                >
                    <option className='text-slate-700 cursor-pointer' value="">Select a Service</option>
                    <option className='text-slate-700 cursor-pointer' value="Logo Design">Logo Design</option>
                    <option className='text-slate-700 cursor-pointer' value="Logo + Complete Branding Design">Logo + Complete Branding Design</option>
                    <option className='text-slate-700 cursor-pointer' value="Social Media Poster Design">Social Media Poster Design</option>
                    <option className='text-slate-700 cursor-pointer' value="Website Design and Development">Website Design and Development</option>
                    <option className='text-slate-700 cursor-pointer' value="Web Application Development">Web Application Development</option>
                </select>
            </div>

            <div className=''>
                <label className='text-[var(--mainColor)]'>Description</label>
                <textarea type="text" name='message' rows={4} placeholder='Write project details here...' className='bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md' 
               
                />
            </div>

            <button type='submit' className='icon-style flex gap-[1px] items-center bg-[var(--mainColor)] btn px-8 py-3 mt-4 rounded-sm text-white md:mb-0 mb-32'>Send <GoArrowRight className='icon'/></button>

        </form>
        </section>
    );
};

export default Contact;