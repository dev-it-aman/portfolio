import React from 'react';


import { RiJavaLine } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';
import { TbBrandCpp } from "react-icons/tb";

import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiHibernate } from "react-icons/si";
import { SiEjs } from "react-icons/si";

import { BiLogoPostgresql } from 'react-icons/bi';
import { TbSql } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { PiGitlabLogo } from "react-icons/pi";
import { DiDocker } from "react-icons/di";
import { SiSwagger } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";


import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
    return (
         <div className='border-b border-neutral-800 pb-16'>
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-50}}
            transition={{duration:1.5}}
            className='my-12 text-center text-4xl'>Technologies
            </motion.h2>
            <div className='mb-4'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiJavaLine className='text-7xl '/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandJavascript className='text-7xl text-yellow-700'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandCpp className='text-7xl'/> 
                    </motion.div>
                    
                </motion.div>
            </div>
            <div className='mb-4'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaNodeJs className='text-7xl text-green-500'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiHibernate className='text-7xl text-sky-700'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiEjs className='text-7xl'/> 
                    </motion.div>
                </motion.div>
            </div>
            <div className='mb-4'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <BiLogoPostgresql className='text-7xl text-sky-700'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbSql className='text-7xl'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <BiLogoMongodb className='text-7xl text-red-700'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaGithub className='text-7xl text-green-500'/> 
                    </motion.div>
                </motion.div>
            </div>
            <div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <PiGitlabLogo className='text-7xl text-sky-700'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <DiDocker className='text-7xl'/> 
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandRedux className='text-7xl text-green-500'/> 
                    </motion.div>
                </motion.div>
            </div>
         </div>
    )
};

export default Technologies;