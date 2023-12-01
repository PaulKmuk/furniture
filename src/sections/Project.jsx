import React from 'react'
import Button from '../components/Button'
import photo1 from '../assets/photo3/photo1.png'
import photo2 from '../assets/photo3/photo2.png'
import photo3 from '../assets/photo3/photo3.png'
import { FaRegHandPointRight } from "react-icons/fa";
import { project } from '../data/data'

const Project = () => {

    const clickContact = () => {
        window.location.href = '/#kontakt';
    }

    return (
        <div className=' flex flex-col lg:flex-row max-w-[1400px] mx-auto gap-10'>

            <div className='flex-1 flex flex-col gap-2 md:gap-4 p-10 md:p-20 max-w-[600px] h-max mx-auto z-10'>
                <div className='grid grid-cols-2 gap-2 md:gap-4 max-h-[500px]'>
                    <div className='flex-1 flex'>
                        <img className='bg-emerald-600 rounded-3xl h-full' src={photo1}/>
                    </div>
                    <div className='flex-1 flex'>
                        <img className='bg-emerald-600 rounded-3xl h-full' src={photo2}/>
                    </div>
                </div>
                <div className='flex md:max-h-[200px] max-h-[150px]'>
                    <img className='bg-emerald-600 rounded-3xl w-full object-contain' src={photo3}/>
                </div>
            </div>

            <div className='flex-1 p-10 md:p-20 flex flex-col'>
                <h2 className='fontHero font-bold text-2xl md:text-4xl'>{project.title}</h2>
                <p className='md:text-xl py-10'>{project.description}</p>
                <div>
                    <ul className='grid lg:grid-cols-2'>
                        {project.points.map(el => (
                            <li key={el.id} className='flex gap-4 py-6'>
                                <p className='text-2xl pt-1'><FaRegHandPointRight /></p>
                                <div>
                                    <h3 className='font-semibold'>Krok <span>{el.id}</span>: {el.label}</h3>
                                    <p className='py-2'>{el.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mx-auto'>
                    <Button click={() => clickContact()} label='Kontakt'/>
                </div>
            </div>
        </div>
    )
}

export default Project