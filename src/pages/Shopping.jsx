import React, { useState } from 'react'
import { shopElements } from '../data/dataShopping'
import Button from '../components/Button'
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, openCart, changeAmountElement } from '../redux/shoppingSlice';

const Shopping = () => {

    const dispatch = useDispatch()
    const box = useSelector(state => state.shopping.shoppingCart)
    const [activeCategory, setActiveCategory] = useState('Wszystkie')
    const category = [ 'Wszystkie', 'Krzesła', 'Sofy', 'Komody' ]
    const categoryClass = 'pb-1 cursor-pointer border-b-4 border-transparent hover:border-yellow-500'
    const activeCategoryClass = 'pb-1 cursor-pointer border-b-4 border-yellow-500'

    let elements = []
    if(activeCategory === 'Wszystkie') {
        elements = shopElements
    } else {
        elements = shopElements.filter(el => el.type === activeCategory)
    }

    const handleAddElementClick = (element) => {
        const elementExist = box.find(el => el.id === element.id)
        if(!elementExist) {
            dispatch(addElement(element))
            dispatch(openCart())
        } else {
            const newBox = box.map(el => {
                if(el.id === element.id) {
                    return { ...el, amount: el.amount+1 }
                } else {
                    return el
                }
            })
            dispatch(changeAmountElement(newBox))
            dispatch(openCart())
        }
    }

    return (
        <div>
            <div className='h-[250px] bg-emerald-800'>
                <div className='max-w-[1400px] mx-auto flex items-center h-full'>
                    <h1 className='text-3xl md:text-5xl fontHero tracking-wider font-bold text-gray-200 px-10'>Sklep</h1>
                </div>
                <div className='bg-gray-200'>
                    <div className='max-w-[1400px] mx-auto flex flex-col gap-10 py-20'>
                        <h1 className='mx-auto text-3xl md:text-5xl font-bold fontHero'>Produkty</h1>
                        <ul className='flex gap-6 mx-auto text-xl md:text-2xl font-semibold px-2 flex-wrap'>
                            {category.map(el => (
                                <li 
                                    className={activeCategory === el ? activeCategoryClass : categoryClass}
                                    key={el}
                                    onClick={() => setActiveCategory(el)}
                                >
                                    {el}
                                </li>
                            ))}
                        </ul>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-16'>
                            {elements.map(el => (
                                <div
                                    className='flex flex-col overflow-hidden'
                                    key={el.id}
                                >
                                    <div className='flex justify-center group items-center flex-1 bg-gray-100 hover:bg-gray-300 relative'>
                                        <div className='absolute hidden group-hover:flex bottom-10 slide-in-bottom'>
                                            <Button click={() => handleAddElementClick(el)} colorImportant={true} label='Dodaj do koszyka'/>
                                        </div>
                                        <img src={el.pathImg} className='max-h-[300px] object-cover'/>
                                    </div>
                                    <div className='flex flex-col flex-1 items-center py-2'>
                                        <h4 className='pt-4 text-xl md:text-2xl'>{el.label}</h4>
                                        <p className='font-bold p-2 bg-yellow-500 origin-top-left rotate-6'>{el.price} zł</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
                
            </div>
        </div>
    )
}

export default Shopping