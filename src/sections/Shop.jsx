import React from 'react'
import Button from '../components/Button'
import { shopElements } from '../data/dataShopping'
import { useNavigate } from 'react-router-dom'

const Shop = () => {

    const navigate = useNavigate()

    const clickShopOnline = () => {
        // window.location.href = '/shopping'
        navigate('/shopping')
    }

    const array = [ 
        shopElements.find(el => el.type === 'Krzesła'),
        shopElements.find(el => el.type === 'Sofy'),
        shopElements.find(el => el.type === 'Komody'),
    ]

    return (
        <div className='px-8 py-[80px] text-gray-800 lg:flex md:gap-20 max-w-[1400px] mx-auto'>
            <div className='flex-[30%] lg:flex lg:flex-col lg:justify-center'>
                <h2 className='fontHero font-bold text-2xl md:text-6xl'>
                    Zamów w naszym sklepie <span className='fontHero font-bold text-2xl md:text-6xl text-yellow-500'>online</span>
                </h2>
                <p className='md:text-xl py-10'>
                    Witaj w naszym sklepie, gdzie "design" spotyka funkcjonalność! Niezależnie od tego, czy szukasz nowej sofy do salonu, eleganckiego stołu jadalnianego czy też designerskiego fotela, nasz sklep oferuje produkty, które nadadzą charakter Twojemu wnętrzu.
                </p>
                <div className='flex justify-center'>
                    <Button label='Sklep Online' colorImportant={true} click={() => clickShopOnline()}/>
                </div>
            </div>
            <div className='flex-[70%] lg:flex'>
                {array.map(el => (
                    <div 
                        key={el.id}
                        className='flex flex-col items-center rounded-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-200 pb-10'
                    >
                        <div className='flex flex-col my-auto mx-auto'>
                            <img 
                                src={el.pathImg}
                                className='mx-auto my-auto'
                            />
                        </div>
                        <p className='fontHero text-xl pb-1'>{el.label}</p>
                        <p className='font-bold p-2 bg-yellow-500 origin-top-left rotate-6'>{el.price} zł</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop