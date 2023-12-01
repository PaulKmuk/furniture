import React from 'react'

import { useNavigate } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import { navigateLinks } from '../data/data';

const Footer = () => {

    const navigate = useNavigate()
    const arraySocialMedia = [ 
        { id: 1, icon: FaFacebookF}, 
        { id: 2, icon: FaTwitter }, 
        { id: 3, icon: FaInstagram}, 
        { id: 4, icon: FaLinkedin } ]

    const clickSection = (path) => {
        navigate(`/#${path}`)
        setActiveNavigate(false)
    }

    return (
        <div className='bg-emerald-800 w-full'>
            <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row text-white px-4 py-10 md:py-20 gap-10'>


                <div className="flex-1 flex flex-col gap-4">
                    <a href='/#' className="flex items-end  cursor-pointer">
                        <h1 className="text-4xl font-bold fontLogo">furniture</h1>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mb-1 ml-1"></div>
                    </a>
                    <p className='text-sm'>
                        Wierzymy, że każde wnętrze ma potencjał, dlatego oferujemy nie tylko wybór gotowych produktów, ale również zapraszamy do skorzystania z naszych usług projektowania wnętrz. Nasz zespół doświadczonych projektantów pomoże Ci stworzyć wyjątkową aranżację.
                    </p>
                    <div className='flex gap-4'>
                        {arraySocialMedia.map(el => (
                            <div 
                                className='bg-gray-200 text-gray-700 text-md md:text-xl rounded-full w-8 h-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-yellow-500'
                                key={el.id}
                            >
                                {<el.icon />}
                            </div>
                        ))}
                    </div>
                </div> 


                <div className='flex-1'>
                    <h3 className='fontHero text-xl'>Nawigacja</h3>
                    <div className='grid grid-cols-2 py-4 gap-4 text-md md:text-xl'>
                        {navigateLinks.map(el => (
                            <a
                                key={el.name}
                                onClick={() => clickSection(el.path)}
                                href={el.path}
                                className='hover:text-yellow-500 hover:underline'
                            >
                                {el.name}
                            </a>
                        ))}
                    </div>
                </div>


                <div className='flex-1'>
                    <h3 className='fontHero text-xl pb-4'>Adres</h3>
                    <h4 className='text-md'>ul. Mickiewicza 7</h4>
                    <h4 className='text-md pb-4'>00-110 Warszawa</h4>

                    <p className='text-gray-400 text-md'>+48 123-456-789</p>
                    <p className='text-gray-400 text-md pb-4'>+48 987-654-321</p>

                    <p className='flex items-center gap-2 text-md'>
                        <FaEnvelope />
                        biuro@furniture.com
                    </p>
                    
                </div>


            </div>

            <div className='w-full h-1 border-t border-gray-400 max-w-[1400px] mx-auto'></div>

            <div className='max-w-[1400px] mx-auto p-6 text-white text-sm'>
                <p>Copyright ©2023. All Rights Reserved. — Designed with love by <span className='italic font-semibold px-2'>p.kmuk</span></p>
            </div>

        </div>
    )
}

export default Footer