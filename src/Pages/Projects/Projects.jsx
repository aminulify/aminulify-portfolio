import React, { useState } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const Projects = () => {

    const imagesGraphic = [
        {
            img: "https://i.ibb.co/rtC0nyY/brand11.jpg",
            url: "https://www.behance.net/aminulify",
            behance: "https://www.behance.net/aminulify",
            dribble: "https://dribbble.com/aminulify",
            name: "Some types of brand identity designs."
        },
        {
            img: "https://i.ibb.co/fx747tk/brand1.jpg",
            url: "https://dribbble.com/shots/23695644-Kacha-Organic-Food-Brand-Identity-Design",
            behance: "https://www.behance.net/gallery/192196619/Kacha-Organic-Food-Company-Brand-identity-Design",
            dribble: "https://dribbble.com/shots/23695644-Kacha-Organic-Food-Brand-Identity-Design",
            name: "Organic food company complete branding design.",
        },
        {
            img: "https://i.ibb.co/kgnpwx9/brand2.jpg",
            url: "https://dribbble.com/shots/23843019-Luxury-Beauty-Care-Logo-Guidelines",
            behance: "https://www.behance.net/gallery/194101915/Luxury-Beauty-Care-Branding-Guideliness",
            dribble: "https://dribbble.com/shots/23843019-Luxury-Beauty-Care-Logo-Guidelines",
            name: "Luxury beauty care company complete branding design.",
        },
        {
            img: "https://i.ibb.co/rwgX7b1/brand3.jpg",
            url: "https://dribbble.com/shots/23354121-Farms-Complete-Branding-Design",
            behance: "https://www.behance.net/gallery/187887299/Farms-Complete-Branding-Design",
            dribble: "https://dribbble.com/shots/23354121-Farms-Complete-Branding-Design",
            name: "Organic farm company complete branding design.",
        },
        {
            img: "https://i.ibb.co/dP6FW7n/brand4.jpg",
            url: "https://dribbble.com/shots/23491631-Luxury-Fashion-Brand-Identity-Design",
            behance: "https://www.behance.net/gallery/189622003/Luxury-Fashion-Brand-Identity-Design",
            dribble: "https://dribbble.com/shots/23491631-Luxury-Fashion-Brand-Identity-Design",
            name: "Luxury fashion company branding design",
        },
        {
            img: "https://i.ibb.co/F5XrW07/brand5.jpg",
            url: "https://dribbble.com/shots/22513879-Sunglass-Company-Brand-identity-Design",
            behance: "https://www.behance.net/gallery/179619679/Sunglass-Company-Typograhic-Brand-identity-Design",
            dribble: "https://dribbble.com/shots/22513879-Sunglass-Company-Brand-identity-Design",
            name: "Sunglass company conceptual brand identity design.",
        },
        {
            img: "https://i.ibb.co/4R8rqKp/brand6.jpg",
            url: "https://www.behance.net/gallery/160320247/Steel-Construction-Building-Developer",
            behance: "https://www.behance.net/gallery/160320247/Steel-Construction-Building-Developer",
            dribble: "https://www.behance.net/gallery/160320247/Steel-Construction-Building-Developer",
            name: "Steel building company complete branding design.",
        },
        {
            img: "https://i.ibb.co/Kbt1Bjt/brand8.jpg",
            url: "https://www.behance.net/gallery/170691143/Cleaning-Company-Complete-Branding-Design",
            behance: "https://www.behance.net/gallery/170691143/Cleaning-Company-Complete-Branding-Design",
            dribble: "https://dribbble.com/shots/21466480-Cleaning-Company-Complete-Branding-Design",
            name: "Cleaning company complete branding design.",
        },
        {
            img: "https://i.ibb.co/vkfWLTk/brand10.jpg",
            url: "https://www.behance.net/gallery/136753755/Many-Types-Outstanding-Brand-identity-Designs",
            behance: "https://www.behance.net/gallery/122745395/OGLED-Typographic-Brand-identity",
            dribble: "https://www.behance.net/gallery/122745395/OGLED-Typographic-Brand-identity",
            name: "Online consultant company conceptual brand identity design.",
        },
    ]

    const imagesCode = [
        {
            img: "https://i.ibb.co/s5vKFMm/coding1.jpg",
            url: "https://bistro-boss-restaurant-183da.web.app/",
            name: "Full Stack Restaurant Web Application.",
            design: "https://dribbble.com/shots/24441252-Restaurant-Full-Stack-Web-Design-Development"
        },
        {
            img: "https://i.ibb.co/YXk5Lv5/coding2.jpg",
            url: "https://cars-doctor-54bba.web.app/",
            name: "Full Stack Car Service Appointment Web Application.",
            design: "https://dribbble.com/shots/24378285-Car-Service-Center-Booking-Web-Design-Development"
        },
        {
            img: "https://i.ibb.co/gb1zxZq/coding3.jpg",
            url: "https://openai-image-generator-6c3a8.web.app/",
            name: "OpenAi Dall-e Clone (Prompt to Ai Image Generator).",
            design: "https://dribbble.com/shots/24533843-OpenAi-Dall-e-Full-Stack-Web-Application-Clone"
        },
        {
            img: "https://cdn.dribbble.com/userupload/15808019/file/original-8c91f40b0d4a7a9186a20c507816e41f.jpg?resize=752x",
            url: "https://aminulify.com",
            name: "Aminulify Outstanding Portfolio Website Template.",
            design: "https://dribbble.com/shots/24592775-Aminulify-Portfolio-Website-Design"
        },
    ]

    const [graphic, setGraphic] = useState(true);
    const [code, setCode] = useState(false);

    const handleGraphicBtn = () =>{
        setGraphic(true);
        setCode(false);
    }
    const handleWebBtn = () =>{
        setGraphic(false);
        setCode(true);
    }
    return (
        <div className="w-[85%] mx-auto md:my-16 mt-10 mb-16">
            <header className='text-center md:mb-16 mb-8 mt-5 left-aos'>
                <h2 className='text-white text-[26px] md:text-3xl my-5 font-semibold'>Recent <span className='text-[var(--mainColor)]'>Projects<span className='pl-[1px] font-bold text-3xl md:text-[35px]'>.</span></span></h2>
            </header>
            <aside className='right-aos relative'>
                <div className='flex gap-5'>
                    <button className={`font-medium border-b-[1.5px] ${graphic ? 'border-[var(--mainColor)] text-[var(--mainColor)] md:text-lg text-[14px] md:font-medium font-[700]':'md:text-lg text-[14px] md:font-medium font-[700] border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleGraphicBtn}>Graphic Design<span className='pl-[1px] font-bold'>.</span></button>
                    
                    <button className={`font-medium border-b-[1.5px] ${code ? 'border-[var(--mainColor)] text-[var(--mainColor)] md:text-lg text-[14px] md:font-medium font-[700]':'md:text-lg text-[14px] md:font-medium font-[700] border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleWebBtn}>Web Design / Development<span className='pl-[1px] font-bold'>.</span></button>
                    
                </div>
            </aside>    

            <main className='mt-5 mb-20 '>
                {
                    graphic && <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        imagesGraphic.map(image => (
                            <div className='right-aos main-image'>

                            <div className='p-4 border border-[var(--mainColor)] bg-[var(--secondaryColor)] rounded-lg backdrop-blur-sm'>
                            <img src={image.img} className='rounded-md' alt="image" />

                                <h2 className='text-white mt-3'>Project: <span className='font-[300]'>{image.name}</span></h2>

                            <div className='mt-3'>

                                <div className='flex gap-4 mt-3 text-white justify-between w-full'>
                                    <Link to={image.design} target='_blank' className='flex gap-1 items-center justify-center w-[50%] py-2 bg-[var(--mainColor)] rounded-md font-[400] icon-style'>Behance <GoArrowRight className='icon'/></Link>
                                    <Link to={image.url} target='_blank' className='flex gap-1 items-center justify-center w-[50%] border-[1.5px] rounded-md border-[var(--mainColor)] font-[400] icon-style'>Dribble <GoArrowRight className='icon'/></Link>
                                </div>
                            </div>
                            </div>
                         
                        </div>
                        ))
                    }
                    </div>
                }

{
                    code && <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        imagesCode.map(image => (
                            <div className='right-aos main-image'>
                        

                            <div className='p-4 border border-[var(--mainColor)] bg-[var(--secondaryColor)] rounded-lg backdrop-blur-sm'>
                            <img src={image.img} className='rounded-md' alt="image" />

                                <div className=''>
                                    <h2 className='w-full h-full flex items-center justify-center gap-[1px] text-white icon-style opacity-0 hover:opacity-[100%] duration-300'></h2>
                                </div>

                            <div className='mt-3'>
                                <h2 className='text-white'>Project: <span className='font-[300]'>{image.name}</span></h2>

                                <div className='flex gap-4 mt-3 text-white justify-between w-full'>
                                    <Link to={image.design} target='_blank' className='flex gap-1 items-center justify-center w-[50%] py-2 bg-[var(--mainColor)] rounded-md font-[400] icon-style'>Ui Design <GoArrowRight className='icon'/></Link>
                                    <Link to={image.url} target='_blank' className='flex gap-1 items-center justify-center w-[50%] border-[1.5px] rounded-md border-[var(--mainColor)] font-[400] icon-style'>Live Website <GoArrowRight className='icon'/></Link>
                                </div>
                            </div>
                            </div>
                         
                        </div>
                                
                        ))
                    }
                    </div>
                }
            </main>
        </div>
    );
};

export default Projects;