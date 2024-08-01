import React from 'react';
import profileImg from '../../../public/front-img.png';
import { GoArrowRight } from "react-icons/go";
import textDesign from '../../../public/round-text.png';
import btnDesignImg from '../../../public/text-round.png'; 
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
 
    return (
        <div className='w-[85%] mx-auto md:my-16 my-10 md:grid md:grid-cols-2 flex flex-col-reverse md:flex-row md:justify-between items-center'>
            
            {/* home left section  */}
            <aside className='mb-32 md:mb-0 right-aos'>
                <h2 className='font-bold text-3xl md:text-4xl text-white'>Aminul Islam Fahad</h2>
                <h2 className='text-2xl md:text-3xl text-white py-3'>I am a <span className='text-[var(--mainColor)] font-semibold signatureFont text-[28px] md:text-[40px]'><TypeAnimation
                preRenderFirstString={true}
                        sequence={[
                            
                            'Senior Graphic Designer',
                            1500,
                            'Web Ui / Ux Designer',
                            1500,
                            'Full Stack Web Developer',
                            1500,
                            
                        ]}
                        // speed={50}
                        
                        repeat={Infinity}
                        /></span></h2>
                <p className='text-[var(--paraColor)] text-white font-[300] pb-5 text-md md:text-lg'>Enhance your brand with modern and good looking branding design and website. Run your business to smart way.</p>

                <a href="job-resume.pdf" download>
                <div className='relative'> 
                        <div className='w-32 mt-12 flex justify-center items-center'>
                            <img src={btnDesignImg} className='rotate-clock w-[130px] absolute' alt="" />
                            <aside className='flex items-center justify-center icon-style cursor-pointer'>
                                <img src={textDesign} className='rotate-noClock w-[100px] absolute' alt="" />
                                <div className="icon"><GoArrowRight className='text-white text-2xl'/></div>
                            </aside>
                        </div>     
                </div>
                </a>

                
            </aside>

            {/* home right section  */}
            <aside className='left-aos z-10'>
                <img src={profileImg} className='up-down duration-700' alt="" />
            </aside>
        </div>
    );
};

export default Home;