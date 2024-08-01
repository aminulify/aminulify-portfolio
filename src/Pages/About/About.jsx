import React, { useState } from 'react';
import CountUp from 'react-countup';

// icons 
import ps from '../../../public/icons/ps.svg';
import ai from '../../../public/icons/ai.svg';
import figma from '../../../public/icons/figma.svg';
import xd from '../../../public/icons/xd.svg';
import premior from '../../../public/icons/premior.svg';

import html from '../../../public/icons/html.svg';
import css from '../../../public/icons/css.svg';
import bootstrap from '../../../public/icons/bootstrap.svg';
import tailwind from '../../../public/icons/tailwind.svg';
import js from '../../../public/icons/js.svg';
import react from '../../../public/icons/react.svg';
import next from '../../../public/icons/next.svg';
import firebase from '../../../public/icons/firebase.svg';
import node from '../../../public/icons/node.svg';
import express from '../../../public/icons/express.svg';
import rest from '../../../public/icons/rest.svg';
import mongodb from '../../../public/icons/mongodb.svg';
import zustand from '../../../public/icons/zustand.svg';
import git from '../../../public/icons/git.svg';
import github from '../../../public/icons/github.svg';
import vercel from '../../../public/icons/vercel.svg';
import netlify from '../../../public/icons/netlify.svg';
import jwt from '../../../public/icons/jwt.svg';

import word from '../../../public/icons/word.svg';
import excel from '../../../public/icons/excel.svg';
import { useMediaQuery } from 'react-responsive';



const About = () => {
    const [skill, setSkill] = useState(true);
    const [experience, setExperience] = useState(false);
    const [education, setEducation] = useState(false);

    const handleSkillBtn = () =>{
        setSkill(true);
        setExperience(false);
        setEducation(false);
    }
    const handleExperienceBtn = () =>{
        setSkill(false);
        setExperience(true);
        setEducation(false);
    }
    const handleEducationBtn = () =>{
        setSkill(false);
        setExperience(false);
        setEducation(true);
    }

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div className='w-[85%] mx-auto mb-28 md:my-16 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
            <aside className='left-aos'>
                <h2 className='text-3xl md:text-4xl text-white font-semibold'>I love to overcome new kind of <span className='text-[var(--mainColor)]'>challenges.</span></h2>
                <p className='text-white font-[300] text-sm my-5'>I am Aminul. Now I am 24 years old. I am studying on B.Sc of Computer Science and Engineering Department in National University. I am a student and freelancer. I have running almost over Four years client management experience. I am very smiling person and I am very flexible person. I am a good learner and understand fastly new technologies capability.</p>

                <div className='flex items-center md:gap-5 gap-2'>
                    <aside>
                        <h2 className='text-2xl md:text-4xl text-[var(--mainColor)] font-bold'>0<CountUp start={0} end={4} duration={3} />+</h2>
                        <p className='text-white md:text-[14px] text-[10px]'>YEARS OF EXPERIENCE</p>
                    </aside>
                    <div className="vertical-line-service"></div>
                    <aside>
                        <h2 className='text-2xl md:text-4xl text-[var(--mainColor)] font-bold'><CountUp start={0} end={550} duration={3} />+</h2>
                        <p className='text-white md:text-[14px] text-[10px]'>COMPLETED PROJECTS</p>
                    </aside>
                    <div className="vertical-line-service"></div>
                    <aside>
                        <h2 className='text-2xl md:text-4xl text-[var(--mainColor)] font-bold'><CountUp start={0} end={460} duration={3} />+</h2>
                        <p className='text-white md:text-[14px] text-[10px]'>SATISFIES CLIENTS</p>
                    </aside>
                    <div className="vertical-line-service"></div>
                    <aside>
                        <h2 className='text-2xl md:text-4xl text-[var(--mainColor)] font-bold'><CountUp start={0} end={12} duration={3} /></h2>
                        <p className='text-white md:text-[14px] text-[10px]'>WINNING AWARDS</p>
                    </aside>
                </div>
            </aside>

            <aside className='right-aos relative'>
                <div className='flex gap-5'>
                    <button className={`font-medium border-b-[1.5px] ${skill ? 'border-[var(--mainColor)] text-[var(--mainColor)]':'border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleSkillBtn}>Skills<span className='pl-[1px] font-bold'>.</span></button>
                    <button className={`font-medium border-b-[1.5px] ${experience ? 'border-[var(--mainColor)] text-[var(--mainColor)]':'border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleExperienceBtn}>Experience<span className='pl-[1px] font-bold'>.</span></button>
                    <button className={`font-medium border-b-[1.5px] ${education ? 'border-[var(--mainColor)] text-[var(--mainColor)]':'border-white text-white hover:border-[var(--mainColor)] duration-300'} pb-[1px]`} onClick={handleEducationBtn}>Education<span className='pl-[1px] font-bold'>.</span></button>
                </div>

                {
                    skill && (
                        <main className='md:text-left text-center left-aos'>
                            <h2 className='text-white mt-5 md:mt-5 pb-1'>Graphic Design / Web (Ui/Ux) Design <span className='font-black text-[var(--mainColor)]'>.</span></h2>
                            <span className='flex md:justify-normal justify-center gap-2'>
                                <img src={ai} className='w-5' alt="icon" />
                                <img src={ps} className='w-5' alt="icon" />
                                <img src={figma} className='w-5' alt="icon" />
                                <img src={xd} className='w-5' alt="icon" />
                                <img src={premior} className='w-5' alt="icon" />
                            </span>

                            <h2 className='text-white pt-5 pb-1'>Web Development <span className='font-black text-[var(--mainColor)]'>.</span></h2>
                            <span className={`flex gap-2 md:justify-normal justify-center flex-wrap w-[80%] ${isMobile && 'mx-auto'} `}>
                                <img src={html} className='w-5' alt="icon" />
                                <img src={css} className='w-5' alt="icon" />
                                <img src={bootstrap} className='w-5' alt="icon" />
                                <img src={tailwind} className='w-5' alt="icon" />
                                <img src={js} className='w-5' alt="icon" />
                                <img src={react} className='w-5' alt="icon" />
                                <img src={zustand} className='w-5' alt="icon" />
                                <img src={next} className='w-5' alt="icon" />
                                <img src={firebase} className='w-5' alt="icon" />
                                <img src={jwt} className='w-5' alt="icon" />
                                <img src={node} className='w-5' alt="icon" />
                                <img src={express} className='w-5' alt="icon" />
                                <img src={mongodb} className='w-5' alt="icon" />
                                <img src={rest} className='w-5' alt="icon" />
                                <img src={git} className='w-5' alt="icon" />
                                <img src={github} className='w-5' alt="icon" />
                                <img src={vercel} className='w-5' alt="icon" />
                                <img src={netlify} className='w-5' alt="icon" />
                            </span>

                            <h2 className='text-white pt-5 pb-1'>Optional <span className='font-black text-[var(--mainColor)]'>.</span></h2>
                            <span className='flex gap-2 md:justify-normal justify-center'>
                                <img src={word} className='w-5' alt="icon" />
                                <img src={excel} className='w-5' alt="icon" />
                            </span>

                            <h2 className='text-white pt-5 pb-1'>Soft Skills <span className='font-black text-[var(--mainColor)]'>.</span></h2>
                            <span className='flex gap-2 md:justify-normal justify-center'>
                                <div className={`flex gap-2 md:justify-normal justify-center w-[80%] flex-wrap`}>
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Smartly Communication</p>
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Creativity</p>
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Negotiation</p>
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Friendly Behavior</p>
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Good Learner</p> 
                                    <p className='text-white border-[1.5px] border-[var(--mainColor)] p-1 rounded-md font-[300] backdrop-blur-md text-sm'>Flexible</p> 
                                </div>
                            </span>
                        </main>
                    )
                }


                {/* exprience  */}
                {
                    education && (
                        <main className='md:text-left text-center left-aos mt-5'>
                            <h2 className='text-white pb-2'>Computer Science & Engineering - <span className='font-medium'>( 2021 - Present )</span></h2>
                            

                            <h2 className='text-white'>HSC - Science Department - <span className='font-medium'>( 2018 - 2020 )</span></h2>
                            <p className='text-[13px] text-[#ffffffa3]'>GPA - 5.00 OUT OF 5.00</p>
                        </main>
                    )
                }

                {/* experience  */}
                {
                    experience && (
                        <main className='md:text-left text-center left-aos mt-5'>
                            <h2 className='text-white'>Aminulify<span className='font-medium'> ( 2020 - Present )</span></h2>
                            <p className='text-white text-sm'>Freelancer / CEO</p>
                            <p className='text-[13px] text-[#ffffffa3]'>Service Location: All Over The World    <span className='mx-2'>|</span>Part Time</p>

                            <h2 className='text-white mt-3'>Easy Parts<span className='font-medium'> ( 2021 - 2022 )</span></h2>
                            <p className='text-white text-sm'>Website Administrator</p>
                            <p className='text-[13px] text-[#ffffffa3]'>Location: USA   <span className='mx-2'>|</span>   Full Time Remote Job</p>
                        </main>
                    )
                }
            </aside>
        </div>
    );
};

export default About;