import React from 'react';
import logo from '../assets/amanKumarLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const NavBar = () => {

    return (
        <nav className="mb-4 lg:mb-20 flex items-center justify-between lg:py-6">
            <div className='flex flex-shrink-0 items-center'>
                <a href="/">
                    <img  className='mx-2 w-10' width={100} h={100} src={logo} alt="logo"/>
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/singh-aman-kumar/'>
                    <FaLinkedin/>
                </a>
                <a href='https://github.com/dev-it-aman'>
                    <FaGithub/>
                </a>
                <a href='https://www.instagram.com/aman_singh1906/?hl=en'>
                    <FaInstagram/>
                </a>
                <a href='https://x.com/Amankumarsngh'>
                    <FaSquareXTwitter/>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;