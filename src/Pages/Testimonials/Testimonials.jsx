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
    // const [reviews, setReviews] = useState([]);
    // useEffect(()=>{
    //     try{
    //     fetch('../../../public/testimonials.json')
    //     .then(res=>res.json())
    //     .then(data=> 
    //         setReviews(data)
    //     )
    //     }
    //     catch(e){
    //         throw new Error("Data Fetching Error:",e);
    //     }
    // },[])

    const reviews = [
        {
            _id: "1",
            name: "Camélia",
            img: "",
            country: "Tunisia",
            reviews: "It was great working with Aminul, his responses are quick and he respected the delivery time, he has even sent a first delivery before the deadline. I recommend this designer for his flexibility with the buyer's suggestions, his commitment to timelines and his fast and high quality work."
        },
        {
            _id: "2",
            name: "Musab H.",
            img: "",
            country: "United State",
            reviews: "Perfect job and fast respond. I recommend him and I will definitely work with him on future."
        },
        {
            _id: "3",
            name: "Shivansh",
            img: "",
            country: "India",
            reviews: "Great Design, able to figure out what is needed even when I don't know what I need. Great Communication."
        },
        {
            _id: "4",
            name: "Richard",
            img: "",
            country: "United State",
            reviews: "He is a good communicator and legit. I recommend him and I will definitely work with him on future."
        },
        {
            _id: "5",
            name: "Sita_Jaski",
            img: "",
            country: "Trinidad and Tobago",
            reviews: "Working with Aminul was a dream! The design exceeded my expectations and brought my vision to life. Highly recommended!."
        },
        {
            _id: "6",
            name: "Emily",
            img: "",
            country: "Poland",
            reviews: "From start to finish, the process was smooth and efficient. The end result is a beautifully designed, user-friendly website. Great job!"
        },
        {
            _id: "7",
            name: "Laura",
            img: "",
            country: "United Kingdom",
            reviews: "Exceptional talent and creativity. Aminul delivered complete branding design that not only looks fantastic but also change our brand visual perfectly."
        },
        {
            _id: "8",
            name: "Michael B.",
            img: "",
            country: "United State",
            reviews: "The best graphic designer we've ever worked with! The branding design and website design is sleek, professional, and exactly what we needed."
        },
        {
            _id: "9",
            name: "Jrihry_Henrify",
            img: "",
            country: "United Kingdom",
            reviews: "Their design skills are top-notch. They transformed our outdated branding into a modern our customers love. The person was flexible and attentive throughout the process. A five-star experience!"
        }
    ]
    return (
        <div className='md:w-[60%] w-[90%] mx-auto md:my-16 my-10'>
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
                                <section key={client._id} className='flex flex-col md:flex-row md:justify-between items-center md:gap-10 text-white px-10 md:px-20 right-aos'>

                                    <div className='text-center grid place-items-center md:w-[40%] lg:w-[40%] w-full '>
                                        <div>
                                        {
                                            client.img ? <div className=' md:w-20 md:h-20 w-16 h-16'>
                                                <img src={client.img} alt="" className='object-cover object-center rounded-full md:w-20 md:h-20 w-16 h-16' />
                                            </div> : <h1 className='grid place-content-center md:w-20 md:h-20 w-16 h-16 rounded-full bg-[var(--mainColor)] text-white font-semibold text-4xl'>{client.name.slice(0,1)}</h1>
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