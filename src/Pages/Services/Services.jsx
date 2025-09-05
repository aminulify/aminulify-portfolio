import React from 'react';
import './Services.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// icons 
import { MdCrop } from "react-icons/md";
import { LuBrush } from "react-icons/lu";
import { MdScreenshotMonitor } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const Services = () => {

    const servicesData = [
        {
            id: 1,
            service: "Brand Identity Design",
            description: "Create a unique brand identity with logos, colors, and visuals that tell your story and connect with your audience.",
            icon: <MdCrop/>
        },
        {
            id: 2,
            service: "Graphic Design",
            description: "Eye-catching designs for posters, flyers, banners, and marketing materials that make your business stand out.",
            icon: <LuBrush/>
        },
        {
            id: 3,
            service: "Animated Web Design",
            description: "Modern websites with smooth animations and interactive elements for a dynamic, engaging user experience.",
            icon: <MdOutlineDesignServices/>
        },
        {
            id: 4,
            service: "Website App. Development",
            description: "Custom web applications built with performance, security, and scalability to support your business goals.",
            icon: <MdScreenshotMonitor/>
        },
        {
            id: 5,
            service: "Social Carousel Design",
            description: "Creative and scroll-stopping carousel posts that showcase your products, services, or stories on social media.",
            icon: <IoBarChartOutline/>
        },
        {
            id: 6,
            service: "FB Business Page Setup",
            description: "Professional setup and optimization of your Facebook business page with branding, auto-messaging, and full customization.",
            icon: <MdOutlinePhonelinkSetup/>
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 md:gap-8 w-[85%] mx-auto md:my-16 my-8 items-center'>
            <aside className='col-span-2'>
                <div className='md:mb-24 mb-12 mt-10 left-aos'>
                    <h2 className='text-white text-[26px] md:text-3xl my-2 font-semibold'>Our Services<span className='pl-[2px] font-bold text-3xl md:text-[35px] text-[var(--mainColor)]'>.</span></h2>
                    <p className='mt-2 text-[#fffffff3] font-[300]'>Working successfully with my expertise in these fields for more than <span className='font-medium'>Seven years</span>. Our first priority is “Our customers are 100% satisfied with my professional work and my friendly demeanor."</p>
                    
                    <div className='flex gap-2 flex-wrap text-white my-3'>
                        <h2 className='text-white font-semibold border-b-[1px] border-[var(--mainColor)]'>Why choose us <span className='text-[var(--mainColor)] font-bold'>.</span></h2>
                        <p className='tags'>Fast Response</p>
                        <p className='tags'>Timely Delivery</p>
                        <p className='tags'>Affordable Prices</p>
                        <p className='tags'>Professional Work</p>
                        <p className='tags'>Friendly Communication</p>
                        <p className='tags'>Unlimited Support</p>
                    </div>
                </div>
            </aside>

            <aside className='col-span-3 right-aos md:mb-0 mb-28'>
            <Swiper
                    breakpoints={
                        {
                             '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              '@0.75': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 15,
                              },
                              '@1.50': {
                                slidesPerView: 3,
                                spaceBetween: 15,
                              },
                              '@2.50':{
                                slidesPerView: 3,
                                spaceBetween: 15,
                              }
                    }
                    }
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    
                    {
                        servicesData.map(data=>(
                            <SwiperSlide className='px-3 pt-5 service'>
                                <main className='text-white h-[180px] md:h-[230px] icon-style'>
                                <div className='text-3xl text-[var(--mainColor)]'>{data.icon}</div>
                                <h1 className='text-md font-medium mt-2'>{data.service} <span className='text-bold text-[var(--mainColor)]'>.</span></h1>
                                <p className='text-sm font-[300] pt-[1px] text-[#ffffffeb]'>{data.description}</p>
                                <div className="pt-3 icon absolute bottom-3"><GoArrowRight className=' text-white text-2xl icon-color'/></div>
                                </main>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </aside>
        </div>
    );
};

export default Services;