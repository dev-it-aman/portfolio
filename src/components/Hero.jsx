import React from 'react';
import { motion } from "framer-motion";

import profilePic from "../assets/amanKumar-removebg.png";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
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
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        class="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                            bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Hero;