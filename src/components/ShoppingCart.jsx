import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsXLg } from "react-icons/bs";

import { useSelector, useDispatch } from 'react-redux';
import { changeAmountElement, closeCart, removeAllElements, removeElement } from '../redux/shoppingSlice';

import Button from './Button';

const ShoppingCart = () => {

    const box = useSelector(state => state.shopping.shoppingCart)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPirice] = useState(0)
    const navigate = useNavigate()

    const handleAmountChange = (id, newAmount) => {
        if(newAmount === '' || isNaN(newAmount)) {
            newAmount = 0;
        }
        if(newAmount >= 0) {
            const newBox = box.map(el => {
                if(el.id === id) {
                    return { ...el, amount: parseInt(newAmount) }
                } return el
            })
            dispatch(changeAmountElement(newBox));
        }
    };

    useEffect(() => {
        let totalPrice = 0
        box.forEach(el => {
            totalPrice = totalPrice + (el.price*el.amount)
        });
        setTotalPirice(totalPrice)
    },[box])

    const continueShopping = () => {
        navigate('/shopping')
        dispatch(closeCart())
    }
    
    const handleBuy = () => {
        if(box.length > 0) {
            dispatch(removeAllElements())
            dispatch(closeCart())
            alert(`Dokonałeś zakupu o wartości ${totalPrice} zł, dziekujemy i zapraszamy ponownie`)
        } else {
            alert(`Twój koszyk jest pusty, dodaj jakiś element`)
        }
    }

    const handleRemoveElement = (id) => {
        const newBox = box.filter(el => el.id !== id)
        dispatch(removeElement(newBox))
    }

    const thClass = 'fontHero pb-6'
    const tdClass = 'text-center md:text-xl'

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center'>
            <div className='md:w-[800px] w-full h-screen sm:h-auto'>
                <div className=' bg-emerald-800 text-gray-100 flex items-center gap-6 md:gap-10 py-10 px-5 md:px-10 md:pl-20 relative'>
                    <p className='text-3xl sm:text-4xl md:text-6xl text-yellow-500'><FaShoppingCart /></p>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl fontHero tracking-wider'>Twój koszyk zakupów</h2>
                    <div className='absolute top-0 right-0 text-2xl md:text-4xl m-6 cursor-pointer hover:text-yellow-500'>
                        <BsXLg onClick={() => dispatch(closeCart())}/>
                    </div>
                </div>
                <div className='w-full px-10 md:px-20 pt-10 bg-gray-200 overflow-x-auto max-h-[350px] md:max-h-[400px]'>

                    <table className='w-full min-w-[400px]'>
                        <thead className='md:text-xl'>
                            <tr className='border-b-2 border-gray-600'>
                                <th className={thClass}>Zdjęcie</th>
                                <th className={thClass}>Produkt</th>
                                <th className={thClass}>Cena szt</th>
                                <th className={thClass}>Ilość</th>
                                <th className={thClass}>Cena</th>
                                <th className={thClass}>Usuń</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-100 overflow-y-auto '>
                            {box.map(el => (
                                <tr key={el.id} className='border-b border-gray-300'>
                                    <td className='flex justify-center items-center h-[50px] md:h-[70px]'>
                                        <img className='w-[30px] md:w-[45px] my-auto' src={el.pathImg}/>
                                    </td>
                                    <td className='text-center font-bold md:text-xl'>{el.label}</td>
                                    <td className={tdClass}>{el.price} zł</td>
                                    <td className='text-xl text-center'>
                                        <input 
                                            type='number'
                                            value={el.amount}
                                            onChange={(e) => handleAmountChange(el.id, e.target.value)}
                                            className='w-20 px-4 py-3 text-center'  />
                                    </td>
                                    <td className={tdClass}>{el.price * el.amount} zł</td>
                                    <td className='text-4xl'>
                                        <MdDeleteForever onClick={() => handleRemoveElement(el.id)} className='mx-auto m-4 cursor-pointer'/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {box.length === 0 && (
                        <div className='w-full bg-gray-100 min-w-[400px]'>
                            <p className='w-full text-center md:text-xl py-8'>Twój koszyk jest pusty</p>
                        </div>
                    )}

                </div>

                <div className='md:flex w-full bg-gray-200'>
                    <div className='py-10 px-10 md:px-20 ml-10 mr-auto flex items-center gap-6'>
                        <h2 className='text-md sm:text-xl md:text-2xl fontHero tracking-wider'>Razem:</h2>
                        <h2 className='text-xl md:text-3xl font-black bg-yellow-500 p-1'>{totalPrice} zł</h2>
                    </div>
                    <div className='py-10 px-10 md:px-20 ml-auto mr-10 flex justify-center items-center gap-6'>
                        <Button click={() => continueShopping()} label='Kontynuuj'/>
                        <Button click={() => handleBuy()} colorImportant={true} label='Zapłać'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart