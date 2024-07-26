import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        try{
        fetch('../../../public/testimonials.json')
        .then(res=>res.json())
        .then(data=> 
            setReviews(data)
        )
        }
        catch(e){
            throw new Error("Data Fetching Error:",e);
        }
    },[])
    return (
        <div className='md:w-[60%] w-[90%] mx-auto'>
            <header className='text-center md:mb-24 mb-12 mt-10 left-aos'>
                <h2 className='text-white text-[26px] md:text-3xl my-5 font-semibold'>What clients <span className='text-[var(--mainColor)]'>say<span className='pl-[1px] font-bold text-3xl md:text-[35px]'>.</span></span></h2>
            </header>

            <main>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
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
                        reviews.map(client=> (
                            <SwiperSlide>
                                <section className='flex flex-col md:flex-row md:justify-between items-center md:gap-10 text-white px-10 md:px-20 right-aos'>

                                    <div className='text-center grid place-items-center md:w-[40%] lg:w-[40%] w-full'>
                                        <div>
                                        {
                                            client.img ? <img src={client.img} alt="" className='md:w-20 w-16 h-16 md:h-20 rounded-full bg-[var(--mainColor)]' /> : <h1 className='grid place-content-center md:w-20 md:h-20 w-16 h-16 rounded-full bg-[var(--mainColor)] text-white font-semibold text-4xl'>{client.name.slice(0,1)}</h1>
                                        }
                                        </div>
                                        <h1 className='mt-2 font-medium md:font-semibold text-md'>{client.name}</h1>
                                        <p className='opacity-50 text-[13px] font-[400] w-full'>{client.country}</p>
                                        
                                    </div>

                                    <span class="vertical-line"></span>

                                    <div>
                                        <h2 className='text-4xl opacity-50 text-[var(--mainColor)]'><FaQuoteLeft/></h2>
                                        <p className=' text-sm md:text-[16px] py-2 font-[300] text-center md:text-left'>{client.reviews}</p>
                                    </div>
                                    
                                </section>
                            </SwiperSlide>
                        ))
                    }
                    {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                </Swiper>
            </main>
        </div>
    );
};

export default Testimonials;