import React from 'react'
import Button from '../components/Button'
import heroImg from '../assets/hero-image.png'
import BgComponent from '../components/BgComponent'


const Home = () => {

    const clickShop = () => {
        window.location.href = '/#sklep';
    }
    const clickContact = () => {
        window.location.href = '/#kontakt';
    }

    return (
        <div className='py-10 md:flex max-w-[1400px] mx-auto overflow-hidden'>
            <div className='flex flex-col gap-10 justify-center items-start px-10 text-white pt-[80px] flex-1'>
                <h1 className='text-xl sm:text-3xl md:text-5xl fontHero tracking-wider'>Znajdź <span className='text-yellow-500 fontHero font-semibold'>Meble</span>, które Odzwierciedlają Twój Styl!</h1>
                <p className='text-sm sm:text-xl'>Jesteśmy pasjonatami designu, oferującymi szeroki wybór mebli najwyższej jakości. Nasza misja polega na dostarczaniu wyjątkowych rozwiązań, które nadadzą charakter Twojemu domowi.</p>
                <div className='flex gap-4'>
                    <Button click={() => clickShop()} label='Sklep' colorImportant={true}/>
                    <Button click={() => clickContact()} label='Kontakt'colorImportant={false}/>
                </div>
            </div>
            <div className='flex justify-center flex-1 relative'>
                <div className='absolute top-[80px] right-10'>
                    <BgComponent colorImportant={false}/>
                </div>
                <img 
                    src={heroImg}
                    className='drop-shadow-2xl object-contain z-0 slide-in-right'
                />
            </div>
        </div>
    )
}

export default Home