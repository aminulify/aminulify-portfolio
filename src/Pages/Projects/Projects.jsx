import React, { useState } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const Projects = () => {

    const imagesGraphic = [
        {
            img: "https://i.ibb.co/rtC0nyY/brand11.jpg",
            url: "https://www.behance.net/aminulify"
        },
        {
            img: "https://i.ibb.co/Q6N5F5D/brand1.jpg",
            url: "https://dribbble.com/shots/23695644-Kacha-Organic-Food-Brand-Identity-Design"
        },
        {
            img: "https://i.ibb.co/HzNWFsH/brand2.jpg",
            url: "https://dribbble.com/shots/23843019-Luxury-Beauty-Care-Logo-Guidelines"
        },
        {
            img: "https://i.ibb.co/rwgX7b1/brand3.jpg",
            url: "https://dribbble.com/shots/23354121-Farms-Complete-Branding-Design"
        },
        {
            img: "https://i.ibb.co/hC54KwH/brand4.jpg",
            url: "https://dribbble.com/shots/23491631-Luxury-Fashion-Brand-Identity-Design"
        },
        {
            img: "https://i.ibb.co/7VQLcM8/brand5.jpg",
            url: "https://dribbble.com/shots/22513879-Sunglass-Company-Brand-identity-Design"
        },
        {
            img: "https://i.ibb.co/4dsJkqZ/brand6.jpg",
            url: "https://www.behance.net/gallery/160320247/Steel-Construction-Building-Developer"
        },
        {
            img: "https://i.ibb.co/Z1rQfwy/brand8.jpg",
            url: "https://www.behance.net/gallery/170691143/Cleaning-Company-Complete-Branding-Design"
        },
        {
            img: "https://i.ibb.co/PQXdJjb/brand10.jpg",
            url: "https://www.behance.net/gallery/136753755/Many-Types-Outstanding-Brand-identity-Designs"
        },
    ]

    const imagesCode = [
        {
            img: "https://i.ibb.co/s5vKFMm/coding1.jpg",
            url: "https://bistro-boss-restaurant-183da.web.app/"
        },
        {
            img: "https://i.ibb.co/YXk5Lv5/coding2.jpg",
            url: "https://cars-doctor-54bba.web.app/"
        },
        {
            img: "https://i.ibb.co/gb1zxZq/coding3.jpg",
            url: "https://openai-image-generator-6c3a8.web.app/"
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
        <div className="w-[85%] mx-auto">
            <header className='text-center md:mb-10 mb-5 mt-5 left-aos'>
                <h2 className='text-white text-[26px] md:text-3xl my-5 font-semibold'>Recent <span className='text-[var(--mainColor)]'>Projects<span className='pl-[1px] font-bold text-3xl md:text-[35px]'>.</span></span></h2>
            </header>
            <aside className='right-aos relative'>
                <div className='flex gap-5'>
                    <button className={`font-medium border-b-[1.5px] ${graphic ? 'border-[var(--mainColor)] text-[var(--mainColor)]':'border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleGraphicBtn}>Graphic Design<span className='pl-[1px] font-bold'>.</span></button>
                    
                    <button className={`font-medium border-b-[1.5px] ${code ? 'border-[var(--mainColor)] text-[var(--mainColor)]':'border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleWebBtn}>Web Design / Development<span className='pl-[1px] font-bold'>.</span></button>
                    
                </div>
            </aside>    

            <main className='mt-5 mb-20 '>
                {
                    graphic && <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    {
                        imagesGraphic.map(image => (
                                <div className='relative overflow-hidden delay-75 right-aos'>
                                    <Link to={image.url} target='_blank'>

                                    <img src={image.img} className='rounded-md' alt="image" />

                                    <div className='image-style'>
                                        <h2 className='w-full h-full flex items-center justify-center gap-[1px] text-white icon-style opacity-0 hover:opacity-[100%] duration-300'>View Details <div className="icon"><GoArrowRight className=' text-white text-xl'/></div></h2>
                                    </div>
                                    </Link>
                                </div>
                        ))
                    }
                    </div>
                }

{
                    code && <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    {
                        imagesCode.map(image => (
                            <div className='relative overflow-hidden delay-75 right-aos'>
                            <Link to={image.url} target='_blank'>

                            <img src={image.img} className='rounded-md' alt="image" />

                            <div className='image-style'>
                                <h2 className='w-full h-full flex items-center justify-center gap-[1px] text-white icon-style opacity-0 hover:opacity-[100%] duration-300'>View Details <div className="icon"><GoArrowRight className=' text-white text-xl'/></div></h2>
                            </div>
                            </Link>
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