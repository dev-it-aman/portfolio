import React from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import profilePic from "../assets/amanKumar-removebg.png";
import { HERO_CONTENT, Roles, resume } from "../constants";

import { GrDocumentPdf } from "react-icons/gr";

const container = (delay) => ({
    hidden: {x:100, opacity: 0},
    visible: {
        x:0, 
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
    
})

const Hero =() => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                {/* image div */}
                <div className='w-full flex sm:justify-center lg:w-1/2 mb-4 relative'>
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5, duration:0.4, ease:"easeIn"}}>
                        <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1, duration:0.4, ease:"easeIn"}}
                        className='w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] flex justify-center  absolute'>
                            <img 
                            src={profilePic} alt = "profilePic"/>
                        </motion.div>
                        <motion.svg
                        className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                            <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#00ff99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{strokeDasharray: "24 10 0 0"}}
                            animate={{
                                strokeDasharray: ["12 120 25 25 ", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}>
                            </motion.circle>
                        </motion.svg>
                    </motion.div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <motion.h1
                        variants={container(0.25)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Aman Kumar
                        </motion.h1>
                        <div className='flex'>
                            <span className='bg-gradient-to-r mr-2 text-white bg-clip-text text-3xl tracking-tight text-transparent'>
                            I'm a {' '} </span>
                            <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                                <Typewriter
                                options={{
                                    strings: Roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                            </motion.span>
                        </div>
                        
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.button
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="bg-green-200 rounded-full shadow-button-33 text-red-600 cursor-pointer inline-block font-CerebriSans-Regular py-2 px-5 text-center text-decoration-none transition-all duration-250 border-0 text-base select-none touch-action-manipulation hover:shadow-button-33-hover transform hover:scale-105 hover:rotate-1"
                        >
                        <a href={resume} className="flex items-center">
                            View Resume
                            <span className="ml-2"><GrDocumentPdf /></span>
                        </a>
                        </motion.button>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Hero;