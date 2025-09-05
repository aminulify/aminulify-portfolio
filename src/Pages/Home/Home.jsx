
import profileImg from '../../../public/frontImg.png';
import { GoArrowRight } from "react-icons/go";
import textDesign from '../../../public/round-text.png';
import btnDesignImg from '../../../public/text-round.png'; 
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
 
    return (
        <div className='w-[85%] mx-auto md:my-5 mb-14 md:grid md:grid-cols-2 flex flex-col-reverse md:flex-row md:justify-between items-center'>
            
            {/* home left section  */}
            <aside className='mb-32 md:mb-0 right-aos'>
                <h2 className='font-bold text-3xl md:text-4xl text-white'>Your Growth, Our Mission</h2>
                <h2 className='text-2xl md:text-3xl text-white py-3'>Our Expertise <span className='text-[var(--mainColor)] font-semibold signatureFont text-[28px] md:text-[40px]'><TypeAnimation
                preRenderFirstString={true}
                        sequence={[
                            'Brand Identity Design',
                            1500,
                            'Graphic Design',
                            1500,
                            'Animated Web UI / UX Design',
                            1500,
                            'Web Application Development',
                            1500,
                            'Social Media Carousel Design',
                            1500,
                            
                        ]}
                        // speed={50}
                        
                        repeat={Infinity}
                        /></span></h2>
                <p className='text-[var(--paraColor)] text-white font-[300] pb-5 text-md md:text-lg'>Build a brand that stands out with modern design, social presence, and a powerful website. We help you run your business the smart way.</p>

                <a href="https://drive.google.com/file/d/1Qr_UOWpIOlsJdrNJLACFyIaMHO5tvaD-/view?usp=sharing" target='_blank'>
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
            <aside className='left-aos z-10 w-[90%]'>
                <img src={profileImg} className='up-down duration-700' alt="" />
            </aside>
        </div>
    );
};

export default Home;